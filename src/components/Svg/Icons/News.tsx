import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { isHover: boolean }> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M22 16.7402V4.67019C22 3.47019 21.02 2.58019 19.83 2.68019H19.77C17.67 2.86019 14.48 3.93019 12.7 5.05019L12.53 5.16019C12.24 5.34019 11.76 5.34019 11.47 5.16019L11.22 5.01019C9.44 3.90019 6.26 2.84019 4.16 2.67019C2.97 2.57019 2 3.47019 2 4.66019V16.7402C2 17.7002 2.78 18.6002 3.74 18.7202L4.03 18.7602C6.2 19.0502 9.55 20.1502 11.47 21.2002L11.51 21.2202C11.78 21.3702 12.21 21.3702 12.47 21.2202C14.39 20.1602 17.75 19.0502 19.93 18.7602L20.26 18.7202C21.22 18.6002 22 17.7002 22 16.7402Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5.49023V20.4902"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 8.49023H5.5"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11.4902H5.5"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
