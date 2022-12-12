import styled from 'styled-components'
import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'

const LoadingWrap = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #21c397;
  z-index: 999;
  opacity: 1;
  display: ${({ show }) => {
    if (show) {
      return 'flex'
    }
    return 'none'
  }};
  justify-content: center;
  align-items: center;
`

const Loading: React.FC<{ show: boolean }> = ({ show }) => {
  return (
    <LoadingWrap show={show}>
      <LoadingOutlined style={{ fontSize: '36px', color: '#fff' }} />
    </LoadingWrap>
  )
}

export default Loading
