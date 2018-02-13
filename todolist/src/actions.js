// actions: add, delete, edit, complete
const addTodo = text => ({
  type: 'ADD',
  text
})

const delTodo = id => ({
  type: 'DELETE',
  id
})

export {addTodo, delTodo}
