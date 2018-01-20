// actions: increaseValue, resetValue
const increaseValue = value => ({
  type: 'INCREMENT',
  value
})

const resetValue = () => ({
  type: 'RESET'
})

export {increaseValue, resetValue}
