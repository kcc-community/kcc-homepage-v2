/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less')
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: ['src'],
  },
  images: {
    unoptimized: true,
  },
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        '@primary-color': '#21C397',
        '@link-color': '#0fcd8c',
        '@logo-color': '#39E1A4',
      },
      javascriptEnabled: true,
    },
  },
}

module.exports = withAntdLess(nextConfig)
