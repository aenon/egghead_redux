// Redux app: reducer, component, store.

// reducer: a pure function which takes state and action and returns new state
// component: generates the application interface
// store: holds the state object and dispatches actions

// reducer
const counter = (state = 0, action) => {
  // state = 0: initial state
  switch (action.type) {
    // what action do we receive?
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
    // by default, return the state unchanged
      return state
  }
}

// component
const Counter = ({
  value,
  onIncrement,
  onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onDecrement}>-</button> 
    <button onClick={onIncrement}>+</button>
  </div>
)

// store
const { createStore } = Redux 
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(
  localStorage.getItem('reduxState')
) : 0
const store = createStore(
  counter,
  persistedState
)

// 3 important methods of the store: 
// getState
// dispacth
// subscribe

const render = () => {
  ReactDOM.render(
    <Counter 
      value={store.getState()}
      onIncrement = {() => 
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement = {() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('root')
  )
}

render() // renders the initial state when the page first loads

store.subscribe(render)
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
