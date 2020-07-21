import React, { FC, Fragment } from 'react'
import { Head } from 'components/Head'
import { getThoughtIds, getThought } from 'util/thoughts'
import { formatDate } from 'util/date'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { BLink, Link } from 'components/Link'
import Markdown from 'react-markdown'
import { APP_NAME } from 'constants/strings'

type Props = StaticProps & {}

const ThoughtContent: FC<Props> = ({ thought }) => {
  const { id, title, desc, date, image, tags, content } = thought

  return (
    <Fragment>
      <Head
        meta={{
          desc,
          href: `/thoughts/${id}`,
          image,
          keywords: tags,
          title: `${title} - Arbitrary Thoughts.`,
          type: 'article',
        }}
      />
      <article className="container tc mb7">
        <Link href="/" className="mt3 mb7 fs1">
          {APP_NAME}
        </Link>
        <h3 className="mb5">{title}</h3>
        <div className="mb5">
          <span className="ff-libre">{formatDate(date)}</span>
        </div>
        <div className="mb5 tl markdown">
          <Markdown source={content} />
        </div>
        <BLink />
      </article>
    </Fragment>
  )
}

export const getStaticPaths = async () => {
  const paths = getThoughtIds()
  return { paths, fallback: false }
}

type PropParams = { params?: any }

export const getStaticProps: GetStaticProps = async ({
  params,
}: PropParams) => {
  const thought = getThought(params.id)
  return { props: { thought } }
}

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>

export default ThoughtContent
