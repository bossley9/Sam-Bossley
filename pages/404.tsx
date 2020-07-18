import React, { FC } from 'react'
import { Layout } from 'components/Layout'
import 'constants/iconLibrary'

const Main: FC = () => {
  return (
    <Layout>
      <section className="container my5 mt9 tc">
        <h3>404</h3>
        <span>The page you're looking for doesn't seem to exist.</span>
        <br />
        <button
          onClick={() => window.history.back()}
          className="clearall mt3 ff-libre pointer hov-tdu"
        >
          go back
        </button>
      </section>
    </Layout>
  )
}

export default Main
