import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Image from 'next/image'

export enum PictureType {
  'svg',
  'png',
}

const NextImage = styled(Image)`
  cursor: pointer;
  position: relative;
  z-index: 2;
`

//  default choose english logo，svg type，full logo.
const KccLogo: React.FC = () => {
  const router = useRouter()

  const navToHome = () => {
    router.push('/')
  }

  return (
    <NextImage
      src="/images/logo/AbbreviatedLettersLogo/KuCoinCommunityChain_Green.svg"
      width={90}
      height={31}
      onClick={navToHome}
      alt="kcc-logo"
    />
  )
}

export default KccLogo
