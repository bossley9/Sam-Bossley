import React, { FC, Fragment, ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  meta: {
    title: string
    author: string
    desc: string
    keywords: string
    image: string
    url: string
  }
  children: ReactNode
}
export const ThoughtLayout: FC<Props> = ({ meta, children }) => {
  const { title, author, desc, keywords, image, url } = meta
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="author" content={author} />

        <meta name="description" content={desc} />
        <meta name="og:description" content={desc} />

        <meta name="keywords" content={keywords} />
        <meta name="og:image" content={image} />
        <meta name="og:type" content="article" />
        <meta name="og:url" content={url} />
      </Head>
      {children}
    </Fragment>
  )
}
