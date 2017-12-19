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

// Counter component
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

// store: holds the state object and dispatches actions

// html embed Redux
const { createStore } = Redux 
// same as above, in ES5
// const createStore = Redux.createStore
// npm, Babel
// import {createStore } from Redux

// specify the reducer that tells how state is updated with 
// actions

// our implementation of `createStore`
// const createStore = (reducer) => {
//   let state
//   let listeners = []

//   // 3 methods
//   const getState = () => state
//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listers.forEach(listener => listener())
//   }
//   const subscribe = (listener) => {
//     listeners.push(listener)
//     return () => {
//       listeners = listeners.filter(l => l !== listener)
//     }
//   }

//   dispatch({}) // get the initial value

//   // returns a Redux store
//   return { getState, dispatch, subscribe} 
// }

const store = createStore(counter)

// 3 important methods: 
// getState
// dispacth
// subscribe

// console.log(store.getState()) // 0
// store.dispatch({ type: 'INCREMENT'})
// console.log(store.getState()) // 1

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

render() // renders the initial state

// the Redux store will call this any time an action
// has been dispatched
// note that subscribe() will not be called at beginning
store.subscribe(render)

// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT'})
// })

// const render = () => {
//   document.body.innerText = store.getState();
// };

// store.subscribe(render);
// render();

// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT' });
// });