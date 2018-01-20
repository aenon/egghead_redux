import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducer'
import { loadState, saveState } from './localStorage'

const state = loadState({todos: []})
const store = createStore(reducer, state)
store.subscribe(() => saveState(store.getState()))


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
