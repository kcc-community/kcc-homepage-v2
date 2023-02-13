import AppLayout from 'components/AppLayout'
import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

import Banner from 'components/GasRevenue/Banner'
import SubmitForm from 'components/GasRevenue/SubmitForm'
import Loading from 'components/Loading'

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
  const [show, setShow] = React.useState<boolean>(true)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.setTimeout(() => {
        setShow(() => false)
      }, 500)
    }
  }, [])

  return (
    <AppWrap>
      <Head>
        <title>KCC Official Homepage - KuCoin Community Chain</title>
        <meta
          name="description"
          content="KCC is a high performance decentralized public chain built by the fans of KCS and KuCoin. We aim to provide community users with faster, more convenient and low-cost experience."
        />
      </Head>
      {show ? (
        <Loading show={show} />
      ) : (
        <>
          <Banner />
          <SubmitForm />
        </>
      )}
    </AppWrap>
  )
}

Home.getLayout = function getLayout(page: NextPage) {
  return <AppLayout>{page}</AppLayout>
}
