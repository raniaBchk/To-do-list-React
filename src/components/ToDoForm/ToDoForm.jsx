import React, { useState } from 'react'
import { Container, Form, Nav,Navbar } from "react-bootstrap";
import style from './todoForm.module.css'
import shortid from 'shortid'
const ToDoForm = (props) => {

  const [text,setText]=useState('')

  const handleChange=(e)=>{
    setText(e.target.value)
  }


  const handleClick=(e)=>{
    e.preventDefault();
    props.addToDo({
      id:shortid.generate(),
      text:text,
      complete:false

    })
    setText("")
  }

  return (
  <div >
   

      <Navbar.Collapse id="navbarScroll" className="" >
      <div className={style.container}>
      <h5>Add new task</h5>
      <div >
      <Form onSubmit={handleClick} className={style.containerAdd} >

     

         
            <Form.Control
            type="search"
            placeholder="Enter a new task"
            className={style.add}
          
          onChange={handleChange}
          value={text}
            
          
            
          />
          <button className={style.btnAdd} onClick={handleClick}>+</button>
    
        
      </Form>
      </div>
      </div>
      
      </Navbar.Collapse>

   
 
  </div>

  )
}

export default ToDoForm