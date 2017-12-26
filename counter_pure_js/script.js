// Counter app using pure JavaScript

// this will be replaced by a Redux store
// other Flux implementations might have multiple stores
let state = 0

const incrementCounter = (state) => {
  return state + 1;
};

const decrementCounter = (state) => {
  return state - 1;
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return incrementCounter(state);
    case 'DECREMENT':
      return decrementCounter(state);
    default:
      return state;
  }
}

const updateState = (action) => {
  state = counter(state, action)
  render()
}

// this will be replaced by ReactDOM.render(), React components and actions
const render = () => {
  document.getElementById('root').innerHTML = `
    <div class="app">
      <h1 id="state">${state}</h1>
      <button onClick="updateState({'type': 'DECREMENT'})"> - </button>
      <button onClick="updateState({'type': 'INCREMENT'})"> + </button>
    </div>    
  `
}

window.onload = () => {
  render()
}