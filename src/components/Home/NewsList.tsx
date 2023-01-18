import arrowDown from 'assets/images/Icons/arrow-down.webp'
import { RowCenterBox } from 'components'
import { KCC } from 'constants/index'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { NewListItemType, NewsService } from 'api/news'
import { useResponsive } from 'utils/responsive'

const Wrap = styled.div`
  width: 100%;
  min-height: 300px;
  @media (max-width: 768px) {
    min-height: auto;
  }
`

const TitleBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`

const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`

const ListWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 16px;
  @media (max-width: 768px) {
    justify-content: flex-start;
    overflow: hidden;
    overflow-x: scroll;
    padding-left: 24px;
  }
`
const Item = styled.div`
  width: 384px;
  & + & {
    margin-left: 24px;
  }

  @media (max-width: 768px) {
    width: 300px;
  }
`
const ItemTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #040a2d;
  height: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  margin-top: 16px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    height: 48px;
    margin-top: 6px;
  }
`

const StyledImage = styled(Image)`
  border-radius: 12px;
  cursor: pointer;
`

const NewsList: React.FC = () => {
  const { t } = useTranslation()
  const { isMobile } = useResponsive()
  const [newsList, setNewsList] = React.useState<NewListItemType[]>([])

  React.useEffect(() => {
    async function updateList() {
      try {
        const response = await NewsService.list()
        setNewsList(() => response.data.data.list ?? [])
      } catch (e) {
        console.log(e)
      }
    }
    updateList()
  }, [])

  return (
    <Wrap>
      <TitleBar>
        <Title>{t('News')}</Title>
        <RowCenterBox
          style={{
            width: 'auto',
            cursor: 'pointer',
          }}
          onClick={() => window.open(KCC.NEWS_URL, '_blank')}
        >
          <Title
            style={{
              marginRight: '5px',
              fontSize: isMobile ? '16px' : '24px',
              fontWeight: isMobile ? 500 : 700,
            }}
          >
            {t('More')}
          </Title>
          <Image src={arrowDown} width={24} height={24} alt="arrow-down" />
        </RowCenterBox>
      </TitleBar>
      <ListWrap>
        {newsList.map((news) => {
          const newTitle =
            news.title.length < 54
              ? news.title
              : news.title.slice(0, 54) + '...'
          return (
            <Item key={news.id} onClick={() => window.open(news.content_link)}>
              <StyledImage
                src={news.banner_url}
                width={isMobile ? 300 : 384}
                height={isMobile ? 172 : 220}
                alt="news-thumbnail"
              />
              <ItemTitle>{newTitle}</ItemTitle>
              {/* <DateText>{formatDate(news.post_date)}</DateText> */}
            </Item>
          )
        })}
      </ListWrap>
    </Wrap>
  )
}

export default NewsList
