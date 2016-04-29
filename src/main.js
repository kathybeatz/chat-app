import '../styles/main.scss'
import 'babel-polyfill'
import 'isomorphic-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import configureStore from './store/configureStore'

const store = configureStore()

window.store = store

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('main')
)
