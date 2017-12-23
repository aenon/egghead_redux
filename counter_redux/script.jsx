// Counter app using Redux-like functions and direct DOM scripting - no React

// reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// our own implementation of Redux createStore function
const createStore = (reducer) => {
  let state
  let listeners = []

  // getState: get the current state of the store
  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  // dispatch: dispatches an action
  const dispatch = (action) => {
    // updates the state using the reducer
    state = reducer(state, action)
    //
    listeners.forEach(listener => listener())
  }

  // get the initial value
  dispatch({}) 

  // returns a Redux-like store
  return { getState, dispatch, subscribe} 
}
// create the Redux store, a single JS object to host the current state
const store = createStore(counter)

// listener: this will be replaced with ReactDOM.render + React components
const render = () => {
  document.getElementById('root').innerHTML = `
  <div class="app">
    <h1>${store.getState()}</h1>
    <button id="decBtn"> - </button>
    <button id="incBtn"> + </button>
  </div>    
  `
  document.getElementById('incBtn').addEventListener(
    "click", () => store.dispatch({type: 'INCREMENT'})
  )
  document.getElementById('decBtn').addEventListener(
    "click", () => store.dispatch({type: 'DECREMENT'})
  )
}
// renders the initial state when the page first loads
render() 

store.subscribe(render)