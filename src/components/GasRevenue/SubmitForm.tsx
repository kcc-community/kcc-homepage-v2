import { Form, Input, UploadFile, Modal, message } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useResponsive } from 'utils/responsive'
import { NormalButton } from '../Button'

const initState = {
  name: '',
  website: '',
  profile: '',
  contact: '',
}

const FormWrap = styled.div`
  width: 100%;
  height: auto;
  background: #f5f5f5;
  margin-top: 20px;
  border: 1px solid green;
`

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 32px auto;
  border-radius: 24px;
  padding-top: 50px;
  padding-bottom: 80px;
  background: #fff;
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
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  margin-bottom: 20px;
`

const StyledForm = styled(Form)`
  width: 736px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  .ant-form-item {
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 500;
    width: 100%;
  }
`

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
}

const SubmitForm: React.FC = () => {
  const { t } = useTranslation()
  const { isMobile } = useResponsive()
  const [form] = Form.useForm<any>() // useForm to collect form data
  const [loading, setLoading] = React.useState<boolean>(false)
  const tailLayout = React.useMemo(() => {
    return {
      wrapperCol: { offset: isMobile ? 0 : 8, span: isMobile ? 24 : 16 },
    }
  }, [isMobile])

  const onReset = React.useCallback(() => {
    form.resetFields()
  }, [form])

  const onFinish = React.useCallback(
    async (values: any) => {
      console.log(values)
      try {
        setLoading(() => true)
        // get googlecaptcha code
      } catch (e) {
        console.warn(e)
      } finally {
        setLoading(() => false)
      }
    },
    [form, onReset, t]
  )

  return (
    <FormWrap>
      <Content>
        <Title>{t('Information Submission')}</Title>
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
            <Input style={{ width: '100%', height: '54px' }} />
          </Form.Item>

          <Form.Item
            name="name"
            label={t('Name')}
            rules={[{ required: true }, { min: 3, max: 30 }]}
            initialValue={initState.name}
          >
            <Input style={{ width: '100%', height: '54px' }} />
          </Form.Item>

          <Form.Item
            name="name"
            label={t('Name')}
            rules={[{ required: true }, { min: 3, max: 30 }]}
            initialValue={initState.name}
          >
            <Input style={{ width: '100%', height: '54px' }} />
          </Form.Item>

          <Form.Item
            name="name"
            label={t('Name')}
            rules={[{ required: true }, { min: 3, max: 30 }]}
            initialValue={initState.name}
          >
            <Input style={{ width: '100%', height: '54px' }} />
          </Form.Item>

          <Form.Item {...tailLayout} style={{ width: '100%' }}>
            <NormalButton
              type="primary"
              htmlType="submit"
              loading={loading}
              size="large"
              style={{
                borderRadius: '29px',
                width: '200px',
                padding: '20px 20px',
                height: '54px',
                fontSize: '18px',
              }}
            >
              {t('Submit')}
            </NormalButton>
          </Form.Item>
        </StyledForm>
      </Content>
    </FormWrap>
  )
}

export default SubmitForm
