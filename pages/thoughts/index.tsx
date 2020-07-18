import React, { FC } from 'react'
import { Layout } from 'components/Layout'
import { BLink, Link } from 'components/Link'
import { useDocumentTitle } from 'hooks/meta'
import { getThoughtsData } from 'util/thoughts'
import { ThoughtMeta } from 'util/types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

type Props = StaticProps & {}

const ThoughtsContainer: FC<Props> = ({ thoughtsData }) => {
  useDocumentTitle('Arbitrary Thoughts.')

  return (
    <Layout>
      <section className="container tc">
        <Link href="/" className="mt3 mb7 fs1">
          Sam Bossley
        </Link>
        <h3>Arbitrary Thoughts.</h3>
        <ul>
          {thoughtsData.map(({ id, date, title }: ThoughtMeta) => {
            return (
              <li key={id}>
                <Link href="/thoughts/[id]" as={`/thoughts/${id}`}>
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                </Link>
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
  const thoughtsData = getThoughtsData()
  return { props: { thoughtsData } }
}

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>

export default ThoughtsContainer
