import React, { FC } from 'react'
import { Layout } from 'components/Layout'
import { Icon, IconName, IconPrefix } from 'components/Icon'
import { SOCIAL } from 'constants/strings'
import 'constants/iconLibrary'

const Main: FC = () => {
  return (
    <Layout>
      <section className="container my5 mt9">
        <h3 className="tc">Sam Bossley.</h3>
        <ul className="df fd-c-s pa0 lstn jc-c">
          {SOCIAL.map((s, i: number) => (
            <li key={i} className="mx4 tc my3-s" style={{ height: 35 }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={s.url}
                aria-label={s.name}
                title={s.name}
                className="c-inh hov-c-text-light"
              >
                <Icon
                  className="h-100"
                  prefix={(s.prefix as IconPrefix) || 'fab'}
                  icon={s.icon as IconName}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Main
