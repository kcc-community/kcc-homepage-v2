import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { isHover: boolean }> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.61533 8.29785C6.61533 8.29785 8.63456 11.6632 11.9999 11.6632C15.3653 11.6632 17.3846 8.29785 17.3846 8.29785"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.61533 7.28857V16.7117"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.3846 7.28857V16.7117"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.26923 14.1874C5.26923 14.1874 9.37086 14.1546 12 14.1874C14.6316 14.2202 18.7308 14.1874 18.7308 14.1874"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.30768 10.9902V14.0191"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9999 11.6631V14.0189"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6923 10.9902V14.0191"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.61538 8.29785L5.26923 9.98054"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.7308 9.98054L17.3846 8.29785"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="12"
        cy="12.0001"
        r="10.4"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default Icon
