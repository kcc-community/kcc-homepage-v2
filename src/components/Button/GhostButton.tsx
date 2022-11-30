import { Button, ButtonProps } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  background: transparent;
  border-radius: 24px;
  height: 48px;
  padding: 0 36px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 1px solid #21c397;
  &:hover {
    border: 1px solid #21c397;
  }
  &.ant-btn-default:not(:disabled):hover {
    border: 1px solid #21c397;
  }
`

export const GhostButton: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />
}
