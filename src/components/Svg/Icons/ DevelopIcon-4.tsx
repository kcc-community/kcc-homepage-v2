import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { color?: string }> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M3.05334 10.373V23.3463C3.05334 25.8796 4.85335 26.9196 7.04001 25.6663L10.1733 23.8796C10.8533 23.493 11.9867 23.453 12.6933 23.813L19.6933 27.3196C20.4 27.6663 21.5333 27.6396 22.2133 27.253L27.9867 23.9463C28.72 23.5196 29.3333 22.4796 29.3333 21.6263V8.65298C29.3333 6.11964 27.5333 5.07964 25.3467 6.33298L22.2133 8.11964C21.5333 8.50631 20.4 8.54631 19.6933 8.18631L12.6933 4.69298C11.9867 4.34631 10.8533 4.37298 10.1733 4.75964L4.40001 8.06631C3.65334 8.49298 3.05334 9.53298 3.05334 10.373Z"
        stroke={props.color ?? 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4133 5.33301V22.6663"
        stroke={props.color ?? 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9733 8.82715V26.6671"
        stroke={props.color ?? 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
