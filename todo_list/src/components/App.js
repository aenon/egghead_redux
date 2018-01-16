import React from 'react'

import './App.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

const App = state => (
  <div className="App">
    <TodoList />
    <AddTodo />
  </div>
)

export default App
