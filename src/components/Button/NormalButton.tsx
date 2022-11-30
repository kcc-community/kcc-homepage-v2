import { Button, ButtonProps } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  background: #21c397;
  border-radius: 24px;
  height: 48px;
  padding: 0 36px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
`

export const NormalButton: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />
}
