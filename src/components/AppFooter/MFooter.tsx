import { DownOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import styled from 'styled-components'
import { FOOTER_LIST } from '../../constants/footerList'
import KccLogo from 'components/Logo/KccLogo'
import { CenterRow } from 'components/Row'
import { mediaList } from '.'
import Link from 'next/link'

const { Panel } = Collapse

const genExtra = () => (
  <DownOutlined style={{ color: '#fff', fontSize: '10px' }} />
)

const HeaderText = styled.div`
  color: #fff;
  font-weight: 500;
  width: 100%;
  text-align: left;
`

const NavText = styled.div`
  font-size: 12px;
  color: #fff;
  line-height: 30px;
  position: relative;
  left: 0px;
  text-align: left;
`

const MediaListWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 32px;
`

const MediaImage = styled(Link)`
  width: 42px;
  height: 42px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & + & {
    margin-left: 24px;
  }
  &:hover {
    background: rgba(33, 195, 151, 0.2);
  }
`

export default function MFooter() {
  const router = useRouter()

  const { t } = useTranslation('menu')

  const nav2Target = ({ navRoute }: { navText: string; navRoute: string }) => {
    const route = navRoute
    if (route) {
      if (route.startsWith('/')) {
        router.push(route)
      } else {
        window.open(route, '_blank')
      }
    }
  }

  const List = FOOTER_LIST.map((item, index) => {
    const children = item.children
    const subList = children.map((item, k) => {
      return (
        <NavText key={k} onClick={nav2Target.bind(null, item)}>
          {t(`${item.navText}`)}
        </NavText>
      )
    })
    return (
      <Panel
        header={<HeaderText>{t(`${item.title}`)}</HeaderText>}
        key={index}
        extra={genExtra()}
        showArrow={false}
        style={{ color: '#fff', width: '100%' }}
      >
        {subList}
      </Panel>
    )
  })

  return (
    <>
      <CenterRow
        style={{
          padding: '52px 0 42px 0',
          width: '100%',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <KccLogo />
        <MediaListWrap>
          {mediaList.map((media, index) => {
            return (
              <MediaImage href={media.url} target="_blank" key={index}>
                {media.icon(false)}
              </MediaImage>
            )
          })}
        </MediaListWrap>
      </CenterRow>
      <Collapse
        defaultActiveKey={[]}
        accordion={true}
        bordered={false}
        ghost
        style={{ color: '#fff', width: '100%' }}
      >
        {List}
      </Collapse>
    </>
  )
}
