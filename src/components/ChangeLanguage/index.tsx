import { DownOutlined } from '@ant-design/icons'
import { Popover } from 'antd'
import i18nIcon from 'assets/images/Icons/i18n.webp'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { allLanguages } from '../../constants/languageCodes'
import { theme } from '../../constants/theme'
import { changeLanguage } from '../../state/application/actions'
import { AppDispatch } from '../../state/index'
import { useResponsive } from '../../utils/responsive'
import { BrowserView, MobileView } from '../index'
import { RowBetween } from '../Row'

import { isClient } from 'constants/index'
import Image from 'next/image'
import './index.less'

const MenuWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  flex: 1;
  text-align: right;

  @media (max-width: 768px) {
    padding-left: 10px;
  }
`

const LanguageItem = styled.div``

const Text = styled.div`
  height: 22px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  line-height: 24px;
  margin: 8px;
  cursor: pointer;
  &:hover {
    color: ${() => theme.colors.primary};
  }
`

export const LanguageButton = styled.div`
  cursor: pointer;
  width: 100px;
  height: 30px;
  line-height: none;
  padding: 0;
  border-radius: 20px;
  font-size: 16px;
  outline: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  color: #fff;
  @media (max-width: 768px) {
    background: none;
    border: none;
    width: 70px;
    margin-right: 10px;
  }
`

const ChangeLanguage: React.FC = () => {
  const { isMobile } = useResponsive()
  const { i18n } = useTranslation()
  const router = useRouter()

  const [show, setShow] = useState(false)

  let timer: any = null

  const dispatch = useDispatch<AppDispatch>()

  const showPop = () => {
    timer && clearTimeout(timer)
    setShow(() => true)
  }

  const hidePopover = () => {
    timer = setTimeout(() => {
      setShow(() => false)
    }, 300)
  }

  const selectChange = React.useCallback(
    (code: string) => {
      if (isClient) {
        const { pathname, asPath, query } = router
        dispatch(changeLanguage({ lng: code }))
        router.push({ pathname, query }, asPath, { locale: code })
        window.localStorage.setItem('kcc_homepage_language', code)
        setShow(() => false)
      }
    },
    [dispatch, router]
  )

  const currentLanguage = React.useMemo(() => {
    for (let i = 0; i < allLanguages.length; i++) {
      if (allLanguages[i].code === i18n.language) {
        return allLanguages[i].language
      }
    }
    return 'English'
  }, [i18n.language])

  const selectOptions = allLanguages.map((lng, index) => {
    return (
      <LanguageItem
        key={index}
        onClick={selectChange.bind(null, lng.code)}
        onMouseEnter={showPop}
        onMouseLeave={hidePopover}
      >
        <RowBetween>
          <Text>{lng.language}</Text>
        </RowBetween>
      </LanguageItem>
    )
  })
  return (
    <MenuWrap>
      <Popover
        style={{ background: '#000' }}
        placement="bottom"
        content={selectOptions}
        open={show}
      >
        <BrowserView>
          <LanguageButton
            onMouseEnter={showPop}
            onMouseLeave={hidePopover}
            onClick={() => {
              setShow(() => !show)
            }}
          >
            {currentLanguage}
            <Image
              src={i18nIcon}
              width={24}
              height={24}
              alt="language-icon"
              style={{ fontSize: '10px', marginLeft: isMobile ? '2px' : '6px' }}
            />
          </LanguageButton>
        </BrowserView>
        <MobileView>
          <LanguageButton
            onClick={() => {
              setShow(() => !show)
            }}
            style={{
              color: theme.colors.primary,
              fontSize: isMobile ? '14px' : '12px',
            }}
          >
            {currentLanguage}
            <DownOutlined
              style={{ fontSize: '10px', marginLeft: isMobile ? '2px' : '6px' }}
            />
          </LanguageButton>
        </MobileView>
      </Popover>
    </MenuWrap>
  )
}

export default React.memo(ChangeLanguage)
