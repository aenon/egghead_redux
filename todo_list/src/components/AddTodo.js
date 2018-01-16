import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const AddTodo = ({ dispatch }) => {
  let todoText
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!todoText.value.trim()) {
          return
        }
        dispatch(addTodo(todoText.value))
        todoText.value = ''
      }}>
        <input ref={node => {todoText = node}} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
