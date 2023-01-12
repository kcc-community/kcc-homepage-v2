import { Input } from 'antd'
import { NormalButton } from 'components/Button'
import { KCC } from 'constants/index'
import { Trans, useTranslation } from 'next-i18next'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import DiscordIcon from '../Svg/Icons/DiscordIcon'
import TelegramIcon from '../Svg/Icons/TelegramIcon'
import TwitterIcon from '../Svg/Icons/TwitterIcon'
import GithubMedia from '../Svg/Icons/GithubMedia'

import { message } from 'antd'
import axios, { AxiosResponse } from 'axios'

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: #f5f5f5;
  padding: 190px 0 0 0;
  @media (max-width: 768px) {
    padding: 80px 0 0 0;
  }
`

const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    padding-left: 12px;
    padding-right: 12px;
  }
  @media (max-width: 768px) {
    width: 100%;
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
  color: #040a2d;
  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
    line-height: 48px;
  }
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
  @media (max-width: 768px) {
    margin-top: 12px;
    text-align: center;
  }
`

const Main = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
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
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
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

const Media = styled(Link)<{ nth: number }>`
  background: #fff;
  border-radius: 16px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 252px;
  height: 173px;
  &:hover {
    background: ${({ nth }) => {
      switch (nth) {
        case 0:
          return '#1aacfb'
        case 1:
          return '#3795F1'
        case 2:
          return '#2B2B2B'
        case 3:
          return '#7F63F9'
      }
    }};
  }
  &:hover ${MediaText} {
    color: #ffffff;
  }
  @media (max-width: 768px) {
    width: 170px;
    height: 140px;
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
  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 12px;
    width: 100%;
    max-width: 354px;
    margin: 12px auto;
    padding: 44px 32px 82px 32px;
  }
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
  @media (max-width: 768px) {
    text-align: left;
  }
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
  @media (max-width: 768px) {
    text-align: left;
  }
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
  height: 54px;
  outline: none;
  font-size: 18px;
`

async function subscribeMail(email: string) {
  const response: AxiosResponse<any> = await axios({
    method: 'post',
    url: KCC.MAIL_SUBSCRIBE_PROXY,
    data: {
      email_address: email,
      status: 'subscribed',
    },
  })
  return response
}

const Community: React.FC = () => {
  const { t } = useTranslation()
  const initHoverState = new Array(4).fill(false)
  const [hoverList, setHoverList] = React.useState<boolean[]>(initHoverState)
  const [email, setEmail] = React.useState<string>('')
  const [disable, setDisable] = React.useState<boolean>(false)
  const [, setSubscribed] = React.useState<boolean>(false)

  const mediaList: any[] = React.useMemo(() => {
    return [
      {
        name: 'Twitter',
        icon: () => (
          <TwitterIcon
            width={48}
            height={48}
            color={hoverList[0] ? '#fff' : '#040A2D'}
          />
        ),
        url: KCC.TWITTER,
      },
      {
        name: 'Telegram',
        icon: () => (
          <TelegramIcon
            width={48}
            height={48}
            color={hoverList[1] ? '#fff' : '#040A2D'}
          />
        ),
        url: KCC.TELEGRAM,
      },
      {
        name: 'Github',
        icon: () => (
          <GithubMedia
            width={48}
            height={48}
            color={hoverList[2] ? '#fff' : '#040A2D'}
          />
        ),
        url: KCC.GITHUB_URL,
      },
      {
        name: 'Discord',
        icon: () => (
          <DiscordIcon
            width={48}
            height={48}
            color={hoverList[3] ? '#fff' : '#040A2D'}
          />
        ),
        url: KCC.DISCORD_URL,
      },
    ]
  }, [hoverList])

  const setHoverByIndex = (index: number) => {
    const stateList = initHoverState
    setHoverList(() => initHoverState)
    stateList.splice(index, 1, true)
    setHoverList(() => stateList)
  }

  const subscribe = async (email: string) => {
    const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

    if (!emailReg.test(email)) {
      message.error(t(`KCC_home_email_failed`))
      return false
    }
    setDisable(true)
    try {
      const response = await subscribeMail(email)
      if (response.data.status === 400) {
        message.warning(t(`${response.data.detail}`))
      } else {
        message.success(t(`KCC_home_email_success`))
        setSubscribed(() => true)
        setEmail(() => '')
      }
    } finally {
      setDisable(false)
    }
  }

  return (
    <Wrap>
      <Content>
        <Title id="join_kcc_community">
          <Trans
            i18nKey="Join KCC Community"
            components={{ color: <Color /> }}
          />
        </Title>
        <SubTitle>{t('KCC_home_community_subtitle')}</SubTitle>
        <Main>
          <MediaGrid>
            {mediaList.map((media, index) => {
              return (
                <Media
                  nth={index}
                  href={media.url}
                  target="_blank"
                  key={index}
                  onMouseEnter={() => setHoverByIndex(index)}
                  onMouseLeave={() => setHoverList(() => initHoverState)}
                >
                  {media.icon()}
                  <MediaText>{t(media.name)}</MediaText>
                </Media>
              )
            })}
          </MediaGrid>
          <SubscribeWrap>
            <SubscribeTitle>{t('KCC_home_email_title')}</SubscribeTitle>
            <SubscribeDesc>{t('KCC_home_email_subtitle')}</SubscribeDesc>
            <StyledInput
              type="email"
              size="large"
              value={email}
              onChange={(e) => setEmail(() => e.target.value)}
            />
            <NormalButton
              onClick={subscribe.bind(null, email)}
              style={{ marginTop: '22px' }}
              loading={disable}
            >
              <ButtonText>{t('Subscribe')}</ButtonText>
            </NormalButton>
          </SubscribeWrap>
        </Main>
      </Content>
    </Wrap>
  )
}

export default Community
