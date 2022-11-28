import Head from 'next/head'

type SEOProps = {
  description: string
  title: string
  siteTitle: string
}

const SEO: React.FunctionComponent<SEOProps> = ({
  description,
  title,
  siteTitle,
}) => {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  )
}

export default SEO
