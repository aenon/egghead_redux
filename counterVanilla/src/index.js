// Counter app using pure JavaScript but Redux ideas

let state = localStorage.getItem('counterState') ? JSON.parse(
  localStorage.getItem('counterState')
) : {value: 0}

// reducer
const increase = value => {
  return value + 1;
};

const decrease = value => {
  return value - 1;
};

const counter = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {value: increase(state.value)};
    case 'DECREMENT':
      return {value: decrease(state.value)};
    default:
      return state;
  }
}

const updateState = (action) => {
  state = counter(state, action)
  localStorage.setItem('counterState', state)
  render()
}

// this will be replaced by ReactDOM.render(), React components and actions
const render = () => {
  document.getElementById('root').innerHTML = `
    <div class="desc">
      <p>Counter in Vanilla JavaScript with local storage.</p>
    </div>
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
