import React, { FC } from 'react'
import { ThoughtLayout } from 'components/ThoughtLayout'
import { getThoughtIds, getThoughtData } from 'util/thoughts'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { BLink } from 'components/Link'
import Markdown from 'react-markdown'

type Props = StaticProps & {}

const Thought: FC<Props> = ({ thoughtData }) => {
  const url = `/thoughts/${'hello'}`
  return (
    <ThoughtLayout
      meta={{
        title: 'test',
        author: 'Sam Bossley',
        desc: 'desc',
        keywords: 'keywords',
        image: 'image',
        url,
      }}
    >
      <BLink />
      <div>
        {thoughtData.title}
        <br />
        {thoughtData.id}
        <br />
        {thoughtData.date}
      </div>
      <Markdown source={thoughtData.content} />
    </ThoughtLayout>
  )
}

export const getStaticPaths = async () => {
  const paths = getThoughtIds()
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params?: any
}) => {
  const thoughtData = getThoughtData(params.id)
  return {
    props: {
      thoughtData,
    },
  }
}

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>

export default Thought
