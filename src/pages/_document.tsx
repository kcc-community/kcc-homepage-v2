import { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../../next-i18next.config'
import { useTranslation } from 'next-i18next'
import React from 'react'

export default function Document() {
  const { i18n } = useTranslation()

  const currentLocale = React.useMemo(() => {
    return i18n.language ?? i18nextConfig.i18n.defaultLocale
  }, [i18n])

  return (
    <Html lang={currentLocale}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="apple-touch-icon"
          href="/images/logo/Icon/KuCoinCommunityChain_Icon.png"
        />
        <meta
          property="og:image"
          content="/images/logo/Icon/KuCoinMedia_Icon.png"
        />
        <meta property="og:width" content="256" />
        <meta property="og:height" content="256" />
        <meta
          name="twitter:description"
          content="KCC is a high performance decentralized public chain built by the fans of KCS and KuCoin. We aim to provide community users with faster, more convenient and low-cost experience."
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="KCC Official Homepage - KuCoin Community Chain"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
