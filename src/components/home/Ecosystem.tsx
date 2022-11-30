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

import GetKCSModal from 'components/home/GetKCSModal'

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: url('/images/home/logo-gray-bg.webp') 0px 420px no-repeat, #f5f5f5;
  padding: 100px 0 112px 0;
`

const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #040a2d;
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
`

const ListWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 60px;
`
const Item = styled.div`
  width: 384px;
  padding: 48px 32px 30px 32px;
  background: #fff;
  border-radius: 16px;
  & + & {
    margin-left: 24px;
  }
`

const StyledImage = styled(Image)`
  &:hover {
  }
`

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
`

const ButtonText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #21c397;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 9px;
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
`

const DiscoverButtonText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
`

const stepList = [
  {
    image: step1,
    title: 'Download Wallet',
    desc: 'A wallet helps you connect to KCC and manage your funds.',
    buttonText: 'Download Wallet',
    buttonUrl: '/apps?category=wallet',
  },
  {
    image: step2,
    title: 'Get KCS',
    desc: 'KuCoin Token (KCS) is the only fuel and native token for KCC and can be used to pay gas fee in dApps.',
    buttonText: 'Get KCS',
    buttonUrl: '',
  },
  {
    image: step3,
    title: 'Bridge assets',
    desc: 'Bridge your holding assets from other chain to KCC instead of buy more.',
    buttonText: 'Bridge to KCC',
    buttonUrl: KCC.BRIDGE_URL,
  },
]

const Ecosystem: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [modalShow, setModalShow] = React.useState<boolean>(false)

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
        <Title>
          <Trans
            i18nKey="Join the KCC Ecosystem"
            components={{ color: <Color /> }}
          />
        </Title>
        <SubTitle>
          Get started in 4 steps to dive into the world of KCC.
        </SubTitle>
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
                  onClick={handleButtonClick.bind(null, index)}
                >
                  <RowCenterBox>
                    <ButtonText>{t(step.buttonText)}</ButtonText>
                    <ArrowLeft />
                  </RowCenterBox>
                </GhostButton>
              </Item>
            )
          })}
        </ListWrap>
        <DiscoverWrap>
          <DiscoverTitle>{t('Discover dApps')}</DiscoverTitle>
          <DividerLine />
          <DiscoverDesc>
            {t(
              'Easily navigate relevant dApps, swiftly explore and discover profitable projects. Also, apply to add your dApp.'
            )}
          </DiscoverDesc>
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
