import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const reducer = (state = {isHidden: true}, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {isHidden: !state.isHidden}
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'))

registerServiceWorker()
