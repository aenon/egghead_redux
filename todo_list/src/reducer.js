const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, {
        id: Date.now(),
        text:  action.text
      }]
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default reducer
