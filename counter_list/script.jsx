// counter list app using Redux

// actions
const addCounter = (list) => {
  return [...list, 0]
}

const removeCounters = (list, index) => {
  return [
    ...list.slice(0, index), // left part
    ...list.slice(index + 1) // right part
  ]
}

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index), // left part 
    list[index] + 1,  // incremented element
    ...list.slice(index + 1) // right part
  ]
}

const decrementCounter = (list, index) => {

}

// // reducer
// const counter = (state = 0, action) => {
//   // state = 0: initial state
//   switch (action.type) {
//     // what action do we receive?
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//     // by default, return the state unchanged
//       return state
//   }
// }

// // component
// const Counter = ({
//   value,
//   onIncrement,
//   onDecrement}) => (
//   <div class="app">
//     <h1>{value}</h1>
//     <button onClick={onIncrement}> + </button>
//     <button onClick={onDecrement}> - </button>
//   </div>
// )

// // store
// const { createStore } = Redux 
// const store = createStore(counter)

// // 3 important methods of the store: 
// // getState
// // dispacth
// // subscribe

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

// render() // renders the initial state when the page first loads

// store.subscribe(render)