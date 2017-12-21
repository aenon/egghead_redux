// Counter app using pure JavaScript

// this will be replaced by a Redux store
// other Flux implementations might have multiple stores
let state = 0

const updateState = (inc) => {
  // the line below will be replaced by a reducer
  state += inc
  
  render()
}

// this will be replaced by ReactDOM.render(), React components and actions
const render = () => {
  document.getElementById('root').innerHTML = `
    <div class="app">
      <h1 id="state">${state}</h1>
      <button onClick="updateState(1)"> + </button>
      <button onClick="updateState(-1)"> - </button>
    </div>    
  `
}

window.onload = () => {
  render()
}