import { useTranslation } from 'next-i18next'
import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  background: url('/images/gas-revenue/banner.jpg') bottom center no-repeat,
    #000;
  @media (max-width: 768px) {
    background: url('/images/gas-revenue/gasmobile.jpg') bottom center no-repeat,
      #000;
  }
`
const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 480px;
  padding-top: 163px;

  background-size: auto 100%;
  @media (max-width: 1200px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (max-width: 768px) {
    background-size: 100% auto;
    width: 100%;
    height: 600px;
    padding-top: 120px;
  }
`
const Title = styled.div`
  font-family: 'Poppins', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  display: flex;
  align-items: center;
  color: #ffffff;
  max-width: 560px;
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 60px;
  }
`

const Desc = styled.div`
  max-width: 473px;
  font-family: 'Poppins', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-top: 9px;
`

const Banner: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Wrap>
      <Content>
        <Title>{t('Gas Revenue & Grants Project')}</Title>
        <Desc>
          {t(
            "The Gas Revenue & Grants project is KCC's module for developers to receive a portion of the fees accumulated by their contracts. Click here to learn more about the rules for participating in Gas Back and Grants."
          )}
        </Desc>
      </Content>
    </Wrap>
  )
}

export default Banner
