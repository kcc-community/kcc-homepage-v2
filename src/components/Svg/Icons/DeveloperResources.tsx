import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { isHover: boolean }> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.89001 9C7.87001 9.49 8.71001 10.23 9.32001 11.15C9.67001 11.67 9.67001 12.34 9.32001 12.86C8.71001 13.77 7.87001 14.51 6.89001 15"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 15H17"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default Icon
