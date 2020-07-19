import React, { FC } from 'react'
import { Layout } from 'components/Layout'
import { BLink, Link } from 'components/Link'
import { useDocumentTitle } from 'hooks/meta'
import { getThoughtMetas } from 'util/thoughts'
import { formatDate } from 'util/date'
import { ThoughtMeta } from 'util/types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { APP_NAME } from 'constants/strings'

type Props = StaticProps & {}

const ThoughtsContainer: FC<Props> = ({ thoughtMetas }) => {
  useDocumentTitle('Arbitrary Thoughts.')

  return (
    <Layout>
      <section className="container tc mb7">
        <Link href="/" className="mt3 mb7 fs1">
          {APP_NAME}
        </Link>
        <h3 className="mb8">Arbitrary Thoughts.</h3>
        <ul className="lstn mxa mb5 pl0 tl w-70-ns">
          {thoughtMetas.map(({ id, date, title, tags }: ThoughtMeta) => {
            return (
              <li key={id} className="mb3">
                <Link
                  href="/thoughts/[id]"
                  as={`/thoughts/${id}`}
                  className="db tl mb1"
                >
                  <h5 className="ma0">{title}</h5>
                </Link>
                <span className="db mb1 fw700 c-text-light">
                  {formatDate(date)}
                </span>
                <span className="ff-libre c-text-light-2">
                  {tags.sort((a, b) => a.localeCompare(b)).join(', ')}
                </span>
              </li>
            )
          })}
        </ul>
        <BLink />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const thoughtMetas = getThoughtMetas()
  return { props: { thoughtMetas } }
}

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>

export default ThoughtsContainer
