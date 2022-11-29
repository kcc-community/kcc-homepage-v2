import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { isHover: boolean }> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M16.7 18.9799H7.29999C6.87999 18.9799 6.40999 18.6499 6.26999 18.2499L2.12999 6.66986C1.53999 5.00986 2.22999 4.49986 3.64999 5.51986L7.54999 8.30986C8.19999 8.75986 8.93999 8.52986 9.21999 7.79986L10.98 3.10986C11.54 1.60986 12.47 1.60986 13.03 3.10986L14.79 7.79986C15.07 8.52986 15.81 8.75986 16.45 8.30986L20.11 5.69986C21.67 4.57986 22.42 5.14986 21.78 6.95986L17.74 18.2699C17.59 18.6499 17.12 18.9799 16.7 18.9799Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.5 22H17.5"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 14H14.5"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default Icon
