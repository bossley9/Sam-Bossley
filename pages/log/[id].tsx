import React, { FC } from 'react'
import { Head } from 'components/Head'
import { Header } from 'components/Header'
import { getLogIds, getLog } from 'util/logs'
import { formatDate } from 'util/date'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { BasicAuth } from 'components/BasicAuth'
import key from 'log/key'
import { BLink } from 'components/Link'
import Markdown from 'react-markdown'

type Props = StaticProps

const LogContent: FC<Props> = ({ log }) => {
  const { id, title, desc, date, image, content } = log

  return (
    <BasicAuth pass={key}>
      <Head
        meta={{
          desc,
          href: `/log/${id}`,
          image,
          title: `${title} - Emotional Log.`,
          type: 'article',
        }}
      />
      <Header hasHistory />
      <article className="container tc mb7">
        <h3 className="my5">{title}</h3>
        <div className="mb5">
          <span className="ff-libre">{formatDate(date)}</span>
        </div>
        <div className="mb5 tl markdown markdown-log">
          <Markdown source={content} />
        </div>
        <BLink />
      </article>
    </BasicAuth>
  )
}

export const getStaticPaths = async () => {
  const paths = getLogIds()
  return { paths, fallback: false }
}

type PropParams = { params?: any }

export const getStaticProps: GetStaticProps = async ({
  params,
}: PropParams) => {
  const log = getLog(params.id)
  return { props: { log } }
}

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>

export default LogContent
