import { DownOutlined } from '@ant-design/icons'
import { MENU_LIST, NavItemChildrenType, NavItemType } from 'constants/menuList'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { CSSProperties } from 'react'
import styled from 'styled-components'

import { Menu } from 'antd'

import Column from '../Column'
import Row from '../Row/index'

import { useDispatch } from 'react-redux'
import { isClient, KCC } from '../../constants/index'
import { theme } from '../../constants/theme'
import { changeMobileMenuShow } from '../../state/application/actions'
import { useResponsive } from '../../utils/responsive'
import { BrowserView, MobileView } from '../index'

import './index.less'
import { useMobileMenuShow } from '../../state/application/hooks'

export interface AppMenuProps {
  style?: CSSProperties
}

const MenuWrap = styled.div`
  margin-left: 40px;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    margin-left: 0px;
    justify-self: flex-end;
    position: fixed;
    top: 70px;
    left: 0px;
    width: 100%;
    margin-left: 0;
    background: #fff;
    min-height: calc(100vh + 70px);
  }
`

const { SubMenu } = Menu

const StyledMenu = styled(Menu)`
  border-radius: 24px !important;
  background: transparent !important;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`

const StyledSubMenu = styled(SubMenu)`
  &.ant-menu-submenu-open::after,
  &.ant-menu-submenu-open::before,
  &.ant-menu-submenu-open {
    border-bottom: none !important;
    transition: none !important;
    border-width: 0px !important;
    border-bottom-color: none !important;
  }

  &.ant-menu-submenu-active::before,
  &.ant-menu-submenu-active::after,
  &.ant-menu-submenu-active {
    border-bottom: none !important;
    transition: none !important;
  }
`

const RootTitle = styled.span`
  font-size: 16px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  &:hover {
    color: ${() => theme.colors.primary};
  }
  @media (max-width: 768px) {
    color: #040a2d;
  }
`

const NavTitle = styled.div`
  font-size: 16px;
  color: #040a2d;
  letter-spacing: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  width: auto;
  word-wrap: wrap;
  max-width: 245px;
  height: auto;
  white-space: wrap !important;
  &:hover {
    color: ${() => theme.colors.primary};
  }
`

const NavSubTitle = styled.div`
  opacity: 0.6;
  font-size: 12px;
  color: #040a2d;
  letter-spacing: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  width: auto;
  max-width: 245px;
  word-wrap: wrap;
  white-space: wrap !important;
  text-align: left;
`

const Desc = styled.div`
  color: #7f8393;
  font-size: 14px;
`

const NavItemWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 320px;
  height: auto;
  padding: 16px 0px;
  border-radius: 0px !important;
  &:hover ${NavSubTitle} {
    color: ${() => theme.colors.primary};
  }
  &:hover ${NavTitle} {
    color: ${() => theme.colors.primary};
  }
`

const NavIcon = styled.div`
  width: 32px;
  height: auto;
`

const TitleWrap = styled(Column)`
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 8px;
`

const NavItem: React.FunctionComponent<NavItemChildrenType> = (props) => {
  const [isHover, setIsHover] = React.useState<boolean>(false)

  const { t, i18n } = useTranslation()
  const { isMobile } = useResponsive()

  const getNavRoute = React.useCallback(
    (route: string) => {
      if (route === KCC.EXPLORER) {
        if (i18n.language === 'zh-CN') {
          return `${route}/cn`
        }
        return `${route}/en`
      }
      return route
    },
    [i18n]
  )

  const dispatch = useDispatch()

  const router = useRouter()

  const nav2Target = React.useCallback(
    (route: string | undefined) => {
      if (route) {
        if (route.startsWith('/')) {
          router.push(route)
        }
        if (route.startsWith('http')) {
          const route1 = getNavRoute(route)
          window.open(route1, '_blank')
        }
        if (isMobile) {
          dispatch(changeMobileMenuShow({ show: false }))
        }
      }
    },
    [dispatch, getNavRoute, isMobile, router]
  )

  return (
    <NavItemWrap
      key={props.title}
      onClick={nav2Target.bind(null, props.route)}
      onMouseEnter={() => setIsHover(() => true)}
      onMouseLeave={() => setIsHover(() => false)}
    >
      <NavIcon>{props.icon(isHover)}</NavIcon>
      <TitleWrap>
        <NavTitle>{t(`${props.title}`)}</NavTitle>
        <NavSubTitle style={{ whiteSpace: 'normal' }}>
          <Desc> {t(`${props.subTitle}`)}</Desc>
        </NavSubTitle>
      </TitleWrap>
    </NavItemWrap>
  )
}

const AppMenu: React.FunctionComponent<AppMenuProps> = ({ style }) => {
  const { t, i18n } = useTranslation()

  const { isMobile } = useResponsive()

  const dispatch = useDispatch()

  const mobileMenuShow = useMobileMenuShow()

  const [openKeys, setOpenKeys] = React.useState<string[]>([])

  React.useEffect(() => {
    if (isClient) {
      const body = window.document.getElementsByTagName('body')[0]
      if (mobileMenuShow) {
        body.style.overflowY = 'hidden'
      } else {
        body.style.overflowY = 'auto'
      }
    }
    return () => {
      if (isClient) {
        const body = window.document.getElementsByTagName('body')[0]
        body.style.overflowY = 'auto'
      }
    }
  }, [mobileMenuShow])

  const showSubMenu = (navItem: any) => {
    if (openKeys.length && openKeys[0] === navItem.name) {
      setOpenKeys(() => [])
    } else {
      setOpenKeys(() => [navItem.name])
    }
  }

  const getNavRoute = (route: string) => {
    if (route === KCC.EXPLORER) {
      if (i18n.language === 'zh-CN') {
        return `${route}/cn`
      }
      return `${route}/en`
    }
    return route
  }

  const genNavList = (navItem: NavItemType) => {
    // no children
    if (!navItem.hasChildren && navItem?.route) {
      if (
        navItem.route.startsWith('http') &&
        typeof navItem.name === 'string'
      ) {
        return (
          <Menu.Item key={navItem.name}>
            <a
              onClick={() => {
                dispatch(changeMobileMenuShow({ show: false }))
              }}
              href={navItem.route}
              style={{ color: theme.colors.primary }}
              target="_blank"
              rel="noreferrer"
            >
              <RootTitle style={{ position: 'relative' }}>
                {t(`${navItem.name}`)}
              </RootTitle>
            </a>
          </Menu.Item>
        )
      }

      return (
        <Menu.Item key={navItem.name}>
          {typeof navItem.name === 'string' ? (
            <Link
              href={getNavRoute(navItem.route)}
              onClick={() => {
                dispatch(changeMobileMenuShow({ show: false }))
              }}
              style={{ color: theme.colors.primary }}
            >
              <NavTitle style={{ position: 'relative', top: '-2px' }}>
                {t(`${navItem.name}`)}
              </NavTitle>
            </Link>
          ) : (
            navItem.name
          )}
        </Menu.Item>
      )
    }

    // has children & not group menu
    if (navItem?.hasChildren && !navItem?.hasGroup) {
      const subMenuList = navItem.childrens as NavItemChildrenType[]

      const lists = subMenuList?.map((item) => {
        return (
          <Menu.Item
            key={item.title}
            style={{
              height: 'auto',
              lineHeight: '25px',
              color: theme.colors.primary,
            }}
          >
            <NavItem {...item} setOpenKeys={setOpenKeys} />
          </Menu.Item>
        )
      })

      return (
        <StyledSubMenu
          key={navItem.name}
          className="sub-menu"
          title={
            <Row
              style={{ alignItems: 'center' }}
              onClick={showSubMenu.bind(null, navItem)}
            >
              <RootTitle>
                {t(`${navItem.name}`)}{' '}
                {!isMobile && (
                  <DownOutlined
                    className="arrow-icon"
                    style={{ fontSize: '10px' }}
                  />
                )}
              </RootTitle>
            </Row>
          }
        >
          <div style={{ padding: '20px 0 20px 0' }}>{lists}</div>
        </StyledSubMenu>
      )
    }

    // // gourp menu &  has children
    // if (navItem?.hasGroup) {
    //   const groupList = navItem.childrens as NavItemGroupType[]
    //   const groupDom = groupList?.map((group, index) => {
    //     const groupMember = group.groupMember

    //     const groupItemDom = groupMember.map((groupChild) => {
    //       console.log('groupChild.title', groupChild.title)
    //       return (
    //         <Menu.Item
    //           key={groupChild.title}
    //           style={{ height: 'auto', lineHeight: '25px' }}
    //         >
    //           <NavItem {...groupChild} setOpenKeys={setOpenKeys} />
    //         </Menu.Item>
    //       )
    //     })

    //     return (
    //       <Menu.ItemGroup
    //         key={index}
    //         title={<NavTitle>{t(`${group.groupName}`)}</NavTitle>}
    //       >
    //         {groupItemDom}
    //         {groupList.length - 1 !== index ? (
    //           <RowBetween>
    //             {/*    <DivideLine style={{ background: ' #F1F4F7', margin: '12px' }} /> */}
    //           </RowBetween>
    //         ) : null}
    //       </Menu.ItemGroup>
    //     )
    //   })
    //   return (
    //     <SubMenu
    //       key={navItem.name}
    //       className="sub-menu"
    //       title={
    //         <Row
    //           style={{ alignItems: 'center' }}
    //           onClick={showSubMenu.bind(null, navItem)}
    //         >
    //           <NavTitle>
    //             {t(`${navItem.name}`)}{' '}
    //             <DownOutlined
    //               className="arrow-icon"
    //               style={{ fontSize: '10px', paddingTop: '-10px' }}
    //             />
    //           </NavTitle>
    //         </Row>
    //       }
    //     >
    //       {groupDom}
    //     </SubMenu>
    //   )
    // }

    return null
  }

  const MenuListDom = MENU_LIST.map((item) => {
    return genNavList(item)
  })

  const M_MENU_CSS: CSSProperties = isMobile
    ? {
        color: `${theme.colors.primary} !important`,
        zIndex: 999,
        background: '#fff',
      }
    : {}

  React.useEffect(() => {
    if (isMobile) {
      setOpenKeys(() => ['Developers'])
    } else {
      setOpenKeys(() => [])
    }
  }, [isMobile])

  return (
    <MenuWrap>
      <MobileView>
        <Menu
          openKeys={openKeys}
          selectedKeys={[]}
          mode={isMobile ? 'inline' : 'horizontal'}
          style={{
            background: 'transparent',
            color: theme.colors.primary,
            ...style,
            ...M_MENU_CSS,
          }}
        >
          {MenuListDom}
        </Menu>
      </MobileView>
      <BrowserView>
        <StyledMenu
          selectedKeys={[]}
          mode="horizontal"
          style={{
            ...style,
            background: 'transparent',
            width: '600px',
            border: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {MenuListDom}
        </StyledMenu>
      </BrowserView>
    </MenuWrap>
  )
}

export default AppMenu
