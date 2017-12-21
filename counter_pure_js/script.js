// Counter app using pure JavaScript

// this will be replaced by a Redux store
// other Flux implementations might have multiple stores
let state = 0

// this will be replaced by a reducer
const onIncrement = () => {
  state = state + 1
  render()
}
const onDecrement = () => {
  state = state - 1
  render()
}

// this will be replaced by ReactDOM.render(), React components and actions
const render = () => {
  document.getElementById('root').innerHTML = `
    <div class="app">
      <h1 id="state">${state}</h1>
      <button onClick="onIncrement()"> + </button>
      <button onClick="onDecrement()"> - </button>
    </div>    
  `
}

window.onload = () => {
  render()
}