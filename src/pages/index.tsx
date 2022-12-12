import AppLayout from 'components/AppLayout'
import { NextPage } from 'next'
import Head from 'next/head'
import React, { Suspense } from 'react'
import styled from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Loading from 'components/Loading'

const Banner = dynamic(() => import('components/Home/Banner'), {
  suspense: true,
})
const Ecosystem = dynamic(() => import('components/Home/Ecosystem'), {
  suspense: true,
})
const Develop = dynamic(() => import('components/Home/Develop'), {
  suspense: true,
})
const Community = dynamic(() => import('components/Home/Community'), {
  suspense: true,
})
const Partner = dynamic(() => import('components/Home/Partner'), {
  suspense: true,
})

const AppWrap = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  background: #000;
`

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['menu'], null, [
        'en',
        'zh-TW',
        'zh-CN',
        'es-ES',
        'pt-BR',
        'de',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function Home() {
  return (
    <AppWrap>
      <Head>
        <title>KCC Official Homepage - KuCoin Community Chain</title>
        <meta
          name="description"
          content="KCC is a high performance decentralized public chain built by the fans of KCS and KuCoin. We aim to provide community users with faster, more convenient and low-cost experience."
        />
      </Head>
      <Suspense fallback={<Loading show={true} />}>
        <Banner />
        <Ecosystem />
        <Develop />
        <Community />
        <Partner />
      </Suspense>
    </AppWrap>
  )
}

Home.getLayout = function getLayout(page: NextPage) {
  return <AppLayout>{page}</AppLayout>
}
