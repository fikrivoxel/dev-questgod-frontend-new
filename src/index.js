import React from 'react'
import {render} from 'react-dom'
import App from 'App'
import {configureStore, history} from 'store/config'
import 'styles/app.scss'

render(
  <App store={configureStore()} history={history} />,
  document.getElementById('root')
)
