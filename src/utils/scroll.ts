import { isClient } from '../constants/index'

export function scrollToId(id: string) {
  if (isClient) {
    const element = window.document.getElementById(id)
    if (element) {
      const top = element.getBoundingClientRect().top
      console.log('top', top)
      window.scrollTo({ top: top, behavior: 'smooth' })
    }
  }
}
