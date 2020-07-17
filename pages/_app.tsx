import React, { FC, ComponentClass } from 'react'
import 'css/styles.scss'
import 'css/styles-old.scss'

type AppProps = {
  Component: ComponentClass
  props: object
}

const App: FC<AppProps> = ({ Component, props }) => <Component {...props} />

export default App
