import React from 'react'
import styled from 'styled-components'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const AppContentWrap = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 340px);
  flex: 1;
`

// Not fullscreen mode
const AppBaseLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Wrap>
      <AppHeader />
      <AppContentWrap>{children}</AppContentWrap>
      <AppFooter />
    </Wrap>
  )
}

// App layout
const AppLayout: React.FC<{ children: any }> = ({ children }) => {
  const isFullScreen =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('FULLSCREEN_MODE') ?? false
      : false

  if (isFullScreen) return <React.Fragment>{children}</React.Fragment>
  return <AppBaseLayout>{children}</AppBaseLayout>
}

export default AppLayout
