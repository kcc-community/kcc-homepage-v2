import {
  Form,
  Input,
  Select,
  Button,
  Radio,
  Upload,
  UploadFile,
  Modal,
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

const { Option } = Select

const initState: FormDataProps = {
  name: '',
  requestType: RequestType['New submission'],
  project_status: ProjectStatus.Live,
  website: '',
  category_ids: '',
  brief_introduction: '',
  detail_description: '',
  logo_url: '',
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
  const [previewOpen, setPreviewOpen] = React.useState(false)
  const [previewImage, setPreviewImage] = React.useState('')
  const [previewTitle, setPreviewTitle] = React.useState('')

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

  const onFinish = (values: any) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

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
          <Form.Item name="name" label={t('name')} rules={[{ required: true }]}>
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
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={2} />
          </Form.Item>
          <Form.Item
            name="detail_description"
            label={t('Detail Description')}
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="logo_url"
            label={t('Logo')}
            rules={[{ required: true }]}
          >
            <Upload
              name="avatar"
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
                alt={fileList.length ? fileList[0].name : 'preview'}
                width={256}
                height={256}
                src={previewImage}
              />
            </Modal>
          </Form.Item>
          <Form.Item
            name="smart_contract_address"
            label={t('Contract Address')}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="token_symbol"
            label={t('Token Symbol')}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="project_email"
            label={t('Project Email')}
            rules={[{ required: true }, { type: 'email', min: 6 }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="token_contract_address"
            label={t('Token Contract Address')}
            rules={[]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="tvl_interface"
            label={t('Tvl Interface')}
            rules={[{ required: true }, { type: 'url' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="github"
            label={t('Github')}
            rules={[{ type: 'url' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="twitter"
            label={t('Twitter')}
            rules={[{ type: 'url' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="telegram"
            label={t('Telegram')}
            rules={[{ type: 'url' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="coinmarketcap"
            label={t('Coinmarketcap')}
            rules={[{ type: 'url' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="coingecko"
            label={t('Coingecko')}
            rules={[{ type: 'url' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="token" label={t('Token')}>
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              {t('Submit')}
            </Button>
            <Button htmlType="button" onClick={onReset}>
              {t('Reset')}
            </Button>
          </Form.Item>
        </StyledForm>
      </Content>
    </FormWrap>
  )
}

export default SubmitForm
