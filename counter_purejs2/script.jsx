// Counter app using Redux-like functions

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

// component
const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
  </div>
)

// store
const createStore = (reducer) => {
  let state
  let listeners = []

  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }
  dispatch({}) // get the initial value
  // returns a Redux-like store
  return { getState, dispatch, subscribe} 
}

const store = createStore(counter)

const render = () => {
  document.getElementById('root').innerHTML = store.getState()
}

// const render = () => {
//   ReactDOM.render(
//     <Counter 
//       value={store.getState()}
//       onIncrement = {() => 
//         store.dispatch({
//           type: 'INCREMENT'
//         })
//       }
//       onDecrement = {() =>
//         store.dispatch({
//           type: 'DECREMENT'
//         })
//       }
//     />,
//     document.getElementById('root')
//   )
// }

render() // renders the initial state when the page first loads

// the Redux store will call this any time an action
// has been dispatched
// note that subscribe() will not be called at beginning
store.subscribe(render)

// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT'})
// })