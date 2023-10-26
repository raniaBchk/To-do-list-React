import React from 'react'
import style from './todo.module.css'
const ToDo = (props) => {
  return (
    <div className={style.todoContainer}>
    <div onClick={props.toggleComplete} style={{textDecoration: props.todo.complete? "line-through": " "}} className={style.todo} >
   
    {props.todo.text}
   
   
    
    <button className={style.deleteBtn} onClick={props.handleDelete}>x</button>
   
   
    </div>
   
    </div>
  )
}
  
export default ToDo