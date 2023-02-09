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
import { useResponsive } from '../../utils/responsive'
import { InfoCircleOutlined } from '@ant-design/icons'

const Wrap = styled.div`
  width: 100%;
  background: #f5f5f5;
  flex: 1;
  padding-bottom: 200px;
  @media (max-width: 768px) {
    padding-bottom: 120px;
  }
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
  @media (max-width: 768px) {
    overflow-x: scroll;
    height: 100px;
    flex-flow: row nowrap;
  }
`

const CategoryText = styled.div<{ isActive: boolean }>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    text-align: center;
  }
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
  color: ${({ isActive }) => {
    if (isActive) {
      return '#fff'
    }
    return '#040a2d'
  }};
  background: ${({ isActive }) => {
    if (isActive) {
      return '#21C397'
    }
    return '#fff'
  }};
  &:hover ${CategoryText} {
    color: ${({ isActive }) => {
      if (isActive) {
        return '#fff'
      }
      return '#21c397'
    }};
  }
  @media (max-width: 768px) {
    width: auto;
    display: flex;
    flex-shrink: 0;
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
  @media (max-width: 768px) {
    column-gap: 0px;
    min-height: auto;
    row-gap: 12px;
  }
`

const StyledSpin = styled(Spin)`
  width: 100%;
`

const AppCard = styled(Link)`
  display: block;
  width: 288px;
  height: 360px;
  padding: 24px;
  border-radius: 16px;
  cursor: pointer;
  background: #fff;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
    border-top: 4px solid #21c397;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 167px;
  }
`

const MobileBox = styled.div`
  margin-left: 20px;
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
  width: 240px;
  overflow: hidden;
  word-wrap: clip;
  white-space: break-spaces;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
    margin-top: 0px;
  }
`
const Website = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #7f8393;
  margin-top: 3px;
  white-space: nowrap;
  word-break: keep-all;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 12px;
    max-width: 200px;
  }
`

const Desc = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #494e67;
  margin-top: 24px;
  overflow: hidden;
  height: 105px;
  flex-flow: column nowrap;
  justify-content: flex-start;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    -webkit-line-clamp: 3;
    margin-top: 12px;
  }
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

const ViewMoreButton = styled.div<{ disabled: boolean }>`
  width: 141px;
  height: 44px;
  background: #fffefe;
  border-radius: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #21c397;
  pointer-events: ${({ disabled }) => {
    if (disabled) {
      return 'none'
    }
    return ''
  }};
  cursor: ${({ disabled }) => {
    if (disabled) {
      return 'not-allowed'
    }
    return 'pointer'
  }};
  opacity: ${({ disabled }) => {
    if (disabled) {
      return 0.8
    }
    return 1
  }};
`

const RiskContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #7f8393;
  margin-top: 44px;
  @media (max-width: 768px) {
    padding: 0 12px;
    align-items: flex-start;
  }
`

const Apps: React.FC<{ categoryList: AppCategoryType[] }> = ({
  categoryList,
}) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { isMobile } = useResponsive()
  const [currentPage, setCurrentPage] = React.useState<number>(1)

  const [pageSize, setPageSize] = React.useState<number>(12)
  const [appList, setAppList] = React.useState<AppType[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)
  const [totalApps, setTotalApps] = React.useState<number>(0)

  const allCategoryList = React.useMemo(() => {
    return [{ id: -1, name: 'All Categories' }, ...categoryList]
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
      category = 'All Categories'
    }
    setCurrentPage(() => 1)
    return category
  }, [router.query, categoryList, setCurrentPage])

  React.useEffect(() => {
    async function update() {
      setAppList(() => [])
      setLoading(() => true)
      try {
        const response = await DappService.dappList(
          currentPage,
          pageSize,
          currentCategory !== 'All Categories' ? currentCategory : undefined
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
      if (categoryName === 'All Categories') {
        router.push(pathname)
      } else {
        router.push(`${pathname}?category=${categoryName}`)
      }
    },
    [router]
  )

  const isMaxList = React.useMemo(() => {
    if (totalApps === appList.length) {
      return true
    }
    return false
  }, [totalApps, appList])

  const viewMore = React.useCallback(() => {
    if (!isMaxList) {
      setPageSize((size) => size * 2)
    }
  }, [isMaxList, setPageSize])

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
                    <AppCard key={index} href={app.website} target="_blank">
                      <Logo
                        src={app.logo_url}
                        width={isMobile ? 54 : 80}
                        height={isMobile ? 54 : 80}
                        alt="app-logo"
                      />
                      {isMobile ? (
                        <MobileBox>
                          <Name>{app.name}</Name>
                          <Website>{app.website}</Website>
                          <Desc>{app.description}</Desc>
                        </MobileBox>
                      ) : (
                        <>
                          <Name>
                            {app.name.length > 14
                              ? app.name.slice(0, 14) + '...'
                              : app.name}
                          </Name>
                          <Website>{app.website}</Website>
                          <Desc>{app.description}</Desc>
                        </>
                      )}
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
        {isMobile && appList.length > 0 && (
          <ViewMoreButton disabled={isMaxList} onClick={() => viewMore()}>
            {isMaxList ? 'End' : 'View more'}
          </ViewMoreButton>
        )}

        {!isMobile && appList.length > 0 && (
          <PaginationWrap>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              total={totalApps}
              perPage={pageSize}
            />
          </PaginationWrap>
        )}

        <RiskContainer>
          <InfoCircleOutlined
            style={{ fontSize: '14px', color: '#7F8393', marginRight: '8px' }}
          />
          {t('dapp_risk_statement')}
        </RiskContainer>
      </Content>
    </Wrap>
  )
}

export default Apps
