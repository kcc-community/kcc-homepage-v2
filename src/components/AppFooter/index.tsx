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

export interface AppFooterProps {}

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

const ChainText = styled.div`
  font-size: 20px;
  color: #0fcd8c;
  line-height: 32px;
  margin-top: 12px;
  width: 245px;
`
const FooterTitle = styled.span`
  font-size: 20px;
  color: #ffffff;
  line-height: 32px;
`

const FooterNavListWrap = styled(Column)`
  margin-top: 16px;
`

const FooterNavText = styled.span`
  font-size: 14px;
  color: #ffffff;
  line-height: 32px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
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

const AppFooter: React.FunctionComponent<AppFooterProps> = () => {
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
          console.log('i18n.language', i18n.language)
          const url = `${KCC.DOCS_URL}${translateLanguageTable[i18n.language]}`
          console.log('url', url)
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
      <Column key={index} style={{width:'140px'}}>
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
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <KccLogo />
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
