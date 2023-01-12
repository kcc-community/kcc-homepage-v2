import { message } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { isClient } from 'constants/index'

const Wrap = styled.div``

let rendered = false

const GoogleCaptcha: React.FC<{
  setToken: any
  token: string
  refreshTag: number
}> = ({ setToken, token, refreshTag }) => {
  const { t } = useTranslation()
  const [captchaId, setCaptchaId] = React.useState<number>(-1)

  const renderGoogleCaptcha = React.useCallback(() => {
    if (isClient) {
      const char = window.document.getElementById('captcha')
      console.log('captchaId', captchaId)
      if (!token && char && window?.grecaptcha && !rendered) {
        const cid = window?.grecaptcha?.render('captcha', {
          sitekey: '6LeOBWgjAAAAABbXn2QM7GtdTu7ugAQwOJRPCuzG',
        })
        rendered = true
        setCaptchaId(() => cid)
      }
    }
  }, [captchaId, token])

  const resetCaptcha = React.useCallback(() => {
    if (typeof window !== 'undefined') {
      const char = window.document.getElementById('captcha')
      char && window?.grecaptcha.reset(captchaId)
    }
  }, [captchaId])

  const getGoogleCaptcha = React.useCallback(async () => {
    const code = window?.grecaptcha?.getResponse(captchaId)
    if (!code) {
      message.error(t('Invalid captcha'))
      resetCaptcha()
    } else {
      console.log('code', code)
      setToken(code)
    }
  }, [captchaId, resetCaptcha, setToken, t])

  React.useEffect(() => {
    if (refreshTag > 0) {
      getGoogleCaptcha()
    }
  }, [getGoogleCaptcha, refreshTag])

  React.useEffect(() => {
    if (isClient) {
      renderGoogleCaptcha()
    }
  }, [renderGoogleCaptcha])

  return (
    <Wrap>
      <div id="captcha" />
    </Wrap>
  )
}

export default GoogleCaptcha
