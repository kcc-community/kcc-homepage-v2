import { KCC } from '.'

// footer nanList
export const FOOTER_LIST = [
  {
    title: 'About KCC',
    children: [
      {
        navText: 'Announcement',
        navRoute: KCC.MEDIA_URL,
      },
      {
        navText: 'Risk Statement',
        navRoute: KCC.RISK_STATMENT,
      },
      /* {
        navText: 'Proof of Assets',
        navRoute: '',
      }, */
      {
        navText: 'Disclaimers',
        navRoute: KCC.DISCLAIMER,
      },
      {
        navText: 'News',
        navRoute: 'https://news.kcc.io',
      },
    ],
  },
  {
    title: 'Development Tool',
    children: [
      {
        navText: 'Docs',
        navRoute: KCC.DOCS_URL,
      },
      {
        navText: 'Github',
        navRoute: KCC.GITHUB_URL,
      },
      {
        navText: 'Testnet Explorer',
        navRoute: KCC.TEST_EXPLORER,
      },
      {
        navText: 'Mainnet faucet',
        navRoute: KCC.MAINNET_FAUCET,
      },
      {
        navText: 'Testnet faucet',
        navRoute: KCC.FAUCET,
      },
      {
        navText: 'Proof of assets',
        navRoute: '/proof-of-assets',
      },
    ],
  },
  {
    title: 'Community',
    children: [
      {
        navText: 'Telegram',
        navRoute: KCC.TELEGRAM,
      },
      {
        navText: 'Twitter',
        navRoute: KCC.TWITTER,
      },
      {
        navText: 'Discord',
        navRoute: KCC.DISCORD_URL,
      },
      {
        navText: 'Medium',
        navRoute: KCC.MEDIA_URL,
      },
    ],
  },
  // {
  //   title: 'Event',
  //   children: [
  //     {
  //       navText: 'Unicorn Contest',
  //       navRoute: '/unicorn',
  //     },
  //   ],
  // },
  {
    title: 'Contact Us',
    children: [
      {
        navText: 'Technical Support',
        navRoute: KCC.DISCORD_URL,
      },
      {
        navText: 'FAQ',
        navRoute: KCC.FAQ,
      },
      /* {
        navText: 'Media kit',
        navRoute: KCC.DOCS_URL,
      }, */
    ],
  },
]
