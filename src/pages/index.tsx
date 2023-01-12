import AppLayout from 'components/AppLayout'
import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

import Banner from 'components/Home/Banner'
import Ecosystem from 'components/Home/Ecosystem'
import Develop from 'components/Home/Develop'
import Community from 'components/Home/Community'
import Partner from 'components/Home/Partner'
import { useRouter } from 'next/router'
import { scrollToId } from 'utils/scroll'
import { isClient } from 'constants/index'

const AppWrap = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  background: #000;
`

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      // Will be passed to the page component as props
    },
  }
}
export default function Home() {
  const router = useRouter()

  // add handle when url query change
  React.useEffect(() => {
    if (isClient) {
      const { query } = router
      if (query?.id) {
        scrollToId(query.id as string)
      }
    }
  }, [router, router.query?.id])

  return (
    <AppWrap>
      <Head>
        <title>KCC Official Homepage - KuCoin Community Chain</title>
        <meta
          name="description"
          content="KCC is a high performance decentralized public chain built by the fans of KCS and KuCoin. We aim to provide community users with faster, more convenient and low-cost experience."
        />
      </Head>
      <Banner />
      <Ecosystem />
      <Develop />
      <Community />
      <Partner />
    </AppWrap>
  )
}

Home.getLayout = function getLayout(page: NextPage) {
  return <AppLayout>{page}</AppLayout>
}
