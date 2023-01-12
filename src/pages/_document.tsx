import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { i18n } from 'next-i18next'
import React from 'react'
import Script from 'next/script'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props}></App>),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }
  render(): JSX.Element {
    return (
      <Html lang={i18n?.language}>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link
            rel="apple-touch-icon"
            href="/images/logo/Icon/KuCoinCommunityChain_Icon.png"
          />
          <link rel="preconnect" href="https:fonts.googleapis.com" />
          <link rel="preconnect" href="https:fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap"
            rel="stylesheet"
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
          <Script
            src="//recaptcha.net/recaptcha/api.js?hl=en"
            strategy="beforeInteractive"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
