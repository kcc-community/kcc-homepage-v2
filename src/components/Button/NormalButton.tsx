import { Button, ButtonProps } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(Button)<{ disabled?: boolean }>`
  background: ${({ disabled }) => {
    if (disabled) {
      return '#B4B7C1'
    }
    return ' #21c397'
  }};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  border-radius: 24px;
  height: 48px;
  padding: 0 36px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  opacity: ${({ disabled }) => {
    if (disabled) {
      return 0.5
    }
    return 1
  }};
  &:hover {
    color: #fff !important;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #21c397;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`

export const NormalButton: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />
}
