import React from 'react'
import { useEffect } from 'react'
export function useResponsive() {
  const MobileWidth = 768
  const TabletWidth = 1200
  const [isMobile, setIsModile] = React.useState(false)
  const [isTablet, setIsTablet] = React.useState(false)
  const calc = () => {
    const width =
      document.body.clientWidth ?? document.documentElement.clientWidth
    if (width <= MobileWidth) {
      setIsModile(true)
    } else {
      setIsModile(false)
    }
    if (width > MobileWidth && width <= TabletWidth) {
      setIsTablet(true)
    } else {
      setIsTablet(false)
    }
  }
  useEffect(() => {
    calc()
  }, [])

  const m = isMobile
  const t = isTablet
  const p = !(m || t)

  return { isMobile: m, isTablet: t, isPC: p }
}
