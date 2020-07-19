import React, { FC, Fragment, ReactNode } from 'react'
import { APP_NAME } from 'constants/strings'
import Head from 'next/head'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const author = APP_NAME
  const desc = 'Personal website of Sam Bossley'
  const keywords = 'Sam, Bossley, Sam Bossley, dotfiles, coding'
  const url = 'https://sam.bossley.us'

  return (
    <Fragment>
      <Head>
        <title>{APP_NAME}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="author" content={author} />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <meta name="og:title" content={APP_NAME} />
        <meta name="og:description" content={desc} />
        <meta name="og:url" content={url} />
        <meta name="og:type" content="website" />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {children}
    </Fragment>
  )
}
