import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { AppCategoryType, AppType } from './types'
import Image from 'next/image'
import Link from 'next/link'
import Pagination from 'components/Pagination'
import { DappService } from '../../api/dapp'
import { Spin } from 'antd'

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
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - 350px);
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

const CategoryText = styled.div<{ isActive: boolean }>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: ${({ isActive }) => {
    if (isActive) {
      return '#fff'
    }
    return '#040a2d'
  }};
`

const Category = styled.div<{ isActive: boolean }>`
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
  background: ${({ isActive }) => {
    if (isActive) {
      return '#21C397'
    }
    return '#fff'
  }};
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
  min-height: 300px;
`

const StyledSpin = styled(Spin)`
  width: 100%;
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
  text-overflow: ellipsis;
  white-space: wrap;
  height: 105px;
  flex-flow: column nowrap;
  justify-content: flex-start;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
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

const LoadingWrap = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #494e67;
`

const Apps: React.FC<{ categoryList: AppCategoryType[] }> = ({
  categoryList,
}) => {
  const { t } = useTranslation()
  const router = useRouter()
  const [currentPage, setCurrentPage] = React.useState<number>(1)

  const [pageSize] = React.useState<number>(12)
  const [appList, setAppList] = React.useState<AppType[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)
  const [totalApps, setTotalApps] = React.useState<number>(0)

  const allCategoryList = React.useMemo(() => {
    return [{ id: -1, name: 'All apps' }, ...categoryList]
  }, [categoryList])

  const currentCategory = React.useMemo(() => {
    let category = router.query.category as string | undefined
    if (category) {
      for (let i = 0; i < categoryList.length; i++) {
        if (categoryList[i].name.toLowerCase() === category.toLowerCase()) {
          category = categoryList[i].name
          break
        }
      }
    } else {
      category = 'All apps'
    }
    return category
  }, [router.query, categoryList])

  React.useEffect(() => {
    async function update() {
      setAppList(() => [])
      setLoading(() => true)
      try {
        const response = await DappService.dappList(
          currentPage,
          pageSize,
          currentCategory !== 'All apps' ? currentCategory : undefined
        )
        setAppList(() => response.data.data.list)
        console.log('change app list', response.data.data.list)
        setTotalApps(() => response.data.data.total_count)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(() => false)
      }
    }
    update()
  }, [currentPage, pageSize, currentCategory])

  const nav2AppsCategory = React.useCallback(
    (categoryName: string) => {
      setLoading(() => true)
      const { pathname } = router
      if (categoryName === 'All apps') {
        router.push(pathname)
      } else {
        router.push(`${pathname}?category=${categoryName}`)
      }
    },
    [router]
  )

  return (
    <Wrap>
      <Content>
        <OperateBar>
          {allCategoryList.map((category) => {
            return (
              <Category
                onClick={() => nav2AppsCategory(category.name)}
                isActive={category.name === currentCategory}
                key={category.id}
              >
                <CategoryText isActive={category.name === currentCategory}>
                  {category.name}
                </CategoryText>
              </Category>
            )
          })}
        </OperateBar>

        <StyledSpin spinning={loading}>
          <AppCardList>
            {appList.length > 0 ? (
              <>
                {appList.map((app, index) => {
                  return (
                    <AppCard key={index}>
                      <Logo
                        src={app.logo_url}
                        width={80}
                        height={80}
                        alt="app-logo"
                      />
                      <Name>{app.name}</Name>
                      <Website href={app.website} target="_blank">
                        {app.website}
                      </Website>
                      <Desc>{app.description}</Desc>
                    </AppCard>
                  )
                })}
              </>
            ) : (
              <LoadingWrap>
                {!loading && <Text>{t('No data')}</Text>}
              </LoadingWrap>
            )}
          </AppCardList>
        </StyledSpin>

        <PaginationWrap>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            total={totalApps}
            perPage={pageSize}
          />
        </PaginationWrap>
      </Content>
    </Wrap>
  )
}

export default Apps
