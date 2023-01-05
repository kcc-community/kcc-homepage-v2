import { message } from 'antd'
import BN from 'bignumber.js'
import Copy from 'copy-to-clipboard'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import NextImage from 'next/image'
import type { LockInfo } from 'pages/proof'
import { shortAddress1 } from 'utils/format'

import copyIcon from 'assets/images/Icons/copy.png'
import lockIcon from 'assets/images/Icons/lock.png'

const Image = styled(NextImage)``
const Box = styled.div``

const Wrap = styled.div`
  width: 100%;
  padding: 36px 32px;
  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  & + & {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    padding: 12px;
  }
`
const TitleWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

const TokenIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`

const SymbolText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-left: 12px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`
const Line = styled.div`
  width: 1px;
  height: 14px;
  background: #d9d9d9;
  margin: 0 10px;
`
const NameText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const ListWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
  }
`

const LockList = styled.div`
  flex: 1;
`

const WrapList = styled.div`
  flex: 1;
`

const Middle = styled.div`
  width: 90px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 70px;
  @media (max-width: 768px) {
    padding-top: 30px;
    justify-content: center;
  }
`

const ListInfoText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  margin: 13px 0 10px 0;
`

const IconWrap = styled.div`
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  & + & {
    margin-left: 12px;
  }
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`
const MiddleIconWrap = styled.div`
  border: 1px solid #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
`

const Icon = styled(Image)`
  width: 20px;
  height: 20px;
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`

const TokenWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  padding: 12px 16px;
  & + & {
    margin-top: 12px;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    justify-content: flex-start;
  }
`

const LockAmount = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const AddressRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const AddressText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

const TokenTag = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #01bc8d;
  padding: 3px 7px;
  background: rgba(1, 188, 141, 0.2);
  border-radius: 4px;
  margin-left: 8px;
`

const TokenPanel: React.FC<any> = (props) => {
  const { t } = useTranslation()

  const copyAddress = (address: string) => {
    Copy(address)
    message.success(t('Copy Success'))
  }

  return (
    <TokenWrap>
      {props?.name ? (
        <Box>
          <LockAmount>{`${new BN(new BN(props.balance).toFixed(3, 1)).toFormat({
            groupSeparator: ',',
            groupSize: 3,
            decimalSeparator: '.',
          })}  ${props.name}`}</LockAmount>
          <AddressRow>
            <AddressText>{shortAddress1(props.address)}</AddressText>
            <TokenTag>{props.network}</TokenTag>
          </AddressRow>
        </Box>
      ) : (
        <Box>
          <LockAmount>{`${new BN(new BN(props.supply).toFixed(3, 1)).toFormat({
            groupSeparator: ',',
            groupSize: 3,
            decimalSeparator: '.',
          })}  ${props.symbol}`}</LockAmount>
          <AddressRow>
            <AddressText>{shortAddress1(props.address)}</AddressText>
            <TokenTag>{props.network}</TokenTag>
          </AddressRow>
        </Box>
      )}

      <AddressRow style={{ marginTop: isMobile ? '5px' : '0px' }}>
        <IconWrap onClick={() => copyAddress(props.address)}>
          <Icon src={copyIcon} alt="copy-icon" />
        </IconWrap>
        <IconWrap onClick={() => window.open(props.explorer, '_blank')}>
          <Icon src={lockIcon} alt="link-icon" />
        </IconWrap>
      </AddressRow>
    </TokenWrap>
  )
}

const ProofPanel: React.FC<LockInfo> = (props) => {
  return (
    <Wrap>
      <TitleWrap>
        <TokenIcon src={props.icon} alt={props.name} />
        <SymbolText>{props.symbol}</SymbolText>
        <Line />
        <NameText>{props.name}</NameText>
      </TitleWrap>

      <ListWrap>
        <LockList>
          <ListInfoText>Proof of Assets</ListInfoText>
          {props.lockInfo.map((lockInfo, index) => {
            return <TokenPanel key={index} {...lockInfo} name={props.symbol} />
          })}
        </LockList>

        <Middle>
          <MiddleIconWrap>
            <Image src={lockIcon} width={20} height={20} alt="lock-icon" />
          </MiddleIconWrap>
        </Middle>

        <WrapList>
          <ListInfoText>Wrapped Token</ListInfoText>
          {props.wrapInfo.map((lockInfo, index) => {
            return <TokenPanel key={index} {...lockInfo} />
          })}
        </WrapList>
      </ListWrap>
    </Wrap>
  )
}

export default ProofPanel
