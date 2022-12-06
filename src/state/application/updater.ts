import { useEffect } from 'react'

import { useLanguage } from './hooks'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export default function Updater(): null {
  const { i18n } = useTranslation()
  const lang = useLanguage()
  const router = useRouter()

  useEffect(() => {
    i18n.changeLanguage(lang)
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: lang })
  }, [i18n, lang, router])

  return null
}
