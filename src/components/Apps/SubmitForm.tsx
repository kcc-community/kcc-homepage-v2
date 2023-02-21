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
import { FormDataProps, ProjectStatus, RequestType } from './types'
import { PlusOutlined } from '@ant-design/icons'
import Image from 'next/image'
import GoogleCaptcha from './GoogleCaptcha'
import { useResponsive } from '../../utils/responsive'
import { getBase64, uploadImg } from 'utils/submit'

const { Option } = Select

const initState: FormDataProps = {
  name: '',
  request: RequestType['New submission'],
  project_status: ProjectStatus.Live,
  website: '',
  category_ids: '',
  brief_introduction: '',
  detail_description: '',
  base64_image_content: '',
  smart_contract_address: '',
  token_symbol: '',
  project_email: '',
  token_contract_address: '',
  tvl_interface: '',
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
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 24px 80px 24px;
    box-sizing: border-box;
  }
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
    font-size: 24px;
    font-weight: 500;
  }
`

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
}

const SubmitForm: React.FC = () => {
  const { t } = useTranslation()
  const { isMobile } = useResponsive()
  const [form] = Form.useForm<FormDataProps>() // useForm to collect form data
  const [fileList, setFileList] = React.useState<UploadFile[]>([])
  const [previewOpen, setPreviewOpen] = React.useState<boolean>(false)
  const [previewImage, setPreviewImage] = React.useState<string>('')
  const [previewTitle, setPreviewTitle] = React.useState<string>('')
  const [refreshTag, setRefreshTag] = React.useState<number>(0)
  const [loading, setLoading] = React.useState<boolean>(false)

  const tailLayout = React.useMemo(() => {
    return {
      wrapperCol: { offset: isMobile ? 0 : 8, span: isMobile ? 24 : 16 },
    }
  }, [isMobile])

  const setToken = React.useCallback(
    (token: string) => {
      form.setFieldValue('token', token)
    },
    [form]
  )

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
    customRequest: (option: any) => {
      const file = option.file
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64 = reader.result
        form.setFieldValue('base64_image_content', base64)
      }
    },
    onRemove: (file: any) => {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      setFileList(newFileList)
    },
    accept: 'image/*',
    fileList,
  }

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file)
    }
    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(file.originFileObj.name ?? file.url)
  }

  const handleCancel = () => setPreviewOpen(false)

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{t('Upload')}</div>
    </div>
  )

  const LogoItem = (
    <div>
      <span style={{ marginRight: '10px' }}>{t('Logo')}</span>
      <span style={{ fontSize: '12px', color: '#737E8D' }}>
        {t('Image Size')}: 256*256px
      </span>
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
            label={t('Name')}
            rules={[{ required: true }, { min: 3, max: 30 }]}
            initialValue={initState.name}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="request"
            label={t('Request Type')}
            rules={[{ required: true }]}
            initialValue={initState.request}
          >
            <Radio.Group>
              <Radio value={RequestType['New submission']}>
                {t(RequestType[0])}
              </Radio>
              <Radio value={RequestType['Update dApp information']}>
                {t(RequestType[1])}
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
              <Radio value={ProjectStatus.Live}>{t(ProjectStatus[0])}</Radio>
              <Radio value={ProjectStatus['Work in progress']}>
                {t(ProjectStatus[1])}
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="website"
            label={t('Website')}
            rules={[{ required: true }]}
            initialValue={initState.website}
          >
            <Input placeholder={t('Enter official website URL') as any} />
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
            <Input.TextArea
              placeholder={t('One sentence description of the project') as any}
              rows={2}
            />
          </Form.Item>
          <Form.Item
            name="detail_description"
            label={t('Detail Description')}
            rules={[{ max: 500 }]}
            initialValue={initState.detail_description}
          >
            <Input.TextArea
              placeholder={t('A detailed summary about your project') as any}
              rows={4}
            />
          </Form.Item>
          <Form.Item
            name="base64_image_content"
            label={LogoItem}
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
                  const metadata = await uploadImg(e.file as any, {
                    width: 256,
                    height: 256,
                  })
                  if (metadata) {
                    form.setFieldValue('base64_image_content', metadata)
                    setFileList(() => [
                      { ...e.file.originFileObj, url: metadata },
                    ])
                  } else {
                    setFileList(() => [])
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
            initialValue={initState.smart_contract_address}
          >
            <Input placeholder={t('Enter smart contract address') as any} />
          </Form.Item>
          <Form.Item
            name="token_symbol"
            label={t('Token Symbol')}
            initialValue={initState.token_symbol}
          >
            <Input placeholder={t('Enter the Token Symbol') as any} />
          </Form.Item>
          <Form.Item
            name="project_email"
            label={t('Project Email')}
            rules={[{ required: true }, { type: 'email', min: 6 }]}
            initialValue={initState.project_email}
          >
            <Input placeholder={t('Enter the Email for contact') as any} />
          </Form.Item>
          <Form.Item
            name="token_contract_address"
            label={t('Token Contract Address')}
            initialValue={initState.token_contract_address}
          >
            <Input placeholder={t('Enter the Token Contract Address') as any} />
          </Form.Item>
          <Form.Item
            name="tvl_interface"
            label={t('Tvl Interface')}
            rules={[{ type: 'url' }]}
            initialValue={initState.tvl_interface}
          >
            <Input placeholder="e.g.: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2" />
          </Form.Item>
          <Form.Item
            name="github"
            label={t('Github')}
            rules={[{ type: 'url' }]}
            initialValue={initState.github}
          >
            <Input placeholder="e.g.: https://github.com/kcc-community" />
          </Form.Item>
          <Form.Item
            name="twitter"
            label={t('Twitter')}
            rules={[{ type: 'url' }]}
            initialValue={initState.twitter}
          >
            <Input placeholder={t('Enter project twitter URL') as any} />
          </Form.Item>
          <Form.Item
            name="telegram"
            label={t('Telegram')}
            rules={[{ type: 'url' }]}
            initialValue={initState.telegram}
          >
            <Input placeholder={t('Enter project telegram URL') as any} />
          </Form.Item>
          <Form.Item
            name="coinmarketcap"
            label={t('Coinmarketcap')}
            rules={[{ type: 'url' }]}
            initialValue={initState.coinmarketcap}
          >
            <Input
              placeholder={t('Enter project CoinMarketCap page URL') as any}
            />
          </Form.Item>
          <Form.Item
            name="coingecko"
            label={t('Coingecko')}
            rules={[{ type: 'url' }]}
            initialValue={initState.coingecko}
          >
            <Input placeholder={t('Enter project CoinGecko page URL') as any} />
          </Form.Item>
          <Form.Item label={t('Google Captcha')} initialValue={initState.token}>
            <GoogleCaptcha
              token={form.getFieldValue('token')}
              setToken={setToken}
              refreshTag={refreshTag}
            />
          </Form.Item>

          <Form.Item {...tailLayout} style={{ width: '100%' }}>
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
