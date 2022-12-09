import {
  Form,
  Input,
  Select,
  Button,
  Radio,
  Upload,
  UploadFile,
  Modal,
  message,
} from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { useAppCategoryList } from '../../state/apps/hooks'
import { DappService } from 'api/dapp'
import { updateAppCategoryList } from 'state/apps/actions'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'state'
import StringCrypto from 'string-crypto'
import { uploadImg } from 'utils/submit'
import { FormDataProps, ProjectStatus, RequestType } from './types'
import { NFTStorage } from 'nft.storage'
import { Ipfs, IpfsUri } from 'constants/index'
import { RcFile } from 'antd/es/upload'
import { PlusOutlined } from '@ant-design/icons'
import Image from 'next/image'
import GoogleCaptcha from './GoogleCaptcha'

const { Option } = Select

const initState: FormDataProps = {
  name: 'test',
  requestType: RequestType['New submission'],
  project_status: ProjectStatus.Live,
  website: 'https://123.com',
  category_ids: '1,2',
  brief_introduction: 'kkkj',
  detail_description: 'jkjk',
  logo_url:
    'https://ipfs.kcc.network/ipfs/bafkreiett2drwhs4cirm27chkbbmjfloeb2fvz2rirlls5xprhklwuajle',
  smart_contract_address: '0xa6fD2503fcF6F795D4d1593085BF3040651D01D9',
  token_symbol: 'test',
  project_email: '123@qq.com',
  token_contract_address: '0xa6fD2503fcF6F795D4d1593085BF3040651D01D9',
  tvl_interface: 'https://123.com',
  github: '',
  twitter: '',
  telegram: '',
  coinmarketcap: '',
  coingecko: '',
  token: '',
}

const FormWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`

const Content = styled.div`
  width: 540px;
  height: 100%;
  margin: 0 auto;
  margin-top: 80px;
  padding-top: 50px;
  padding-bottom: 100px;
`

const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  display: flex;
  align-items: center;
  color: #000;
  margin-bottom: 20px;
`

const StyledForm = styled(Form)`
  .ant-form-item {
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 500;
  }
`

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

const SubmitForm: React.FC = () => {
  const { t } = useTranslation('submit')
  const [form] = Form.useForm<FormDataProps>() // useForm to collect form data
  const [fileList, setFileList] = React.useState<UploadFile[]>([])
  const [previewOpen, setPreviewOpen] = React.useState<boolean>(false)
  const [previewImage, setPreviewImage] = React.useState<string>('')
  const [previewTitle, setPreviewTitle] = React.useState<string>('')
  const [refreshTag, setRefreshTag] = React.useState<number>(0)
  const [loading, setLoading] = React.useState<boolean>(false)

  const setToken = React.useCallback(
    (token: string) => {
      form.setFieldValue('token', token)
    },
    [form]
  )

  const { decryptString } = new StringCrypto()

  const client = new NFTStorage({ token: decryptString(Ipfs, 'KCC_DISCOVER') })

  const categoryList = useAppCategoryList()

  const dispatch = useDispatch<AppDispatch>()

  // update category list
  React.useEffect(() => {
    async function updateList() {
      const response = await DappService.categoryList()
      dispatch(updateAppCategoryList({ list: response.data.data.list }))
    }
    if (categoryList.length < 1) {
      updateList()
    }
  }, [categoryList, dispatch])

  const onReset = React.useCallback(() => {
    form.resetFields()
  }, [form])

  const onFinish = React.useCallback(
    async (values: any) => {
      console.log(values)
      try {
        setLoading(() => true)
        // get googlecaptcha code
        setRefreshTag((n) => n + 1)
        setTimeout(async () => {
          if (form.getFieldValue('token')) {
            // handle data with categories
            values = {
              ...values,
              token: form.getFieldValue('token'),
              category_ids: values.category_ids?.join(','),
            }
            // send add new dapp request
            console.log('values', values)
            const response = await DappService.addApp(values)
            console.log('response', response)
            if (response.data.code === 1) {
              message.error(response.data.msg)
            } else {
              message.success(t('Successfully Submit Project'))
              onReset()
            }
          } else {
            console.log('no google captcha')
          }
        }, 100)
      } catch (e) {
        console.warn(e)
      } finally {
        setLoading(() => false)
      }
    },
    [form, onReset, t]
  )

  const upLoadProps = {
    onRemove: (file: any) => {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      setFileList(newFileList)
    },
    beforeUpload: (file: any) => {
      console.log('file =', file)
      setFileList([...fileList, file])
      return false
    },
    accept: 'image/*',
    fileList,
  }

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }
    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(file.name ?? file.url)
  }

  const handleCancel = () => setPreviewOpen(false)

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{t('Upload')}</div>
    </div>
  )

  return (
    <FormWrap>
      <Content>
        <Title>{t('Submit Project')}</Title>
        <StyledForm
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label={t('name')}
            rules={[{ required: true }, { min: 3, max: 30 }]}
            initialValue={initState.name}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="requestType"
            label={t('Request Type')}
            rules={[{ required: true }]}
            initialValue={initState.requestType}
          >
            <Radio.Group>
              <Radio value={RequestType['New submission']}>
                {RequestType[0]}
              </Radio>
              <Radio value={RequestType['Update dApp information']}>
                {RequestType[1]}
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="project_status"
            label={t('Project Status')}
            rules={[{ required: true }]}
            initialValue={initState.project_status}
          >
            <Radio.Group>
              <Radio value={ProjectStatus.Live}>{ProjectStatus[0]}</Radio>
              <Radio value={ProjectStatus['Work in progress']}>
                {ProjectStatus[1]}
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="website"
            label={t('Website')}
            rules={[{ required: true }]}
            initialValue={initState.website}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category_ids"
            label={t('Categories')}
            rules={[{ required: true }]}
          >
            <Select mode="multiple">
              {categoryList.map((category, index) => {
                return (
                  <Option key={index} value={category.id}>
                    {category.name}
                  </Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name="brief_introduction"
            label={t('Brief Introduction')}
            rules={[{ required: true }, { max: 50 }]}
            initialValue={initState.brief_introduction}
          >
            <Input.TextArea rows={2} />
          </Form.Item>
          <Form.Item
            name="detail_description"
            label={t('Detail Description')}
            rules={[{ required: true }, { max: 500 }]}
            initialValue={initState.detail_description}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="logo_url"
            label={t('Logo')}
            rules={[{ required: true }]}
          >
            <>
              <Upload
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={true}
                onPreview={handlePreview}
                {...upLoadProps}
                onChange={async (e: any) => {
                  // delete upload
                  if (!e.fileList.length) {
                    return false
                  }
                  const metadata = await uploadImg(client, e.file, {
                    width: 256,
                    height: 256,
                  })
                  if (metadata) {
                    console.log(
                      '`${IpfsUri}/${metadata}`',
                      `${IpfsUri}/${metadata}`
                    )
                    form.setFieldValue('logo_url', `${IpfsUri}/${metadata}`)
                    setFileList((oldFileList) => {
                      return [
                        { ...oldFileList[0], url: `${IpfsUri}/${metadata}` },
                      ]
                    })
                  }
                }}
              >
                {fileList.length > 0 ? null : uploadButton}
              </Upload>
              <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <Image
                  alt={'preview'}
                  width={256}
                  height={256}
                  src={previewImage}
                />
              </Modal>
            </>
          </Form.Item>
          <Form.Item
            name="smart_contract_address"
            label={t('Contract Address')}
            rules={[{ required: true }]}
            initialValue={initState.smart_contract_address}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="token_symbol"
            label={t('Token Symbol')}
            rules={[{ required: true }]}
            initialValue={initState.token_symbol}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="project_email"
            label={t('Project Email')}
            rules={[{ required: true }, { type: 'email', min: 6 }]}
            initialValue={initState.project_email}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="token_contract_address"
            label={t('Token Contract Address')}
            rules={[]}
            initialValue={initState.token_contract_address}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="tvl_interface"
            label={t('Tvl Interface')}
            rules={[{ required: true }, { type: 'url' }]}
            initialValue={initState.tvl_interface}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="github"
            label={t('Github')}
            rules={[{ type: 'url' }]}
            initialValue={initState.github}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="twitter"
            label={t('Twitter')}
            rules={[{ type: 'url' }]}
            initialValue={initState.twitter}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="telegram"
            label={t('Telegram')}
            rules={[{ type: 'url' }]}
            initialValue={initState.telegram}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="coinmarketcap"
            label={t('Coinmarketcap')}
            rules={[{ type: 'url' }]}
            initialValue={initState.coinmarketcap}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="coingecko"
            label={t('Coingecko')}
            rules={[{ type: 'url' }]}
            initialValue={initState.coingecko}
          >
            <Input />
          </Form.Item>
          <Form.Item label={t('Google Captcha')} initialValue={initState.token}>
            <GoogleCaptcha
              token={form.getFieldValue('token')}
              setToken={setToken}
              refreshTag={refreshTag}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              size="large"
              style={{
                marginRight: '20px',
                borderRadius: '24px',
                padding: '0 20px',
              }}
            >
              {t('Submit')}
            </Button>
            <Button
              size="large"
              htmlType="button"
              onClick={onReset}
              style={{ borderRadius: '24px', padding: '0 20px' }}
            >
              {t('Reset')}
            </Button>
            {/* <Button
              htmlType="button"
              onClick={() => setRefreshTag((n) => n + 1)}
            >
              {t('Test')}
            </Button> */}
          </Form.Item>
        </StyledForm>
      </Content>
    </FormWrap>
  )
}

export default SubmitForm
