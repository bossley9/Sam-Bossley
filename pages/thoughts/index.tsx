import { FC } from 'react'
import { Layout } from 'components/Layout'
import { useDocumentTitle } from 'hooks/meta'

const ThoughtsContainer: FC = () => {
  useDocumentTitle('Thoughts')

  return (
    <Layout>
      <div>Thoughts</div>
    </Layout>
  )
}

export default ThoughtsContainer
