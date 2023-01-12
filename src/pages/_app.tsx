import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Script from 'next/script'
// import localFont from '@next/font/local'
import type { ReactElement, ReactNode } from 'react'
import Providers from '../components/Providers'
import { appWithTranslation } from 'next-i18next'
import '../styles/globals.css'
import '../styles/index.less'

// const URWDIN = localFont({
//   src: [
//     {
//       path: '../assets/fonts/URWURWDIN-XLight.otf',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../assets/fonts/URWURWDIN-Light.otf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../assets/fonts/URWURWDIN-Regular.otf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../assets/fonts/URWURWDIN-Medium.otf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../assets/fonts/URWURWDIN-Bold.otf',
//       weight: '900',
//       style: 'normal',
//     },
//   ],
// })

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <div>
      <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SDY59S7KD7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SDY59S7KD7');
        `}
      </Script>
    </div>
  )
}

export default appWithTranslation(App)
