import { KCC } from '.'

// footer nanList
export const FOOTER_LIST = [
  {
    title: 'Developers',
    children: [
      {
        navText: 'Documentation',
        navRoute: KCC.DOCS_URL, // docs quick-start
      },
      {
        navText: 'Explorer',
        navRoute: KCC.EXPLORER,
      },
      {
        navText: 'Tools',
        navRoute: 'https://docs.kcc.io/developers/dev-toolkit', // docs tools kit
      },
      {
        navText: 'GitHub',
        navRoute: KCC.GITHUB_URL,
      },
    ],
  },
  {
    title: 'Ecosystem',
    children: [
      {
        navText: 'Explore dApps',
        navRoute: '/apps',
      },
      {
        navText: 'Bridge',
        navRoute: KCC.BRIDGE_URL,
      },
      {
        navText: 'Stake KCS',
        navRoute: KCC.STAKING,
      },
      {
        navText: 'KCS Whitepaper',
        navRoute: KCC.KCSWHITEPAPER,
      },
      {
        navText: 'Proof of assets',
        navRoute: '/proof',
      },
    ],
  },
  {
    title: 'About KCC',
    children: [
      {
        navText: 'About KCC',
        navRoute: `${KCC.DOCS_URL}/overview/introduction`, // 'docs about kcc'
      },
      {
        navText: 'Risk Statement',
        navRoute: KCC.RISK_STATMENT,
      },
      {
        navText: 'Disclaimers',
        navRoute: KCC.DISCLAIMER,
      },
      {
        navText: 'Media Kit',
        navRoute: `${KCC.DOCS_URL}/disclosure/media-kit`, // media kit
      },
    ],
  },
]
