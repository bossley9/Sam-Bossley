import React, { FC, ComponentClass } from 'react'
import 'css/styles.scss'
import 'css/styles-old.scss'

const App: FC<{
  Component: ComponentClass
  props: object
}> = ({ Component, props }) => <Component {...props} />

export default App
