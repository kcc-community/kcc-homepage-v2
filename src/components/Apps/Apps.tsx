import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { AppCategoryType } from './types'
import Image from 'next/image'
import Link from 'next/link'
import testImage from 'assets/test.png'
import Pagination from 'components/Pagination'

const Wrap = styled.div`
  width: 100%;
  background: #f5f5f5;
  flex: 1;
  padding-bottom: 200px;
`

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  @media (max-width: 1200px) {
    padding: 0 24px;
  }
`

const OperateBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  padding: 30px 0;
  width: 100%;
  column-gap: 12px;
  row-gap: 12px;
`

const CategoryText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #040a2d;
`

const Category = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 112px;
  padding: 0 20px;
  border-radius: 20px;
  row-gap: 12px;
  cursor: pointer;
  background: #fff;
  &:hover ${CategoryText} {
    color: #fff;
  }
  &:hover {
    background: #21c397;
  }
`

const AppCardList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  row-gap: 24px;
  column-gap: 16px;
`

const AppCard = styled.div`
  width: 288px;
  height: 360px;
  padding: 24px;
  border-radius: 16px;
  cursor: pointer;
  background: #fff;
  &:hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
  }
`

const Logo = styled(Image)`
  border-radius: 50%;
`
const Name = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 16px;
`
const Website = styled(Link)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #7f8393;
  margin-top: 3px;
`

const Desc = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #494e67;
  margin-top: 24px;
  overflow: hidden;
`
const PaginationWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: auto;
  margin-top: 32px;
`

const Apps: React.FC = () => {
  const appCategoryList: AppCategoryType[] = [
    {
      id: 0,
      name: 'ALL apps',
    },
    {
      id: 1,
      name: 'KCC Unicorn',
    },
    {
      id: 2,
      name: 'DeFi',
    },
    {
      id: 3,
      name: 'NFT',
    },
    {
      id: 4,
      name: 'Tool',
    },
    {
      id: 5,
      name: 'Game',
    },
    {
      id: 6,
      name: 'Others',
    },
  ]

  const { t } = useTranslation()
  const router = useRouter()
  const [currentPage, setCurrentPage] = React.useState<number>(0)
  return (
    <Wrap>
      <Content>
        <OperateBar>
          {appCategoryList.map((category) => {
            return (
              <Category key={category.id}>
                <CategoryText>{category.name}</CategoryText>
              </Category>
            )
          })}
        </OperateBar>
        <AppCardList>
          {new Array(10).fill(null).map((n, index) => {
            return (
              <AppCard key={index}>
                <Logo src={testImage} width={80} height={80} alt="app-logo" />
                <Name>Mojitoswap</Name>
                <Website href="https://apps.mojitoswap.finance" target="_blank">
                  Mojitoswap.finance
                </Website>
                <Desc>
                  Built by the fans of KCS and KuCoin's fan communities,KCC is a
                  decentralized public chain with EVM compatible and high
                  performance.
                </Desc>
              </AppCard>
            )
          })}
        </AppCardList>
        <PaginationWrap>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            total={25}
            perPage={12}
          />
        </PaginationWrap>
      </Content>
    </Wrap>
  )
}

export default Apps
