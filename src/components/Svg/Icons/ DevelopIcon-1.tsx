import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { color?: string }> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M28 9.33366V22.667C28 26.667 26 29.3337 21.3333 29.3337H10.6667C6 29.3337 4 26.667 4 22.667V9.33366C4 5.33366 6 2.66699 10.6667 2.66699H21.3333C26 2.66699 28 5.33366 28 9.33366Z"
        stroke={props.color ?? 'white'}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.3333 6V8.66667C19.3333 10.1333 20.5333 11.3333 22 11.3333H24.6667"
        stroke={props.color ?? 'white'}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6667 17.333H16"
        stroke={props.color ?? 'white'}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6667 22.667H21.3333"
        stroke={props.color ?? 'white'}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default Icon
