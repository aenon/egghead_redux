// React Redux counter
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './components/App'
import reducer from './reducers'

const persistedState = localStorage.getItem('counterState') ? JSON.parse(
  localStorage.getItem('counterState')
) : {value: 0}
const store = createStore(reducer, persistedState)
// const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
