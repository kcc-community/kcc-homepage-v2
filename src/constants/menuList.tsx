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
        subTitle:
          'A collection of developer resources for developers onboarding to KCC.',
        route: '', // Develop with KCC
        icon: (isHover = false) => {
          return <DeveloperResourceIcon isHover={isHover} />
        },
      },
      {
        title: 'Grants',
        subTitle: 'Apply for technological grants for your project.',
        route: 'https://github.com/kcc-community/kcc-grants',
        icon: (isHover = false) => {
          return <GrantIcon isHover={isHover} />
        },
      },
      {
        title: 'Github',
        subTitle: 'Explore KCC tech repositories.',
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
        subTitle: 'Find top dApps on KCC.',
        route: '/apps',
        icon: (isHover = false) => {
          return <DiscoverIcon isHover={isHover} />
        },
      },
      {
        title: 'Wallet',
        subTitle: `Access to your funds and dApps with wallets.`,
        route: '/apps?category=wallet', // dApps -> wallet
        icon: (isHover = false) => {
          return <WalletIcon isHover={isHover} />
        },
      },
      {
        title: 'Stake KCS',
        subTitle: `Stake to vote and get KCS rewards safely.`,
        route: KCC.STAKING,
        icon: (isHover = false) => {
          return <StakingKCSIcon isHover={isHover} />
        },
      },
    ],
    // childrens: [
    //   {
    //     groupName: 'Explorer',
    //     groupMember: [
    //       {
    //         title: 'Explorer1',
    //         subTitle: 'View information on the KCC public chain',
    //         route: KCC.EXPLORER,
    //         icon: require('../assets/images/Icons/menu/chrome@2x.png').default,
    //       },
    //       {
    //         title: 'Explorer2',
    //         subTitle: 'View information on the KCC public chain',
    //         route: KCC.EXPLORER2,
    //         icon: require('../assets/images/Icons/menu/chrome@2x.png').default,
    //       },
    //     ],
    //   },
    //   {
    //     groupName: 'Dapp',
    //     groupMember: [
    //       // {
    //       //   title: 'Discover',
    //       //   subTitle: 'Discover Desc',
    //       //   route: KCC.DISCOVER,
    //       //   icon: require('../assets/images/Icons/menu/chrome@2x.png').default,
    //       // },
    //       {
    //         title: 'KCC BRIDGE TITLE',
    //         subTitle: 'KCC BRIDGE DESC',
    //         route: '/bridge/transfer',
    //         icon: require('../assets/images/Icons/menu/bridge.png').default,
    //       },
    //       {
    //         title: 'Gnosis Safe Multisig',
    //         subTitle: 'Protect asset security',
    //         route: KCC.SAFE_GNOSIS,
    //         icon: require('../assets/images/home/duoqian.svg').default,
    //       },

    //       // {
    //       //   title: 'Submit a Dapp',
    //       //   subTitle: 'Submit your dapp to the community',
    //       //   route: KCC.DAPP_URL,
    //       //   icon: require('../assets/images/Icons/menu/submit@2x.png').default,
    //       // },
    //     ],
    //   },
    //   {
    //     groupName: 'Wallet',
    //     groupMember: [
    //       {
    //         title: 'Metamask',
    //         subTitle: 'Visit and link to metamask',
    //         route: 'https://metamask.io',
    //         icon: require('../assets/images/Icons/menu/metamask@2x.png')
    //           .default,
    //       },
    //       {
    //         title: 'KuCoin Wallet',
    //         subTitle: 'Go to KuCoin Wallet',
    //         route: 'https://www.kuwallet.com',
    //         icon: require('../assets/images/Icons/menu/kuwallet.svg').default,
    //       },
    //       // {
    //       //   title: 'ImToken',
    //       //   subTitle: 'Visit and link to ImToken',
    //       //   route: 'https://token.im/',
    //       //   icon: require('../assets/images/Icons/menu/imtoken@2x.png').default,
    //       // },
    //       // {
    //       //   title: 'Shield Protocol',
    //       //   subTitle: 'Visit and link to Shield Protocol',
    //       //   route: 'https://shieldprotocol.org',
    //       //   icon: require('../assets/images/Icons/menu/shield.png').default,
    //       // },
    //       {
    //         title: 'More Wallet',
    //         subTitle: 'View more wallet in Discover',
    //         route: 'https://discover.kcc.io/project?id=10',
    //         icon: require('../assets/images/Icons/menu/wallet@2x.png').default,
    //       },
    //     ],
    //   },
    // ],
  },
  {
    name: 'Network',
    hasChildren: true,
    childrens: [
      {
        title: 'Explorer1',
        subTitle: 'Track transactions and blocks on KCC.',
        route: KCC.EXPLORER,
        icon: (isHover = false) => {
          return <ChromeIcon isHover={isHover} />
        },
      },
      {
        title: 'Explorer2',
        subTitle: 'Track transactions and blocks on KCC.',
        route: KCC.EXPLORER2,
        icon: (isHover = false) => {
          return <ChromeIcon isHover={isHover} />
        },
      },
      {
        title: 'Bridge',
        subTitle: `Bridge assets from other chain to KCC.`,
        route: 'https://bridge.kcc.io',
        icon: (isHover = false) => {
          return <BridgeIcon isHover={isHover} />
        },
      },
      {
        title: 'Node Validator',
        subTitle: `Applying to be a KCC node operator.`,
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
        subTitle: "What's new at KCC.",
        route: KCC.NEWS_URL,
        icon: (isHover = false) => {
          return <NewsIcon isHover={isHover} />
        },
      },
      {
        title: 'Activities',
        subTitle: 'Find hot events at KCC.',
        route: 'https://news.kcc.io/category/event/kcc-event',
        icon: (isHover = false) => {
          return <ActivityIcon isHover={isHover} />
        },
      },
      {
        title: 'GoDao',
        subTitle: 'Join KCS community and build KCC together.',
        route: KCC.DAO,
        icon: (isHover = false) => {
          return <GoDAOIcon isHover={isHover} />
        },
      },
      {
        title: 'Social Media',
        subTitle: 'Join our vibrant community.',
        route: '', // Join KCC Community
        icon: (isHover = false) => {
          return <MediaIcon isHover={isHover} />
        },
      },
    ],
  },
]
