import { LoadingOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import AppLayout from 'components/AppLayout'
import axios from 'axios'
import BN from 'bignumber.js'
import ProofPanel from 'components/Proof/ProofPanel'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import noRecordIcon from 'assets/images/Icons/no-record.svg'
import searchIcon from 'assets/images/Icons/search.png'
import type { NextPage } from 'next'

const Wrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background: url('/images/home/proof-bg.png') top center no-repeat, #000;
  height: 100%;
  min-height: calc(100vh - 360px);
  @media (max-width: 768px) {
    height: auto;
    min-height: auto;
  }
`
const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 144px;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    padding: 100px 24px;
  }
`

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  display: flex;
  align-items: center;
  color: #ffffff;
`

const Desc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-top: 22px;
  color: #ffffff;
  max-width: 800px;
`

const StyledInput = styled(Input)`
  height: 40px;
  width: 371px;
  margin-top: 48px;
  border-radius: 24px;
  color: #fff;
  & {
    .ant-input-prefix,
    .ant-input {
      color: #fff;
      background-color: #000 !important;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`

const ListWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 35px;
`

const NoData = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 200px;
  }
`

const NoDataIcon = styled(Image)`
  width: 84px;
  height: auto;
  opacity: 0.5;
  @media (max-width: 768px) {
    width: 44px;
  }
`

const NoDataText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #ffffff;
  opacity: 0.5;
  margin-top: 18px;
`

const mockData = {
  symbol: 'BTC',
  name: 'Bitcoin',
  icon:
    'https://cdn.jsdelivr.net/gh/kcc-community/tokens-info@main/icons/btc.png',
  lockInfo: [
    {
      network: 'BTC',
      address: 'bc1qg9ura3eja58gdgat74fmnahgsuxzy9499ca62u',
      balance: '271.39',
      contract: '',
      decimal: 0,
      explorer:
        'https://explorer.btc.com/btc/address/bc1qg9ura3eja58gdgat74fmnahgsuxzy9499ca62u',
    },
  ],
  wrapInfo: [
    {
      network: 'KRC20',
      address: '0xfA93C12Cd345c658bc4644D1D4E1B9615952258C',
      symbol: 'BTCK',
      supply: '271.4',
      explorer:
        'https://explorer.kcc.io/en/address/0xfA93C12Cd345c658bc4644D1D4E1B9615952258C',
    },
  ],
}

export type LockInfo = typeof mockData

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'], null, [
        'en',
        'zh_HK',
        'zh_CN',
        'es_ES',
        'pt_PT',
        'de_DE',
        'ru_RU',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function Proof() {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [list, setList] = React.useState<LockInfo[]>([])
  const [input, setInput] = React.useState<string>('')

  React.useEffect(() => {
    async function getLockList() {
      setLoading(() => true)
      try {
        const response = await axios.get(
          'https://bridge-mainnet.kcc.network/v1/bridge/server/lock-info'
        )
        const { status, data } = response
        if (status === 200) {
          const l: LockInfo[] = data.data.tokens
          setList(() => l.filter((n) => new BN(n.lockInfo[0].balance).gt(0)))
        } else {
          setList(() => [])
        }
      } finally {
        setLoading(() => false)
      }
    }
    getLockList()
  }, [])

  const filterList = React.useMemo(() => {
    return list.filter(
      (n) =>
        n.name.toLowerCase().includes(input.trim().toLowerCase()) ||
        n.symbol.toLowerCase().includes(input.trim().toLowerCase())
    )
  }, [list, input])

  return (
    <Wrap>
      <Content>
        <Title>Available Assets and Blockchains</Title>
        <Desc>
          You can verify the transfer records and locked assets in the list
          below
          <br /> Assets can be transferred between the KCC chain and other
          public chains, and the total amount remains unchanged;
        </Desc>
        <StyledInput
          onChange={(e) => setInput(() => e.target.value)}
          prefix={<Icon src={searchIcon} alt="search-icon" />}
          placeholder="Search Coin"
          maxLength={36}
          min={0}
          style={{ backgroundColor: '#000' }}
        />
        {filterList.length === 0 && loading && (
          <NoData>
            <LoadingOutlined style={{ fontSize: '30px', color: '#fff' }} />
          </NoData>
        )}
        {filterList.length === 0 && !loading && (
          <NoData>
            <NoDataIcon src={noRecordIcon} alt="no-record" />
            <NoDataText>No record</NoDataText>
          </NoData>
        )}
        {filterList.length && (
          <ListWrap>
            {filterList.map((lockToken, n) => {
              return <ProofPanel {...lockToken} key={n} />
            })}
          </ListWrap>
        )}
      </Content>
    </Wrap>
  )
}

Proof.getLayout = function getLayout(page: NextPage) {
  return <AppLayout>{page}</AppLayout>
}
