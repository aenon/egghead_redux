import React from 'react'
import {connect} from 'react-redux'

import {delTodo} from '../actions'
import Todo from './Todo'

const todoList = ({todos, dispatch}) => (
  <div className="todo">
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          text={todo.text}
          onDelete={() => dispatch(delTodo(todo.id))}
        />
      ))}
    </ul>
  </div>
)

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(
  mapStateToProps
)(todoList)
