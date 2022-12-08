import AppLayout from 'components/AppLayout'
import SubmitForm from 'components/Apps/SubmitForm'
import { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const AppWrap = styled.div`
  padding-top: 0px;
  margin: 0;
  padding: 0;
  position: relative;
  background: #000;
  border: 1px solid #000;
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
      <SubmitForm />
    </AppWrap>
  )
}

Submit.getLayout = function getLayout(page: NextPage) {
  return <AppLayout>{page}</AppLayout>
}
