// counter list app in Vanilla JavaScript

// actions
const addCounter = (list) => {
  return [...list, 0];
};

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};

const decrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] - 1,
    ...list.slice(index + 1)
  ];
};

let list = localStorage.getItem('reduxState') ? JSON.parse(
  localStorage.getItem('reduxState')
) : []

// reducer
const counter = (list = [], action) => {
  switch (action.type) {
    case 'ADD':
      return addCounter(list)
    case 'REMOVE':
      return removeCounter(list, action.index)
    case 'INCREMENT':
      return incrementCounter(list, action.index)
    case 'DECREMENT':
      return decrementCounter(list, action.index)
    default:
      return list
  }
}

const updateState = (action) => {
  list = counter(list, action)
  localStorage.setItem('reduxState', JSON.stringify(list))
  render()
}

// this will be replaced by ReactDOM.render(), React components and actions
const render = () => {
  document.getElementById('root').innerHTML = `
    <div class="control">
      <button onClick="updateState({'type': 'ADD'})">
        Add Counter
      </button>
    </div>
  `
  list.forEach((value, i) => {
    document.getElementById('root').innerHTML += `
      <div class="app">
        <h1 id="state">${value}</h1>
        <button onClick="updateState({'type': 'DECREMENT', 'index': ${i}})">
          -
        </button>
        <button onClick="updateState({'type': 'INCREMENT', 'index': ${i}})">
          +
        </button>
        <button onClick="updateState({'type': 'REMOVE', 'index': ${i}})">
          x
        </button>
      </div>
    `
  })
}

window.onload = () => {
  render()
}