import { MenuOutlined } from '@ant-design/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeMobileMenuShow } from 'state/application/actions'
import { useMobileMenuShow } from 'state/application/hooks'
import styled from 'styled-components'
import { useResponsive } from 'utils/responsive'
import AppMenu from '../AppMenu'
import ChangeLanguage from '../ChangeLanguage/index'
import { BrowserView } from '../index'
import KccLogo from '../Logo/KccLogo'
import closeIcon from 'assets/images/Icons/close.png'
import Image from 'next/image'

const AppHeaderWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 0px 50px;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 99;
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`

const Box = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  width: auto;
`

const HeaderLeftWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    padding-left: 0px;
  }
`

const AppHeaderContent = styled(HeaderLeftWrap)<{ isMobile: boolean }>`
  justify-content: space-between;
  width: 100%;
  // max-width: 1200px;
`

const AppHeader: React.FunctionComponent = () => {
  // const [mobileMenuShow, setMobileMenuShow] = React.useState(false)
  const show = useMobileMenuShow()
  const { isMobile } = useResponsive()

  const dispatch = useDispatch()

  const preventDefault = (e: Event) => {
    e.preventDefault()
  }

  // const walletButtonShow = React.useMemo(() => {
  //   return props.location.pathname.startsWith('/bridge')
  // }, [props.location.pathname])

  return (
    <AppHeaderWrap>
      <AppHeaderContent isMobile={isMobile}>
        <HeaderLeftWrap>
          <KccLogo />
        </HeaderLeftWrap>

        <Box>
          <BrowserView>
            <AppMenu
              style={{
                width: '100%',
                position: 'relative',
                top: '0px',
              }}
            />
          </BrowserView>
          <ChangeLanguage />
          {isMobile ? (
            <div
              style={{
                display: 'flex ',
                height: '24px',
                width: '24px',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              {!show ? (
                <MenuOutlined
                  style={{ fontSize: '18px', color: '#fff' }}
                  onClick={() => {
                    dispatch(changeMobileMenuShow({ show: true }))
                    document.addEventListener('touchmove', preventDefault, {
                      passive: false,
                    })
                  }}
                />
              ) : (
                <Image
                  width={24}
                  height={24}
                  src={closeIcon}
                  style={{ marginTop: '0px' }}
                  onClick={() => {
                    dispatch(changeMobileMenuShow({ show: false }))
                    document.removeEventListener('touchmove', preventDefault)
                  }}
                  alt="close"
                />
              )}

              {show ? <AppMenu style={{ width: '100%' }} /> : null}
            </div>
          ) : null}
        </Box>
      </AppHeaderContent>
    </AppHeaderWrap>
  )
}

export default AppHeader
