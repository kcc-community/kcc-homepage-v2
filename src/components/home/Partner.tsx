import { Input } from 'antd'
import { NormalButton } from 'components/Button'
import { Trans, useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: #f5f5f5;
  padding: 190px 0 185px 0;
`

const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  /* identical to box height */
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #040a2d;
`

const Community: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <Wrap>
      <Content>
        <Title>{'Partners'}</Title>
      </Content>
    </Wrap>
  )
}

export default Community
