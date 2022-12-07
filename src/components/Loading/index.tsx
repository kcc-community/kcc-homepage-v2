import styled from 'styled-components'
import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'

const LoadingWrap = styled.div<{ show: boolean }>`
  position: relative;
  opacity: 1;
  display: ${({ show }) => {
    if (show) {
      return 'flex'
    }
    return 'none'
  }};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Loading: React.FC<{ show: boolean }> = ({ show }) => {
  return (
    <LoadingWrap show={show}>
      <LoadingOutlined style={{ fontSize: '36px' }} />
    </LoadingWrap>
  )
}

export default Loading
