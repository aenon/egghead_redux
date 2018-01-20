// Counter app using pure JavaScript but Redux ideas, with persisted state
import './index.css'

let state = localStorage.getItem('counterState') ? JSON.parse(
  localStorage.getItem('counterState')
) : {value: 0}

// reducer
const counter = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {value: state.value + action.value}
    case 'RESET':
      return {value: 0}
    default:
      return state
  }
}

const updateState = action => {
  state = counter(state, action)
  localStorage.setItem('counterState', JSON.stringify(state))
  document.getElementById('counterValue').innerHTML = state.value
}

// this will be replaced by ReactDOM.render(), React components and actions
const render = () => {
  document.getElementById('root').innerHTML = `
    <div class="desc">
      <p>Counter in Vanilla JavaScript with local storage.</p>
    </div>
    <div class="app">
      <h1 id="counterValue"></h1>
      <button id="decreaseButton">-</button>
      <button id="increaseButton">+</button>
      <button id="resetButton">RESET</button>
    </div>
  `
  document.getElementById('counterValue').innerHTML = state.value
  document.getElementById('decreaseButton').onclick = () => {updateState({
    'type': 'INCREMENT',
    'value': -1
  })}
  document.getElementById('increaseButton').onclick = () => {updateState({
    'type': 'INCREMENT',
    'value': 1
  })}
  document.getElementById('resetButton').onclick = () => {updateState({
    'type': 'RESET',
  })}
}

window.onload = () => {
  render()
}
