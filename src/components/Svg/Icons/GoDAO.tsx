import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { isHover: boolean }> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.97 14.4402C18.34 14.6702 19.85 14.4302 20.91 13.7202C22.32 12.7802 22.32 11.2402 20.91 10.3002C19.84 9.59016 18.31 9.35016 16.94 9.59016"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 14.4402C5.63 14.6702 4.12 14.4302 3.06 13.7202C1.65 12.7802 1.65 11.2402 3.06 10.3002C4.13 9.59016 5.66 9.35016 7.03 9.59016"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.6302C11.94 14.6202 11.87 14.6202 11.81 14.6302C10.43 14.5802 9.32996 13.4502 9.32996 12.0502C9.32996 10.6202 10.48 9.47021 11.91 9.47021C13.34 9.47021 14.49 10.6302 14.49 12.0502C14.48 13.4502 13.38 14.5902 12 14.6302Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.08997 17.7804C7.67997 18.7204 7.67997 20.2603 9.08997 21.2003C10.69 22.2703 13.31 22.2703 14.91 21.2003C16.32 20.2603 16.32 18.7204 14.91 17.7804C13.32 16.7204 10.69 16.7204 9.08997 17.7804Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
