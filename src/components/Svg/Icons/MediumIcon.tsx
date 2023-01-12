import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const MediumnIcon: React.FC<SvgProps & { color: string }> = (props) => {
  return (
    <Svg width="48" height="49" viewBox="0 0 48 49" fill="none" {...props}>
      <path
        d="M27.3622 24.1811C27.3622 31.4608 21.4608 37.3622 14.1811 37.3622C6.90137 37.3622 1 31.4608 1 24.1811C1 16.9014 6.90137 11 14.1811 11C21.4608 11 27.3622 16.9014 27.3622 24.1811Z"
        fill={props.color ?? 'black'}
      />
      <path
        d="M41.1163 24.1811C41.1163 31.4608 38.2939 37.3622 34.8123 37.3622C31.3307 37.3622 28.5083 31.4608 28.5083 24.1811C28.5083 16.9014 31.3307 11 34.8123 11C38.2939 11 41.1163 16.9014 41.1163 24.1811Z"
        fill={props.color ?? 'black'}
      />
      <path
        d="M47.9934 24.181C47.9934 30.1947 46.9671 35.0698 45.7011 35.0698C44.435 35.0698 43.4087 30.1947 43.4087 24.181C43.4087 18.1674 44.435 13.2923 45.7011 13.2923C46.9671 13.2923 47.9934 18.1674 47.9934 24.181Z"
        fill={props.color ?? 'black'}
      />
    </Svg>
  )
}

export default MediumnIcon
