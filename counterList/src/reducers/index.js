const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {value: state.value + action.value}
    case 'RESET':
      return {value: 0}
    default:
      return state
  }
}

export default reducer
