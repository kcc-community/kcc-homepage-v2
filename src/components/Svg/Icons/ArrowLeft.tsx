import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { color?: string }> = (props) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <rect
        x="1"
        y="7"
        width="13"
        height="1.5"
        fill={props.color ?? '#21C397'}
      />
      <path
        d="M10.9498 4.99943L13.8996 7.94922L10.9498 10.899"
        stroke={props.color ?? '#21C397'}
        stroke-width="1.5"
      />
    </Svg>
  )
}

export default Icon
