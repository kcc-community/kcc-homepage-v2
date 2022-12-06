import cupImage from 'assets/images/home/v2/cup.webp'
import quoteImage from 'assets/images/home/v2/quote.webp'
import {
  ArrowLeft,
  DevelopIcon1,
  DevelopIcon2,
  DevelopIcon3,
  DevelopIcon4,
} from 'components/Svg'
import { KCC } from 'constants/index'
import { Trans, useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { NormalButton } from '../Button/NormalButton'

import { Box, RowCenterBox } from 'components'
import Link from 'next/link'

const advantageList = [
  {
    title: 'Decentralized',
    desc: "Built by the fans of KCS and KuCoin's fan communities,KCC is a decentralized public chain.",
  },
  {
    title: 'EVM Compatible',
    desc: 'Fully compatible with EVM and ERC-20 smart contracts, extremely low costs in migration.',
  },
  {
    title: 'Sustainability',
    desc: 'The blocks are produced every 3 seconds, accelerated transaction confirmation and higher chain performance.',
  },
  {
    title: 'PoSA',
    desc: 'Adopt the consensus algorithm of Proof of Staked Authority (PoSA), more efficient, secure and robust.',
  },
]

const developList = [
  {
    icon: (isHover: boolean) => (
      <DevelopIcon1 color={isHover ? ' #21C397' : '#fff'} />
    ),
    title: 'Documentation',
    list: [
      {
        name: 'Access readily available resources on KCC.',
        url: KCC.DOCS_URL,
      },
    ],
  },
  {
    icon: (isHover: boolean) => (
      <DevelopIcon2 color={isHover ? ' #21C397' : '#fff'} />
    ),
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
    icon: (isHover: boolean) => (
      <DevelopIcon3 color={isHover ? ' #21C397' : '#fff'} />
    ),
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
    icon: (isHover: boolean) => (
      <DevelopIcon4 color={isHover ? ' #21C397' : '#fff'} />
    ),
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
`
const Content = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding-top: 117px;
  padding-bottom: 0px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1200px) {
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
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  row-gap: 48px;
`

const AdvantageItem = styled.div`
  width: 550px;
`

const AdvantageTitle = styled.div`
  position: relative;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    z-index: -1;
    background: linear-gradient(
      89.94deg,
      #21c397 -3.64%,
      rgba(33, 195, 151, 0) 110.47%
    );
    width: 109px;
    height: 14px;
  }
`

const AdvantageDesc = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */
  color: #ffffff;
  margin-top: 18px;
`

const QuoteBg = styled(Image)`
  position: absolute;
  z-index: 0;
  top: 120px;
  left: -40px;
`

const RotateQuoteBg = styled(Image)`
  position: absolute;
  top: 860px;
  right: -60px;
  transform: rotate(180deg);
`

const GrantWrap = styled.div`
  margin-top: 92px;
  padding: 53px 65px 43px 65px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: #21c397;
  border-radius: 16px;
`

const GrantTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  display: flex;
  align-items: center;
  color: #ffffff;
`

const GrantDesc = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-top: 10px;
  max-width: 583px;
`

const ButtonText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 9px;
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
        <QuoteBg src={quoteImage} width={145} height={114} alt="quote-bg" />
        <RotateQuoteBg
          src={quoteImage}
          width={145}
          height={114}
          alt="rotate-quote-bg"
        />
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
                {develop.icon(hoverList[index])}
                <ItemTitle>{t(develop.title)}</ItemTitle>
                {develop.list.map((list, index1) => {
                  return <List list={list} key={index1} />
                })}
              </Item>
            )
          })}
        </ListWrap>
        <AdvantageListWrap>
          {advantageList.map((advantage, index) => {
            return (
              <AdvantageItem key={index}>
                <AdvantageTitle>{t(advantage.title)}</AdvantageTitle>
                <AdvantageDesc>{t(advantage.desc)}</AdvantageDesc>
              </AdvantageItem>
            )
          })}
        </AdvantageListWrap>
        <GrantWrap>
          <Box>
            <GrantTitle>{t('Grant Program')}</GrantTitle>
            <GrantDesc>
              {t(
                'Sponsored by KCS Foundation, the program supports the research of protocols in the blockchain technology stack. The program also supports the development of bottom layers, tools and applications based on the KCC chain, all of which are operated in a decentralized manner to improve the KCC ecology and to offer a more convenient, faster and lower-cost blockchain experience for community users.'
              )}
            </GrantDesc>
            <NormalButton
              style={{ border: '1px solid #fff', marginTop: '28px' }}
              onClick={() => {
                window.open(KCC.GRANTS, '_blank')
              }}
            >
              <RowCenterBox style={{ width: 'auto' }}>
                <ButtonText>{t('Learn More')}</ButtonText>
                <ArrowLeft color="#fff" />
              </RowCenterBox>
            </NormalButton>
          </Box>
          <Image src={cupImage} width={393} height={340} alt="cup-image" />
        </GrantWrap>
      </Content>
    </Wrap>
  )
}

export default Develop
