import type { NextPage } from 'next'
import NextHead from 'next/head'

import useLocale from '@/hooks/use-locale'

interface HeadProps {
  title?: string
  thumbnailUrl?: string
  description?: string
}

const Head: NextPage<HeadProps> = ({ title, thumbnailUrl, description }) => {
  const { t } = useLocale()
  const { siteName } = t.common
  const { siteDescription } = t.common

  if (title === undefined) {
    title = siteName
  } else {
    title = `${title} - ${siteName}`
  }

  if (thumbnailUrl === undefined) {
    thumbnailUrl = '/ogp.png'
  }

  if (description === undefined) {
    description = siteDescription
  }

  return (
    <NextHead>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='og:image' content={thumbnailUrl} />
      <meta property='og:description' content={description || siteDescription} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </NextHead>
  )
}

export default Head
