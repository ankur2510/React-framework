
import React from 'react'
import TodoItem from './TodoItem';

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
    <h3 className=' my-3'>My Todos List</h3>
     {/* <TodoItem todos={props.todos[0]}/> */}
     {/* // displaying all the todos using map function */}
     
     {props.todos.length === 0 ? "No Todos to display" :
      props.todos.map((todo)=>{
      return <TodoItem key={todo.id} todos={todo} onDelete={() => props.onDelete(todo.id)}/>
      })
    }
    </div>
  )
}

export default Todos
