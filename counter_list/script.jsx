// counter list app using Redux and React

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
  return [
    ...list.slice(0, index),
    list[index] - 1,
    ...list.slice(index + 1)
  ]
}

// reducer
const reducer = (list = [], action) => {
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

// store
const { createStore } = Redux

const persistedState = localStorage.getItem('counterListState') ? JSON.parse(
  localStorage.getItem('counterListState')
) : {'list': [0, 1, 2]}

const store = createStore(
  reducer,
  persistedState
)

// component
const { Component } = React
class CounterList extends Component {
  render () {
    const {list} = this.props
    return (
      <div>
      <div className="control">
        <button onClick={() => {
          store.dispatch({
            type: 'ADD'
          })
        }}>
          Add Counter
        </button>
      </div>
      <div className="app">{
        this.props.list.forEach((value, i) => {
          <div>
          <h1 id="state">value</h1>
          <button onClick={() => {
            store.dispatch({
              type: 'DECREMENT',
              index: i
            })
          }}>
            -
          </button>
          <button onClick={() => {
            store.dispatch({
              type: 'INCREMENT',
              index: i
            })
          }}>
            +
          </button>
          <button onClick={() => {
            store.dispatch({
              type: 'REMOVE',
              index: i
            })
          }}>
            x
          </button>
          </div>
        })
      }</div>
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(
    <CounterList 
      {...store.getState()}
    />,
    document.getElementById('root')
  )
}

render() 
store.subscribe(render)
store.subscribe(() => {
  localStorage.setItem('counterListState', JSON.stringify(store.getState()))
})