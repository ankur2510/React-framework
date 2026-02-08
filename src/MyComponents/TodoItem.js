
import React from 'react'

const TodoItem = ({todos, onDelete}) => {
  return (
    <div>
      <h4>{todos.title}</h4>
      <p>{todos.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={onDelete}>Delete</button>
    </div>
  )
}

export default TodoItem
