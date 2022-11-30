import { Modal, ModalProps } from 'antd'
import { ArrowLeft, CloseIcon } from 'components/Svg/index'
import { useTranslation } from 'next-i18next'
import React from 'react'
import styled from 'styled-components'
import { useResponsive } from '../../utils/responsive'
import Image from 'next/image'
import { Box, RowCenterBox } from 'components'

import kcsLogo from 'assets/images/home/v2/kcs-logo.webp'
import kccLogo from 'assets/images/home/v2/kcc-logo.webp'
import mjtLogo from 'assets/images/home/v2/mjt-logo.webp'
import { NormalButton } from 'components/Button'

const StyledModal = styled(Modal)`
  border-radius: 12px;
  background: #fff;
  padding: 0;
  .ant-modal-content {
    border-radius: 12px;
    padding: 0;
  }
`

const StyledContent = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
`

const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: #040a2d;
  justify-self: center;
  flex: 1;
`

const CloseWrap = styled.div`
  justify-self: flex-end;
  cursor: pointer;
`

const ListWrap = styled.div`
  margin-top: 42px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const Item = styled.div`
  background: #efeff2;
  width: 100%;
  border-radius: 12px;
  padding: 40px 36px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  & + & {
    margin-top: 24px;
  }
`

const AppWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

const StyledImage = styled(Image)`
  border-radius: 50%;
`

const AppTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #040a2d;
`

const AppDesc = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #494e67;
  max-width: 265px;
  margin-top: 8px;
`

const ButtonText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 9px;
`

const buyList = [
  {
    image: mjtLogo,
    title: 'Buy from DEX',
    desc: 'Connect your wallet to trade any token on KCC.',
    buttonText: 'MojitoSwap',
    url: 'https://app.mojitoswap.finance/swap',
  },
  {
    image: kcsLogo,
    title: 'Buy from CEX',
    desc: 'You can purchase KCS then transfer them to your wallet address.',
    buttonText: 'KuCoin',
    url: 'https://www.kucoin.com/express?spm=kcWeb.B5markets.Header2.1',
  },
  {
    image: kccLogo,
    title: 'KCC Mainnet Faucet',
    desc: 'If you only need a few KCS, you can get it from the faucet.',
    buttonText: 'KCC Faucet',
    url: 'https://faucet.kcc.io',
  },
]

const GetKCSModal: React.FC<ModalProps & { setModalShow: any }> = ({
  open,
  setModalShow,
}) => {
  const { isMobile } = useResponsive()
  const { t } = useTranslation()
  return (
    <StyledModal
      open={open}
      footer={null}
      width={isMobile ? '100%' : '800px'}
      destroyOnClose
      closable={false}
      onCancel={() => {
        setModalShow(() => false)
      }}
    >
      <StyledContent>
        <TitleBar>
          <Title>{t('How to Get KCS?')}</Title>
          <CloseWrap onClick={() => setModalShow(() => false)}>
            <CloseIcon />
          </CloseWrap>
        </TitleBar>

        <ListWrap>
          {buyList.map((app) => {
            return (
              <Item key={app.title}>
                <AppWrap>
                  <StyledImage
                    src={app.image}
                    width={80}
                    height={80}
                    alt={app.title}
                  />
                  <Box style={{ marginLeft: '28px' }}>
                    <AppTitle>{t(app.title)}</AppTitle>
                    <AppDesc>{t(app.desc)}</AppDesc>
                  </Box>
                </AppWrap>
                <NormalButton
                  style={{ width: '210px' }}
                  onClick={() => window.open(app.url, '_blank')}
                >
                  <RowCenterBox style={{ width: 'auto' }}>
                    <ButtonText>{t(app.buttonText)}</ButtonText>
                    <ArrowLeft color="#fff" />
                  </RowCenterBox>
                </NormalButton>
              </Item>
            )
          })}
        </ListWrap>
      </StyledContent>
    </StyledModal>
  )
}

export default GetKCSModal
