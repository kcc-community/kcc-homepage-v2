import { Form, Input, Select, Button, Radio } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { useAppCategoryList } from '../../state/apps/hooks'
import { DappService } from 'api/dapp'
import { updateAppCategoryList } from 'state/apps/actions'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'state'

const { Option } = Select

enum RequestType {
  'New submission',
  'Update dApp information',
}

enum ProjectStatus {
  'Live',
  'Work in progress',
}

interface FormDataProps {
  name: string
  requestType: RequestType
  project_status: ProjectStatus
  website: string
  category_ids: string
  brief_introduction: string
  detail_description: string
  logo_url: string
  smart_contract_address: string
  token_symbol: string
  project_email: string
  token_contract_address?: string
  tvl_interface: string
  github?: string
  twitter?: string
  telegram?: string
  coinmarketcap?: string
  coingecko?: string
  token?: string
}

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

const SubmitForm: React.FC = () => {
  const { t } = useTranslation('submit')
  const [form] = Form.useForm<FormDataProps>()

  const categoryList = useAppCategoryList()

  const dispatch = useDispatch<AppDispatch>()

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
            <Input />
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
            rules={[{ required: true }]}
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
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="github" label={t('Github')}>
            <Input />
          </Form.Item>
          <Form.Item name="twitter" label={t('Twitter')}>
            <Input />
          </Form.Item>
          <Form.Item name="telegram" label={t('Telegram')}>
            <Input />
          </Form.Item>
          <Form.Item name="coinmarketcap" label={t('Coinmarketcap')}>
            <Input />
          </Form.Item>
          <Form.Item name="coingecko" label={t('Coingecko')}>
            <Input />
          </Form.Item>
          <Form.Item name="token" label={t('Token')}>
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </StyledForm>
      </Content>
    </FormWrap>
  )
}

export default SubmitForm
