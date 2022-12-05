import AppLayout from 'components/AppLayout'
import { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const AppWrap = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  background: #000;
`

export default function Submit() {
  return (
    <AppWrap>
      <Head>
        <title>KCC Official AppsPage - KuCoin Community Chain</title>
        <meta
          name="description"
          content="KCC is a high performance decentralized public chain built by the fans of KCS and KuCoin. We aim to provide community users with faster, more convenient and low-cost experience."
        />
      </Head>
      <div>submit</div>
    </AppWrap>
  )
}

Submit.getLayout = function getLayout(page: NextPage) {
  return <AppLayout>{page}</AppLayout>
}
