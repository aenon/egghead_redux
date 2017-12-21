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
  <div class="app">
    <h1>{value}</h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
  </div>
)

// store
const { createStore } = Redux 
const store = createStore(counter)

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