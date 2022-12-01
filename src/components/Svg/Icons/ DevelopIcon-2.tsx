import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { color?: string }> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M17.6 19.1999C17.6 20.6132 16.9867 21.8932 16 22.7732C15.1467 23.5466 14.0266 23.9999 12.8 23.9999C10.1466 23.9999 8 21.8532 8 19.1999C8 16.9866 9.5067 15.1199 11.5334 14.5732C12.08 15.9599 13.2667 17.0399 14.7333 17.4399C15.1333 17.5466 15.56 17.6132 16 17.6132C16.44 17.6132 16.8667 17.5599 17.2667 17.4399C17.48 17.9732 17.6 18.5732 17.6 19.1999Z"
        stroke={props.color ?? 'white'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.8 12.8C20.8 13.4267 20.68 14.0267 20.4666 14.5733C19.92 15.96 18.7333 17.04 17.2667 17.44C16.8667 17.5467 16.44 17.6133 16 17.6133C15.56 17.6133 15.1333 17.56 14.7333 17.44C13.2666 17.04 12.08 15.9733 11.5334 14.5733C11.32 14.0267 11.2 13.4267 11.2 12.8C11.2 10.1467 13.3467 8 16 8C18.6533 8 20.8 10.1467 20.8 12.8Z"
        stroke={props.color ?? 'white'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24 19.1996C24 21.8529 21.8534 23.9996 19.2 23.9996C17.9734 23.9996 16.8533 23.5329 16 22.7729C16.9867 21.9062 17.6 20.6262 17.6 19.1996C17.6 18.5729 17.48 17.9729 17.2667 17.4262C18.7333 17.0262 19.92 15.9596 20.4666 14.5596C22.4933 15.1196 24 16.9862 24 19.1996Z"
        stroke={props.color ?? 'white'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 29.3337H20C26.6667 29.3337 29.3333 26.667 29.3333 20.0003V12.0003C29.3333 5.33366 26.6667 2.66699 20 2.66699H12C5.33333 2.66699 2.66667 5.33366 2.66667 12.0003V20.0003C2.66667 26.667 5.33333 29.3337 12 29.3337Z"
        stroke={props.color ?? 'white'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default Icon
