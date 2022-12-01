import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const MediumnIcon: React.FC<SvgProps & { color: string }> = (props) => {
  return (
    <Svg width="20" height="16" viewBox="0 0 20 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.397339 0.0537109H6.11845L10.2336 9.52221L14.2036 0.0537109H19.6037L17.7684 2.1968V13.7145L19.6037 15.9486H11.8499L13.7329 13.7145V4.88499L9.29429 15.9486L3.75117 4.88499V12.7844L6.11845 15.9486H0.397339L2.42641 12.7844V2.78801L0.397339 0.0537109Z"
        fill={props.color ?? 'black'}
      />
    </Svg>
  )
}

export default MediumnIcon
