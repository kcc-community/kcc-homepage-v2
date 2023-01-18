import React from 'react'
import styled from 'styled-components'
import { useTranslation, Trans } from 'next-i18next'
import Image from 'next/image'
import step1 from 'assets/images/home/v2/step-1.webp'
import step2 from 'assets/images/home/v2/step-2.webp'
import step3 from 'assets/images/home/v2/step-3.webp'
import { GhostButton, NormalButton } from 'components/Button'
import { RowCenterBox } from 'components'
import { ArrowLeft } from 'components/Svg/index'
import { useRouter } from 'next/router'
import { KCC } from 'constants/index'

import GetKCSModal from 'components/Home/GetKCSModal'

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: url('/images/home/logo-gray-bg.webp') 0px 420px no-repeat, #f5f5f5;
  padding: 100px 0 112px 0;
  @media (max-width: 768px) {
    padding: 0px 0 20px 0;
    background: #f5f5f5;
  }
`

const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    padding-left: 12px;
    padding-right: 12px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  /* identical to box height */
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #040a2d;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 48px;
    text-align: center;
  }
`

const Color = styled.span`
  color: #21c397;
  padding-left: 10px;
`

const SubTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #7f8393;
  margin-top: 16px;
  @media (max-width: 768px) {
    margin-top: 12px;
  }
`

const ListWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    margin-top: 36px;
  }
`
const Item = styled.div`
  width: 384px;
  padding: 48px 32px 30px 32px;
  background: #fff;
  border-radius: 16px;
  & + & {
    margin-left: 24px;
  }
  @media (max-width: 768px) {
    & + & {
      margin-left: 0px;
    }
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
  }
`

const StyledImage = styled(Image)``

const ItemTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #040a2d;
  margin-top: 24px;
`

const ItemDesc = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #494e67;
  max-width: 282px;
  margin-top: 18px;
  height: 72px;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const DiscoverWrap = styled.div`
  width: 100%;
  border-radius: 16px;
  background: #fff;
  padding: 69px 0px 60px 36px;
  height: auto;
  background: url('/images/home/dapp.webp') bottom right no-repeat, #fffefe;
  background-size: auto 100%;
  margin-top: 30px;
  @media (max-width: 768px) {
    padding: 69px 0px 30px 0px;
    margin-top: 16px;
    background: none;
    background-size: none;
    position: relative;
    z-index: 1;
    background: #fffefe;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    &::before {
      background: url('/images/home/dapp.webp') bottom right no-repeat;
      background-size: auto 325px;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      z-index: -1;
    }
  }
`

const DiscoverTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #040a2d;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const DividerLine = styled.div`
  background: #21c397;
  width: 32px;
  height: 5px;
  margin-top: 24px;
`

const DiscoverDesc = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #494e67;
  max-width: 305px;
  margin-top: 10px;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const DiscoverButtonText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
`

const stepList = [
  {
    image: step1,
    title: 'Download Wallet',
    desc: 'KCC_home_individual_wallet',
    buttonText: 'Download Wallet',
    buttonUrl: '/apps?category=wallets',
  },
  {
    image: step2,
    title: 'Get KCS',
    desc: 'KCC_home_individual_kcs',
    buttonText: 'Get KCS',
    buttonUrl: '',
  },
  {
    image: step3,
    title: 'Bridge assets',
    desc: 'KCC_home_individual_bridge',
    buttonText: 'Bridge to KCC',
    buttonUrl: KCC.BRIDGE_URL,
  },
]

const Ecosystem: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [modalShow, setModalShow] = React.useState<boolean>(false)

  const initHoverList = new Array(stepList.length).fill(false)

  const [hoverList, setHoverList] = React.useState<boolean[]>(initHoverList)

  const resetHoverList = () => {
    setHoverList(initHoverList)
  }

  const handleMouseEnter = (index: number) => {
    const newHoverList = [...initHoverList]
    newHoverList[index] = true
    setHoverList(() => newHoverList)
  }

  const handleButtonClick = React.useCallback(
    (index: number) => {
      switch (index) {
        case 0:
          router.push(stepList[0].buttonUrl)
          break
        case 1:
          setModalShow(() => true)
          break
        case 2:
          window.open(stepList[2].buttonUrl, '_blank')
        default:
          console.warn('handleButtonClick error')
      }
    },
    [router, setModalShow]
  )

  return (
    <Wrap>
      <Content>
        <Title id="join_the_kcc_ecosystem">
          <Trans
            i18nKey="Join the KCC Ecosystem"
            components={{ color: <Color /> }}
          />
        </Title>
        <SubTitle>{t('KCC_home_individual_subtitle')}</SubTitle>
        <ListWrap>
          {stepList.map((step, index) => {
            return (
              <Item key={index}>
                <StyledImage
                  src={step.image}
                  width={110}
                  height={110}
                  alt={step.title}
                />
                <ItemTitle>{t(step.title)}</ItemTitle>
                <ItemDesc>{t(step.desc)}</ItemDesc>
                <GhostButton
                  style={{ marginTop: '20px' }}
                  onClick={() => handleButtonClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => resetHoverList()}
                >
                  <RowCenterBox style={{ width: 'auto' }}>
                    {t(step.buttonText)}
                    <ArrowLeft
                      color={hoverList[index] ? '#fff' : '#00BC8D'}
                      style={{
                        marginLeft: '8px',
                      }}
                    />
                  </RowCenterBox>
                </GhostButton>
              </Item>
            )
          })}
        </ListWrap>
        <DiscoverWrap>
          <DiscoverTitle>{t('Discover dApps')}</DiscoverTitle>
          <DividerLine />
          <DiscoverDesc>{t('KCC_home_individual_dapp')}</DiscoverDesc>
          <NormalButton
            style={{ marginTop: '24px' }}
            onClick={() => {
              router.push('/apps')
            }}
          >
            <DiscoverButtonText>{t('Find the first dApp')}</DiscoverButtonText>
          </NormalButton>
        </DiscoverWrap>
      </Content>
      <GetKCSModal open={modalShow} setModalShow={setModalShow} />
    </Wrap>
  )
}

export default Ecosystem
