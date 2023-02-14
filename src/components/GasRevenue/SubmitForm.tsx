import { Form, Input, message } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { useResponsive } from 'utils/responsive'
import { NormalButton } from '../Button'
import GoogleCaptcha from 'components/Apps/GoogleCaptcha'
import { isClient } from '../../constants/index'
import { GrantsService } from '../../api/grants'
import SuccessModal from 'components/Modal/SuccessModal'

export interface GasRevenueFormDataType {
  name: string
  website: string
  profile: string
  email: string
  token: string
}

const initState: GasRevenueFormDataType = {
  name: '',
  website: '',
  profile: '',
  email: '',
  token: '',
}

const FormWrap = styled.div`
  width: 100%;
  height: auto;
  background: #f5f5f5;
  border: 1px solid transparent;
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
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const StyledForm = styled(Form)`
  width: 736px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    .ant-form-item {
      font-family: 'Poppins';
      font-size: 24px;
      font-weight: 500;
      width: 100%;
    }
  }

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
  const [refreshTag, setRefreshTag] = React.useState<number>(0)
  const { t } = useTranslation()
  const { isMobile } = useResponsive()
  const [form] = Form.useForm<GasRevenueFormDataType>() // useForm to collect form data
  const [loading, setLoading] = React.useState<boolean>(false)
  const [show, setShow] = React.useState<boolean>(false)

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
            }
            // send add new dapp request
            console.log('values', values)
            const response = await GrantsService.submitGasRevenue(values)
            console.log('response', response)
            if (response.data.code === 1) {
              message.error(response.data.msg)
            } else {
              // message.success(
              //   t(
              //     'Your information has been submitted successfully and we will contact you within 72 hours'
              //   )
              // )
              setShow(() => true)
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
    [form, onReset]
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
            label={`1.${t('Your project name')}`}
            rules={[{ required: true }, { min: 1, max: 50 }]}
            initialValue={initState.name}
          >
            <Input style={{ width: '100%', height: '54px' }} />
          </Form.Item>

          <Form.Item
            name="website"
            label={`2.${t('Website of your project')}`}
            rules={[
              { required: true },
              { min: 1, max: 100 },
              // check url start with http or https
              {
                validator: (_, value) => {
                  if (value && !value.startsWith('http')) {
                    return Promise.reject(new Error('Please enter a valid URL'))
                  }
                  return Promise.resolve()
                },
              },
            ]}
            initialValue={initState.website}
          >
            <Input style={{ width: '100%', height: '54px' }} />
          </Form.Item>

          <Form.Item
            name="profile"
            label={`3.${t('Your introduction')}`}
            rules={[{ required: true }, { min: 1, max: 100 }]}
            initialValue={initState.profile}
          >
            <Input.TextArea rows={3} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="email"
            label={`4.${t('Your contact information')}`}
            rules={[{ required: true }, { min: 1, max: 100 }]}
            initialValue={initState.email}
          >
            <Input style={{ width: '100%', height: '54px' }} />
          </Form.Item>
          <Form.Item label={t('Google Captcha')} initialValue={initState.token}>
            {isClient && (
              <GoogleCaptcha
                token={form.getFieldValue('token')}
                setToken={setToken}
                refreshTag={refreshTag}
              />
            )}
          </Form.Item>

          <Form.Item
            {...tailLayout}
            style={{ width: isMobile ? 'auto' : '100%' }}
          >
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
        <SuccessModal
          text="Your information has been submitted successfully and we will contact you within 72 hours"
          open={show}
          onOk={() => setShow(() => false)}
          onCancel={() => setShow(() => false)}
        />
      </Content>
    </FormWrap>
  )
}

export default SubmitForm
