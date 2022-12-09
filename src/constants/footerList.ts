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
        navRoute: '', // docs tools kit
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
        navRoute: '/proof-of-assets',
      },
    ],
  },
  {
    title: 'About KCC',
    children: [
      {
        navText: 'About KCC',
        navRoute: KCC.MEDIA_URL, // 'docs about kcc'
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
        navRoute: '', // media kit
      },
    ],
  },
]
