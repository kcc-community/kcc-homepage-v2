import { KCC } from './index'

import {
  BridgeIcon,
  ChromeIcon,
  DiscoverIcon,
  DeveloperResourceIcon,
  DocumentationIcon,
  GrantIcon,
  NodeValidatorIcon,
  WalletIcon,
  GithubMenuIcon,
  StakingKCSIcon,
  NewsIcon,
  MediaIcon,
  ActivityIcon,
  GoDAOIcon,
} from 'components/Svg/index'

export interface NavItemType {
  name: any
  hasChildren?: boolean
  hasGroup?: boolean
  route?: string
  childrens?: NavItemChildrenType[] | NavItemGroupType[]
}

export interface NavItemChildrenType {
  title: string
  subTitle: string
  route: string
  icon: (isHover: boolean) => any
  setOpenKeys?: any
}

export interface NavItemGroupType {
  groupName: string
  groupMember: NavItemChildrenType[]
}

export const MENU_LIST = [
  {
    name: 'Developers',
    hasChildren: true,
    childrens: [
      {
        title: 'Documentation',
        subTitle: 'Quickstart docs for developers',
        route: KCC.DOCS_URL,
        icon: (isHover = false) => {
          return <DocumentationIcon isHover={isHover} />
        },
      },
      {
        title: 'Developer resources',
        subTitle: 'KCC_home_developer_subtitle',
        route: '', // Develop with KCC
        icon: (isHover = false) => {
          return <DeveloperResourceIcon isHover={isHover} />
        },
      },
      {
        title: 'Grants',
        subTitle: 'KCC_home_manu_grants',
        route: KCC.GRANTS,
        icon: (isHover = false) => {
          return <GrantIcon isHover={isHover} />
        },
      },
      {
        title: 'Github',
        subTitle: 'KCC_home_manu_github',
        route: KCC.GITHUB_URL,
        icon: (isHover = false) => {
          return <GithubMenuIcon isHover={isHover} />
        },
      },
    ],
  },
  {
    name: 'Ecosystem',
    hasChildren: true,
    childrens: [
      {
        title: 'Explore dApps',
        subTitle: 'KCC_home_manu_dapp',
        route: '/apps',
        icon: (isHover = false) => {
          return <DiscoverIcon isHover={isHover} />
        },
      },
      {
        title: 'Wallet',
        subTitle: `KCC_home_manu_wallet`,
        route: '/apps?category=wallet', // dApps -> wallet
        icon: (isHover = false) => {
          return <WalletIcon isHover={isHover} />
        },
      },
      {
        title: 'Stake KCS',
        subTitle: `KCC_home_manu_staking`,
        route: KCC.STAKING,
        icon: (isHover = false) => {
          return <StakingKCSIcon isHover={isHover} />
        },
      },
    ],
  },
  {
    name: 'Network',
    hasChildren: true,
    childrens: [
      {
        title: 'Explorer1',
        subTitle: 'KCC_home_manu_explore',
        route: KCC.EXPLORER,
        icon: (isHover = false) => {
          return <ChromeIcon isHover={isHover} />
        },
      },
      {
        title: 'Explorer2',
        subTitle: 'KCC_home_manu_explore',
        route: KCC.EXPLORER2,
        icon: (isHover = false) => {
          return <ChromeIcon isHover={isHover} />
        },
      },
      {
        title: 'Bridge',
        subTitle: `KCC_home_manu_bridge`,
        route: KCC.BRIDGE_URL,
        icon: (isHover = false) => {
          return <BridgeIcon isHover={isHover} />
        },
      },
      {
        title: 'Node Validator',
        subTitle: `KCC_home_manu_validator`,
        route: 'https://news.kcc.io/announcement-of-the-kcc-validator-election',
        icon: (isHover = false) => {
          return <NodeValidatorIcon isHover={isHover} />
        },
      },
    ],
  },
  {
    name: 'Community',
    hasChildren: true,
    childrens: [
      {
        title: 'News',
        subTitle: 'KCC_home_manu_news',
        route: KCC.NEWS_URL,
        icon: (isHover = false) => {
          return <NewsIcon isHover={isHover} />
        },
      },
      {
        title: 'Activities',
        subTitle: 'KCC_home_manu_activities',
        route: 'https://news.kcc.io/category/event/kcc-event',
        icon: (isHover = false) => {
          return <ActivityIcon isHover={isHover} />
        },
      },
      {
        title: 'GoDao',
        subTitle: 'KCC_home_manu_dao',
        route: KCC.DAO,
        icon: (isHover = false) => {
          return <GoDAOIcon isHover={isHover} />
        },
      },
      {
        title: 'Social Media',
        subTitle: 'KCC_home_manu_socialmedia',
        route: '', // Join KCC Community
        icon: (isHover = false) => {
          return <MediaIcon isHover={isHover} />
        },
      },
    ],
  },
]
