import React, { FC } from 'react'
import { Head } from 'components/Head'
import { BLink, Link } from 'components/Link'
import { Header } from 'components/Header'
import { getLogMetas } from 'util/logs'
import { genFeed } from 'util/feeds'
import { formatDate } from 'util/date'
import { LogMeta } from 'util/types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import 'constants/iconLibrary'
import { Icon } from 'components/Icon'
import { APP_NAME, RSS_ICON_SIZE } from 'constants/strings'
import { BasicAuth } from 'components/BasicAuth'
import key from 'log/key'

type Props = StaticProps & {}

const meta = {
  desc:
    'A stream of my raw unconsciousness through written words, poetry, and storytelling',
  href: '/log',
  title: `Emotional Log - ${APP_NAME}`,
}

const LogContainer: FC<Props> = ({ feedUrl, logMetas }) => {
  return (
    <BasicAuth pass={key}>
      <Head meta={{ ...meta, keywords: ['emotional', 'thoughts', 'log'] }} />
      <Header />
      <section className="container tc mb7">
        <h3 className="mb8">Emotional Log.</h3>
        <ul className="lstn mxa mb5 pl0 tl w-70-ns">
          {logMetas.map(({ id, date, title }: LogMeta) => {
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
              </li>
            )
          })}
        </ul>
        <BLink className="mb5" />
        <div>
          <a aria-label="rss feed" href={feedUrl} className="c-inh">
            <Icon
              icon="rss"
              style={{ width: RSS_ICON_SIZE, height: RSS_ICON_SIZE }}
            />
          </a>
        </div>
      </section>
    </BasicAuth>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const logMetas = getLogMetas()
  const feedUrl = genFeed({
    ...meta,
    items: logMetas.map(({ desc, date, id, title }: LogMeta) => ({
      date,
      desc,
      href: `${meta.href}/${id}`,
      id,
      title,
    })),
  })
  return { props: { feedUrl, logMetas } }
}

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>

export default LogContainer
