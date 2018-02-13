// actions: addCounter, removeCounter, increaseValue, resetValue
const addCounter = () => ({
  type: 'ADD_COUNTER'
})

const removeCounter = index => ({
  type: 'REMOVE',
  index
})

const increaseValue = (index, value) => ({
  type: 'INCREMENT',
  index,
  value
})

const resetValue = index => ({
  type: 'RESET',
  index
})

export {addCounter, removeCounter, increaseValue, resetValue}
