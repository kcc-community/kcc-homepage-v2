module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-TW', 'zh-CN', 'es-ES', 'pt-BR', 'de'],
  },
  fallbackLng: {
    default: ['en'],
  },
  nonExplicitSupportedLngs: true,
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
