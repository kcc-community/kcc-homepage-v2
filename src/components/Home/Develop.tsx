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
import React from 'react'
import styled from 'styled-components'
import { Box, RowCenterBox } from 'components'
import Link from 'next/link'
import { useResponsive } from 'utils/responsive'
import { GhostWhiteButton } from 'components/Button'
import { useRouter } from 'next/router'

const advantageList = [
  {
    title: 'EVM Compatible',
    desc: 'KCC_home_developer_evm',
  },
  {
    title: 'Low Cost',
    desc: 'KCC_home_developer_cost',
  },
  {
    title: 'Fast Finality',
    desc: 'KCC_home_developer_fast',
  },
  {
    title: 'Safe and Secure',
    desc: 'KCC_home_developer_safe',
  },
]

const developList = [
  {
    icon: (isHover: boolean) => (
      <DevelopIcon1
        color={isHover ? ' #21C397' : '#fff'}
        style={{ alignSelf: 'flex-start' }}
      />
    ),
    title: 'Documentation',
    list: [
      {
        name: 'KCC_home_developer_documentation',
        url: KCC.DOCS_URL,
      },
    ],
  },
  {
    icon: (isHover: boolean) => (
      <DevelopIcon2
        color={isHover ? ' #21C397' : '#fff'}
        style={{ alignSelf: 'flex-start' }}
      />
    ),
    title: 'Tools',
    list: [
      {
        name: 'Explorer Mainnet',
        url: KCC.EXPLORER,
      },
      {
        name: 'Faucet Mainnet',
        url: KCC.MAINNET_FAUCET,
      },
      // {
      //   name: 'Explorer Testnet',
      //   url: KCC.TEST_EXPLORER,
      // },
      // {
      //   name: 'Faucet Testnet',
      //   url: KCC.FAUCET,
      // },
    ],
  },
  {
    icon: (isHover: boolean) => (
      <DevelopIcon3
        color={isHover ? ' #21C397' : '#fff'}
        style={{ alignSelf: 'flex-start' }}
      />
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
        url: `${KCC.DOCS_URL}/developers/dev-toolkit`, // gitbook Dev Toolkit
      },
    ],
  },
  {
    icon: (isHover: boolean) => (
      <DevelopIcon4
        color={isHover ? ' #21C397' : '#fff'}
        style={{ alignSelf: 'flex-start' }}
      />
    ),
    title: 'Roadmap',
    list: [
      {
        name: 'KCC_home_developer_roadmap',
        url: `${KCC.DOCS_URL}/future-developments/milestone`, // gitbook Dev Toolkit
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
  @media (max-width: 768px) {
    height: auto;
    background-size: 100% 100%;
    overflow: hidden;
  }
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
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 80px;
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
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  color: #fff;
  @media (max-width: 768px) {
    flex-flow: row wrap;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
  }
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
  @media (max-width: 768px) {
    margin-top: 12px;
    text-align: center;
  }
`

const ListWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 48px;
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: scroll;
    justify-content: flex-start;
  }
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

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    flex-shrink: 0;
    width: 282px !important;
    & + & {
      margin-left: 24px;
    }
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
  align-items: flex-start;
  width: 100%;
  margin-top: 100px;
  row-gap: 48px;
  @media (max-width: 768px) {
    margin-top: 48px;
  }
`

const AdvantageItem = styled.div`
  width: 550px;
  @media (max-width: 768px) {
    width: 100%;
  }
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
  right: 0px;
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
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    padding: 53px 32px 43px 32px;
  }
`

const GrantTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  max-width: 740px;
  color: #ffffff;
  @media (max-width: 768px) {
    white-space: break-spaces;
    font-size: 32px;
    max-width: 100%;
  }
`

const GrantDesc = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-top: 10px;
  max-width: 583px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
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
  const { isMobile } = useResponsive()
  const initHoverState = new Array(developList.length).fill(false)
  const [hoverList, setHoverList] = React.useState<boolean[]>(initHoverState)
  const history = useRouter()

  const setHoverByIndex = (index: number) => {
    const stateList = initHoverState
    setHoverList(() => initHoverState)
    stateList.splice(index, 1, true)
    setHoverList(() => stateList)
  }

  const [isWhite, setIsWhite] = React.useState<boolean>(true)

  return (
    <Wrap>
      <Content>
        {!isMobile && (
          <>
            <QuoteBg src={quoteImage} width={145} height={114} alt="quote-bg" />
            <RotateQuoteBg
              src={quoteImage}
              width={145}
              height={114}
              alt="rotate-quote-bg"
            />
          </>
        )}

        <Title id="developer_resources">
          <Trans i18nKey="Develop with KCC" components={{ color: <Color /> }} />
        </Title>
        <Desc>{t('KCC_home_developer_subtitle')}</Desc>
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
            <GrantTitle>{t('Grants_new')}</GrantTitle>
            <GrantDesc>{t('KCC_home_developer_grants')}</GrantDesc>
            <GhostWhiteButton
              style={{ border: '1px solid #fff', marginTop: '28px' }}
              onClick={() => {
                history.push('/gas-revenue')
              }}
              onMouseEnter={() => setIsWhite(() => false)}
              onMouseLeave={() => setIsWhite(() => true)}
            >
              <RowCenterBox style={{ width: 'auto' }}>
                {t('Learn More')}
                <ArrowLeft
                  style={{ marginLeft: '8px' }}
                  color={isWhite ? '#fff' : '#21C397'}
                />
              </RowCenterBox>
            </GhostWhiteButton>
          </Box>
          <Image
            src={cupImage}
            style={{ marginTop: isMobile ? '55px' : '0px' }}
            width={isMobile ? 300 : 393}
            height={isMobile ? 255 : 340}
            alt="cup-image"
          />
        </GrantWrap>
      </Content>
    </Wrap>
  )
}

export default Develop
