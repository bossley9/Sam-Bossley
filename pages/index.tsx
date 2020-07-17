import React, { FC } from 'react'
import { Layout } from 'components/Layout'
// import { Icon, IconName } from 'components/Icon'
// import { SOCIAL } from 'constants/strings'
import 'constants/iconLibrary'

const Main: FC = () => {
  return (
    <Layout>
      {/*
      <section className="container">
        <h3 className="tc">Sam Bossley</h3>
        <ul className="df pa0 lstn">
          {SOCIAL.map((s, i: number) => (
            <li key={i}>
              <a href={s.url} aria-label={s.name} className="c-inh mx2">
                <Icon className="fs1" prefix="fab" icon={s.icon as IconName} />
              </a>
            </li>
          ))}
        </ul>
      </section>
        */}
      <div className="bg"></div>
      <h1 className="name">Sam Bossley</h1>
      <p id="tag"></p>
      <ul className="links">
        <li>
          <a
            download
            target="_blank"
            rel="noopener noreferrer"
            href="/Sam_Bossley.pdf"
          >
            Resume
          </a>
        </li>
        <li>
          <a href="mailto:bossley.samuel@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://github.com/bossley9">Github</a>
        </li>
        <li>
          <a href="https://github.com/bossley9/dotfiles">Dotfiles</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bossley9/">Linkedin</a>
        </li>
      </ul>
    </Layout>
  )
}

export default Main
