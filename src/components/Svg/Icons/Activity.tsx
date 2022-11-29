import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps & { isHover: boolean }> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.33 10H10.66C9.55997 10 8.65997 10.9 8.65997 12V22H15.33V12C15.33 10.9 14.44 10 13.33 10Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 17H15.33V22H22V19C22 17.9 21.1 17 20 17Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.52 2.06982L13.05 3.12982C13.12 3.27982 13.31 3.41982 13.47 3.43982L14.43 3.59982C15.04 3.69982 15.19 4.1498 14.75 4.5798L14 5.3298C13.87 5.4598 13.8 5.69981 13.84 5.86981L14.05 6.78982C14.22 7.51982 13.83 7.79983 13.19 7.41983L12.29 6.88983C12.13 6.78983 11.86 6.78983 11.7 6.88983L10.8 7.41983C10.16 7.79983 9.76998 7.51982 9.93998 6.78982L10.15 5.86981C10.19 5.69981 10.12 5.4498 9.98999 5.3298L9.24999 4.58981C8.80999 4.14981 8.94999 3.7098 9.56999 3.6098L10.53 3.44983C10.69 3.41983 10.88 3.27983 10.95 3.13983L11.48 2.0798C11.77 1.4998 12.23 1.49982 12.52 2.06982Z"
        stroke={props.isHover ? '#21C397' : '#040A2D'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{' '}
    </Svg>
  )
}

export default Icon
