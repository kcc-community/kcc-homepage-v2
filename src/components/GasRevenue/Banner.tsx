import { Trans, useTranslation } from 'next-i18next'
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
    background-size: 100% auto;
    overflow: hidden;
  }
`
const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 480px;
  padding-top: 163px;
  @media (max-width: 1200px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 700px;
    padding-top: 120px;
    overflow: hidden;
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
  max-width: 580px;
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
  color: #ffffff;
  margin-top: 9px;
`

const Link = styled.a`
  color: #1ebb8c;
  cursor: pointer;
`

const Banner: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Wrap>
      <Content>
        <Title>{t('KCC_grants_banner_title')}</Title>
        <Desc>
          <Trans
            i18nKey="KCC_grants_banner_subtitle"
            components={{
              color: (
                <Link
                  href="https://kccofficial.medium.com/17f60f8b418a"
                  target="_blank"
                />
              ),
            }}
          />

          {/* <Trans
            i18nKey="Join the KCC Ecosystem"
            components={{ color: <Color /> }}
          /> */}
        </Desc>
      </Content>
    </Wrap>
  )
}

export default Banner
