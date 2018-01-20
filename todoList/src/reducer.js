const reducer = (state = {todos: []}, action) => {
  switch (action.type) {
    case 'ADD':
      return {todos: [...state.todos, {
        id: Date.now(),
        text:  action.text
      }]}
    case 'DELETE':
      return {todos: state.todos.filter(todo => todo.id !== action.id)}
    default:
      return state
  }
}

export default reducer
