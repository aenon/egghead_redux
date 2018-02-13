// React Redux counter with persisted state
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducers'
import { loadState, saveState } from './localStorage'

const state = loadState({counters: []})
const store = createStore(reducer, state)
store.subscribe(() => saveState(store.getState()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
