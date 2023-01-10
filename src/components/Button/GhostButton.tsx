import { Button, ButtonProps } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(Button)<{ disabled?: boolean }>`
  background: transparent;
  opacity: ${({ disabled }) => {
    if (disabled) {
      return 0.5
    }
    return 1
  }};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  border-radius: 24px;
  height: 48px;
  padding: 0 36px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 1px solid #21c397;
  color: ${({ disabled }) => {
    if (disabled) {
      return '#fff'
    }
    return '#21c397'
  }};
  &:hover {
    border: 1px solid #21c397;
    background: #21c397;
    color: #fff;
  }
  &.ant-btn-default:not(:disabled):hover {
    border: 1px solid #21c397;
    color: #fff;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }
`

export const GhostButton: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />
}
