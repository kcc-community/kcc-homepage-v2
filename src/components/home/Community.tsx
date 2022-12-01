import { Input } from 'antd'
import { NormalButton } from 'components/Button'
import { KCC } from 'constants/index'
import { Trans, useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import DiscordIcon from '../Svg/Icons/DiscordIcon'
import TelegramIcon from '../Svg/Icons/TelegramIcon'
import TwitterIcon from '../Svg/Icons/TwitterIcon'

const mediaList = [
  {
    name: 'Twitter',
    icon: (isHover: boolean) => (
      <TwitterIcon
        width={48}
        height={48}
        color={isHover ? '#fff' : '#040A2D'}
      />
    ),
    url: KCC.TWITTER,
  },
  {
    name: 'Telegram',
    icon: (isHover: boolean) => (
      <TelegramIcon
        width={48}
        height={48}
        color={isHover ? '#fff' : '#040A2D'}
      />
    ),
    url: KCC.TELEGRAM,
  },
  {
    name: 'Github',
    icon: (isHover: boolean) => (
      <TwitterIcon
        width={48}
        height={48}
        color={isHover ? '#fff' : '#040A2D'}
      />
    ),
    url: KCC.GITHUB_URL,
  },
  {
    name: 'Discord',
    icon: (isHover: boolean) => (
      <DiscordIcon
        width={48}
        height={48}
        color={isHover ? '#fff' : '#040A2D'}
      />
    ),
    url: KCC.DISCORD_URL,
  },
]

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: #f5f5f5;
  padding: 190px 0 0 0;
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

const Color = styled.span`
  color: #21c397;
  padding-left: 10px;
`

const SubTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #7f8393;
  margin-top: 16px;
`

const Main = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
`
const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  row-gap: 12px;
  column-gap: 12px;
  width: 516px;
  justify-content: center;
  align-items: center;
`

const MediaText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #040a2d;
  margin-top: 12px;
`

const Media = styled(Link)`
  background: #fff;
  border-radius: 16px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 252px;
  height: 173px;
  &:hover {
    background: #1aacfb;
  }
  &:hover ${MediaText} {
    color: #ffffff;
  }
`

const SubscribeWrap = styled.div`
  background: #ffffff;
  border-radius: 16px;
  flex: 1;
  justify-self: flex-start;
  align-self: stretch;
  margin-left: 12px;
  padding: 55px 45px 0 60px;
  background: url('/images/home/logoprint-green.webp') bottom right no-repeat,
    #fff;
  background-size: 263px 178px;
`

const SubscribeTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #040a2d;
`

const SubscribeDesc = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #494e67;
  margin-top: 12px;
`

const ButtonText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
`

const StyledInput = styled(Input)`
  font-family: 'Poppins';
  margin-top: 26px;
  height: 64px;
  outline: none;
  font-size: 18px;
`

const Community: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const initHoverState = new Array(mediaList.length).fill(false)
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
          <Trans
            i18nKey="Join KCC Community"
            components={{ color: <Color /> }}
          />
        </Title>
        <SubTitle>
          Our vibrant community with developers, validators, users, HODLers and
          enthusiasts.
        </SubTitle>
        <Main>
          <MediaGrid>
            {mediaList.map((media, index) => {
              return (
                <Media
                  href={media.url}
                  target="_blank"
                  key={index}
                  onMouseEnter={() => setHoverByIndex(index)}
                  onMouseLeave={() => setHoverList(() => initHoverState)}
                >
                  {media.icon(hoverList[index])}
                  <MediaText>{t(media.name)}</MediaText>
                </Media>
              )
            })}
          </MediaGrid>
          <SubscribeWrap>
            <SubscribeTitle>
              {t('Subscribe to our Mailing List')}
            </SubscribeTitle>
            <SubscribeDesc>
              {t("We'll send you updates about KCC")}
            </SubscribeDesc>
            <StyledInput type="email" size="large" />
            <NormalButton style={{ marginTop: '22px' }}>
              <ButtonText>{t('Subscribe')}</ButtonText>
            </NormalButton>
          </SubscribeWrap>
        </Main>
      </Content>
    </Wrap>
  )
}

export default Community
