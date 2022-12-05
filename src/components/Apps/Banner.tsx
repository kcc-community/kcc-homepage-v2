import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { NormalButton } from '../Button/NormalButton'

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  background: #000;
`
const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 480px;
  padding-top: 163px;
  background: url('/images/apps/apps-bg.webp') -100px center no-repeat;
  background-size: auto 100%;
  @media (min-width: 1200px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`
const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #ffffff;
`

const Desc = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-top: 9px;
`

const ButtonGroup = styled.div`
  margin-top: 23px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

const ButtonText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
`

const Banner: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <Wrap>
      <Content>
        <Title>{t('Discover dApps')}</Title>
        <Desc>{t('An overview of the dApps in the KCC ecosystem.')}</Desc>
        <ButtonGroup>
          <NormalButton onClick={() => router.push('/apps/submit')}>
            <ButtonText>{t('Add your dApp')}</ButtonText>
          </NormalButton>
        </ButtonGroup>
      </Content>
    </Wrap>
  )
}

export default Banner
