import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import github from './github.svg'
import activeGithub from './github-hover.svg'

const Icon = styled(Image)`
  width: 22px;
  height: auto;
`

const GithubIcon: React.FC<{ isHover: boolean }> = ({ isHover }) => {
  if (isHover) {
    return <Icon src={activeGithub} alt="github-icon-hover" />
  }
  return <Icon src={github} alt="github-icon" />
}

export default GithubIcon
