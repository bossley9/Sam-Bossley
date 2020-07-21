import React, { FC } from 'react'
import { BLink } from 'components/Link'
import 'constants/iconLibrary'

const Main: FC = () => {
  return (
    <section className="container my5 mt9 tc">
      <h3>404</h3>
      <span>The page you're looking for doesn't seem to exist.</span>
      <br />
      <BLink className="mt3" />
    </section>
  )
}

export default Main
