import React from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { KCC } from '../../constants'
import { FOOTER_LIST } from '../../constants/footerList'
import Column from '../Column/index'
import { BrowserView, MobileView } from '../index'
import KccLogo from '../Logo/KccLogo'
import Row from '../Row'
import { CenterRow, RowBetween } from '../Row/index'
import MFooter from './MFooter'
import DiscordIcon from '../Svg/Icons/DiscordIcon'
import TelegramIcon from '../Svg/Icons/TelegramIcon'
import TwitterIcon from '../Svg/Icons/TwitterIcon'
import GithubMedia from '../Svg/Icons/GithubMedia'
import Link from 'next/link'

export interface AppFooterProps {}

export const mediaList = [
  {
    name: 'Twitter',
    icon: (isHover: boolean) => (
      <TwitterIcon
        width={18}
        height={18}
        color={isHover ? '#21C397' : '#fff'}
      />
    ),
    url: KCC.TWITTER,
  },
  {
    name: 'Github',
    icon: (isHover: boolean) => (
      <GithubMedia
        width={18}
        height={18}
        color={isHover ? '#21C397' : '#fff'}
      />
    ),
    url: KCC.GITHUB_URL,
  },
  {
    name: 'Discord',
    icon: (isHover: boolean) => (
      <DiscordIcon
        width={18}
        height={18}
        color={isHover ? '#21C397' : '#fff'}
      />
    ),
    url: KCC.DISCORD_URL,
  },
  {
    name: 'Telegram',
    icon: (isHover: boolean) => (
      <TelegramIcon
        width={18}
        height={18}
        color={isHover ? '#21C397' : '#fff'}
        style={{ marginLeft: '-3px' }}
      />
    ),
    url: KCC.TELEGRAM,
  },
]

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
`

const CopyRightText = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  opacity: 0.6;
  font-size: 14px;
  color: #ffffff;
  border-top: 1px solid #fff;
  @media (max-width: 768px) {
    border-top: none;
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

const AppFooter: React.FunctionComponent<AppFooterProps> = () => {
  const initHoverState = new Array(mediaList.length).fill(false)
  const [hoverList, setHoverList] = React.useState<boolean[]>(initHoverState)

  const setHoverByIndex = (index: number) => {
    const stateList = initHoverState
    setHoverList(() => initHoverState)
    stateList.splice(index, 1, true)
    setHoverList(() => stateList)
  }

  const { t, i18n } = useTranslation()

  const router = useRouter()

  const nav2Target = React.useCallback(
    ({ navText, navRoute }: { navText: string; navRoute: string }) => {
      let route = navRoute
      if (route) {
        if (route.startsWith('/')) {
          router.push(route)
        } else if (route.startsWith('http')) {
          window.open(route, '_blank')
        } else if (route.startsWith('id')) {
          const translateLanguageTable: any = {
            en: 'en-us',
            'zh-CN': 'zh-cn',
            'es-ES': 'es-es',
            'de-DE': 'de-de',
            'zh-TW': 'zh-hk',
            'pt-BR': 'pt-br',
          }
          // Open the corresponding document address according to the current language
          const anchor = t(navText)
            .trimLeft()
            .trimRight()
            .replaceAll(' ', '-')
            .toLowerCase()
          const url = `${KCC.DOCS_URL}${translateLanguageTable[i18n.language]}`
          window.open(url, '_blank')
        }
      }
    },
    [i18n.language, router, t]
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
        <BrowserView>
          <Row>
            <CenterRow
              style={{
                width: '355px',
                flexFlow: 'column nowrap',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginRight: '100px',
              }}
            >
              <KccLogo />
              <MediaListWrap>
                {mediaList.map((media, index) => {
                  return (
                    <MediaImage
                      href={media.url}
                      target="_blank"
                      onMouseEnter={() => setHoverByIndex(index)}
                      onMouseLeave={() => setHoverList(() => initHoverState)}
                      key={index}
                    >
                      {media.icon(hoverList[index])}
                    </MediaImage>
                  )
                })}
              </MediaListWrap>
            </CenterRow>
            <RowBetween>{FooterNavList}</RowBetween>
          </Row>
        </BrowserView>
        <MobileView style={{ padding: '0 24px' }}>
          <MFooter />
        </MobileView>
        <CopyRightText>
          CopyRight © 2021 - {`${new Date().getFullYear()}`} kcc.io All Rights
          Reserved.
        </CopyRightText>
      </AppFooterContentWrap>
    </AppFooterWrap>
  )
}

export default AppFooter
