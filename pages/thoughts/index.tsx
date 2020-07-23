import React, { FC, Fragment } from 'react'
import { Head } from 'components/Head'
import { BLink, Link } from 'components/Link'
import { getThoughtMetas } from 'util/thoughts'
import { genFeed } from 'util/feeds'
import { formatDate } from 'util/date'
import { ThoughtMeta } from 'util/types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import 'constants/iconLibrary'
import { Icon } from 'components/Icon'
import { APP_NAME, RSS_ICON_SIZE } from 'constants/strings'

type Props = StaticProps & {}

const meta = {
  desc: 'my blog of opinions, reviews, and technology',
  href: '/thoughts',
  title: `Arbitrary Thoughts. - ${APP_NAME}`,
}

const ThoughtsContainer: FC<Props> = ({ feedUrl, thoughtMetas }) => (
  <Fragment>
    <Head
      meta={{ ...meta, keywords: ['blog', 'thoughts', 'ideas', 'tutorials'] }}
    />
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
                href={`${meta.href}/[id]`}
                as={`${meta.href}/${id}`}
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
      <BLink className="mb5" />
      <div>
        <Link href={feedUrl}>
          <Icon icon="rss" style={{ width: RSS_ICON_SIZE }} />
        </Link>
      </div>
    </section>
  </Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
  const thoughtMetas = getThoughtMetas()
  const feedUrl = genFeed({
    ...meta,
    items: thoughtMetas.map(({ id, desc, date, title, tags }: ThoughtMeta) => ({
      date,
      desc,
      href: `${meta.href}/${id}`,
      id,
      tags,
      title,
    })),
  })
  return { props: { feedUrl, thoughtMetas } }
}

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>

export default ThoughtsContainer
