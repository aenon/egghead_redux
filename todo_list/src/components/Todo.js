import React from 'react'

const todo = ({text, onDelete}) => (
  <li classname="todo">
    {text}
    <button onClick={onDelete}>x</button>
  </li>
)

export default todo
