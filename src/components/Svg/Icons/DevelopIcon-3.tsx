import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { color?: string }> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 20.0003C20.9706 20.0003 25 16.1201 25 11.3337C25 6.54719 20.9706 2.66699 16 2.66699C11.0294 2.66699 7 6.54719 7 11.3337C7 16.1201 11.0294 20.0003 16 20.0003Z"
        stroke={props.color ?? 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0266 18.0271L10.0133 27.8671C10.0133 29.0671 10.8533 29.6538 11.8933 29.1604L15.4667 27.4671C15.76 27.3205 16.2533 27.3205 16.5467 27.4671L20.1333 29.1604C21.16 29.6404 22.0133 29.0671 22.0133 27.8671V17.7871"
        stroke={props.color ?? 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
