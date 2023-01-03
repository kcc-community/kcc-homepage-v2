module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh_HK', 'zh_CN', 'es_ES', 'pt_BR', 'de_DE'],
  },
  fallbackLng: {
    default: ['en'],
  },
  nonExplicitSupportedLngs: true,
  localePath:
    typeof window === 'undefined'
      ? // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('path').resolve('./public/locales')
      : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
