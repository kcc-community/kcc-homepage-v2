import React from 'react'
import styled from 'styled-components'
import { Trans, useTranslation } from 'next-i18next'
import { NormalButton } from '../Button/NormalButton'
import { GhostButton } from '../Button/GhostButton'
import { KCC } from 'constants/index'
import { useRouter } from 'next/router'
import { ArrowLeft, DevelopIcon1 } from 'components/Svg'
import Link from 'next/link'

const developList = [
  {
    icon: '',
    title: 'Documentation',
    list: [
      {
        name: 'Access readily available resources on KCC.',
        url: KCC.DOCS_URL,
      },
    ],
  },
  {
    icon: '',
    title: 'Tools',
    list: [
      {
        name: 'Explorer Mainnet',
        url: KCC.EXPLORER,
      },
      {
        name: 'Explorer Testnet',
        url: KCC.TEST_EXPLORER,
      },
      {
        name: 'Faucet Mainnet',
        url: KCC.MAINNET_FAUCET,
      },
      {
        name: 'Faucet Testnet',
        url: KCC.FAUCET,
      },
    ],
  },
  {
    icon: '',
    title: 'Resources',
    list: [
      {
        name: 'Github',
        url: KCC.GITHUB_URL,
      },
      {
        name: 'Network Validator',
        url: 'https://news.kcc.io/announcement-of-the-kcc-validator-election/',
      },
      {
        name: 'Toolkit',
        url: '', // gitbook Dev Toolkit
      },
    ],
  },
  {
    icon: '',
    title: 'Roadmap',
    list: [
      {
        name: 'This article will introduce you to the entire KCC roadmap.',
        url: '', // gitbook Dev Toolkit
      },
    ],
  },
]

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 1456px;
  background: linear-gradient(
    to bottom,
    #000 0%,
    #000 85%,
    #f5f5f5 85%,
    #f5f5f5 100%
  );
  background-size: 100% 1456px;
  @media (min-width: 1920px) {
    background-size: 100% 886px;
  }
`
const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 117px;
  padding-bottom: 0px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
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
  color: #fff;
`

const Color = styled.span`
  color: #21c397;
  padding-left: 10px;
`

const Desc = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-top: 18px;
`

const ListWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 48px;
`
const Item = styled.div`
  border-radius: 16px;
  width: 282px;
  height: 320px;
  padding: 48px 32px 30px 32px;
  background: #181818;
  & + & {
    margin-left: 24px;
  }
`

const ItemTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-top: 16px;
`

const ItemText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 12px;
  max-width: 169px;
`

const ItemRow = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
  cursor: pointer;
  &:hover ${ItemText} {
    color: #21c397;
  }
`

const AdvantageListWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const List: React.FC<{ list: { name: string; url: string } }> = ({ list }) => {
  const { t } = useTranslation()
  const [isHover, setIsHover] = React.useState<boolean>(false)
  return (
    <ItemRow
      href={list.url}
      target="_blank"
      onMouseEnter={() => setIsHover(() => true)}
      onMouseLeave={() => setIsHover(() => false)}
    >
      <ItemText>{t(list.name)}</ItemText>
      <ArrowLeft color={isHover ? '#21C397' : '#fff'} />
    </ItemRow>
  )
}

const Develop: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const initHoverState = new Array(developList.length).fill(false)
  const [hoverList, setHoverList] = React.useState<boolean[]>(initHoverState)

  const setHoverByIndex = (index: number) => {
    const stateList = initHoverState
    setHoverList(() => initHoverState)
    stateList.splice(index, 1, true)
    setHoverList(() => stateList)
  }

  return (
    <Wrap>
      <Content>
        <Title>
          <Trans i18nKey="Develop with KCC" components={{ color: <Color /> }} />
        </Title>
        <Desc>
          {t(
            'A collection of developer resources and discussion channels for developers onboarding to KCC.'
          )}
        </Desc>
        <ListWrap>
          {developList.map((develop, index) => {
            return (
              <Item
                key={index}
                onMouseEnter={() => setHoverByIndex(index)}
                onMouseLeave={() => setHoverList(() => initHoverState)}
              >
                <DevelopIcon1 color={hoverList[index] ? ' #21C397' : '#fff'} />
                <ItemTitle>{t(develop.title)}</ItemTitle>
                {develop.list.map((list, index1) => {
                  return <List list={list} key={index1} />
                })}
              </Item>
            )
          })}
        </ListWrap>
      </Content>
    </Wrap>
  )
}

export default Develop
