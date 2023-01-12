import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { useResponsive } from 'utils/responsive'
import { KCC } from '../../constants'
import { FOOTER_LIST } from '../../constants/footerList'
import Column from '../Column/index'
import KccLogo from '../Logo/KccLogo'
import Row from '../Row'
import { CenterRow, RowBetween } from '../Row/index'
import DiscordIcon from '../Svg/Icons/DiscordIcon'
import GithubMedia from '../Svg/Icons/GithubMedia'
import TelegramIcon from '../Svg/Icons/TelegramIcon'
import TwitterIcon from '../Svg/Icons/TwitterIcon'

const StyledRowBetween = styled(RowBetween)`
  @media (max-width: 768px) {
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-top: 46px;
    padding-left: 32px;
    row-gap: 64px;
  }
`

const AppFooterWrap = styled.div`
  position: relative;
  z-index: 99;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  background: #000;
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    text-align: center;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    height: auto;
  }
`
const AppFooterContentWrap = styled.div`
  width: 1200px;
  padding-top: 43px;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 0px;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    width: 100%;
    padding: 24px 24px 0px 24px;
  }
`

const CopyRightContent = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const FooterTitle = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #21c397;
`

const FooterNavListWrap = styled(Column)`
  margin-top: 16px;
`

const FooterNavText = styled.span`
  cursor: pointer;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  color: #ffffff;
  &:hover {
    color: #21c397;
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`

const CopyRightText = styled.div`
  margin-top: 40px;
  width: 100%;
  line-height: 60px;
  opacity: 0.6;
  font-size: 12px;
  color: #ffffff;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  @media (max-width: 768px) {
    text-align: center;
    height: auto;
    font-size: 12px;
    margin-top: 24px;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    width: 100%;
    height: auto;
    margin-top: 24px;
  }
`

const MediaListWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 32px;
  @media (max-width: 768px) {
    padding: 0 24px;
    width: 100%;
    justify-content: space-between;
  }
`

const MediaImage = styled(Link)`
  width: 42px;
  height: 42px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & + & {
    margin-left: 24px;
  }
  &:hover {
    background: rgba(33, 195, 151, 0.2);
  }
`

const AppFooter: React.FC = () => {
  const { isMobile } = useResponsive()

  const initHoverState = new Array(4).fill(false)
  const [hoverList, setHoverList] = React.useState<boolean[]>(initHoverState)
  const [count, setCount] = React.useState<number>(0)
  const mediaList = React.useMemo(() => {
    return [
      {
        name: 'Twitter',
        icon: (
          <TwitterIcon
            width={22}
            height={22}
            color={hoverList[0] ? '#21C397' : '#fff'}
          />
        ),
        url: KCC.TWITTER,
      },
      {
        name: 'Github',
        icon: (
          <GithubMedia
            width={22}
            height={22}
            color={hoverList[1] ? '#21C397' : '#fff'}
          />
        ),
        url: KCC.GITHUB_URL,
      },
      {
        name: 'Discord',
        icon: (
          <DiscordIcon
            width={22}
            height={22}
            color={hoverList[2] ? '#21C397' : '#fff'}
          />
        ),
        url: KCC.DISCORD_URL,
      },
      {
        name: 'Telegram',
        icon: (
          <TelegramIcon
            width={22}
            height={22}
            color={hoverList[3] ? '#21C397' : '#fff'}
            style={{ marginLeft: '-3px' }}
          />
        ),
        url: KCC.TELEGRAM,
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoverList, count])

  const setHoverByIndex = (index: number) => {
    const stateList = initHoverState
    setHoverList(() => initHoverState)
    stateList.splice(index, 1, true)
    setHoverList(() => stateList)
  }

  const { t } = useTranslation()

  const router = useRouter()

  const nav2Target = React.useCallback(
    ({ navRoute }: { navText: string; navRoute: string }) => {
      const route = navRoute
      if (route) {
        if (route.startsWith('/')) {
          router.push(route)
        } else {
          window.open(route, '_blank')
        }
      }
    },
    [router]
  )

  const FooterNavList = FOOTER_LIST.map((item, index) => {
    const children = item.children.map((nav, index) => {
      return (
        <FooterNavText key={index} onClick={nav2Target.bind(null, nav)}>
          {t(nav.navText)}
        </FooterNavText>
      )
    })
    return (
      <Column key={index} style={{ width: '140px' }}>
        <FooterTitle>{t(item.title)}</FooterTitle>
        <FooterNavListWrap>{children}</FooterNavListWrap>
      </Column>
    )
  })

  return (
    <AppFooterWrap>
      <AppFooterContentWrap>
        <Row style={{ flexFlow: isMobile ? 'column nowrap' : 'row nowrap' }}>
          <CenterRow
            style={{
              width: isMobile ? '100%' : '355px',
              flexFlow: 'column nowrap',
              justifyContent: isMobile ? 'center' : 'flex-start',
              alignItems: isMobile ? 'center' : 'flex-start',
              marginRight: isMobile ? '0px' : '100px',
              marginTop: isMobile ? '52px' : '0px',
            }}
          >
            <KccLogo width={isMobile ? 133 : 94} height={isMobile ? 47 : 33} />
            <MediaListWrap>
              {mediaList.map((media, index) => {
                return (
                  <MediaImage
                    href={media.url}
                    target="_blank"
                    onMouseEnter={() => {
                      setHoverByIndex(index)
                      setCount(() => count + 1)
                    }}
                    onMouseLeave={() => {
                      setHoverList(() => initHoverState)
                      setCount(() => count + 1)
                    }}
                    key={index}
                  >
                    {media.icon}
                  </MediaImage>
                )
              })}
            </MediaListWrap>
          </CenterRow>
          <StyledRowBetween>{FooterNavList}</StyledRowBetween>
        </Row>
      </AppFooterContentWrap>
      <CopyRightText>
        <CopyRightContent>
          CopyRight © 2021 - {`${new Date().getFullYear()}`} kcc.io All Rights
          Reserved.
        </CopyRightContent>
      </CopyRightText>
    </AppFooterWrap>
  )
}

export default AppFooter
