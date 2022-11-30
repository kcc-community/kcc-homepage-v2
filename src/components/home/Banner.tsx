import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { NormalButton } from '../Button/NormalButton'
import { GhostButton } from '../Button/GhostButton'
import { KCC } from 'constants/index'
import { useRouter } from 'next/router'
import NewsList from './NewsList'

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  background: url('/images/home/banner-bg.png') top center no-repeat, #f5f5f5;
  background-size: auto 886px;
  @media (min-width: 1920px) {
    background-size: 100% 886px;
  }
`
const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 200px;
  padding-bottom: 70px;
  @media (min-width: 1200px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`
const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 72px;
  display: flex;
  align-items: center;
  color: #ffffff;
  max-width: 677px;
`

const ButtonGroup = styled.div`
  margin-top: 45px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 240px;
`

const ButtonText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
`

const ButtonText1 = styled(ButtonText)`
  color: #21c397;
`

const Banner: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <Wrap>
      <Content>
        <Title>{t('To Accelerate the Flow of Value Around the World.')}</Title>
        <ButtonGroup>
          <NormalButton onClick={() => window.open(KCC.DOCS_URL, '_blank')}>
            <ButtonText>{t('Developer Docs')}</ButtonText>
          </NormalButton>
          <GhostButton
            style={{ marginLeft: '20px' }}
            onClick={() => router.push('/apps')}
          >
            <ButtonText1>{t('Explore dApps')}</ButtonText1>
          </GhostButton>
        </ButtonGroup>
        <NewsList />
      </Content>
    </Wrap>
  )
}

export default Banner
