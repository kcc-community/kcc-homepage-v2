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

interface Props {
  width?: number
  height?: number
}

//  default choose english logo，svg type，full logo.
const KccLogo: React.FC<Props> = ({ width, height }) => {
  const router = useRouter()

  const navToHome = () => {
    router.push('/')
  }

  return (
    <NextImage
      src="/images/logo/AbbreviatedLettersLogo/KuCoinCommunityChain_Green.svg"
      width={width ?? 94}
      height={height ?? 33}
      onClick={navToHome}
      alt="kcc-logo"
    />
  )
}

export default KccLogo
