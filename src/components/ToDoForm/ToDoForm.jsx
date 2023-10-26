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
       
        <Form onSubmit={handleClick} >
          <Form.Control
            type="search"
            placeholder="add to do..."
            className={`me-2 ${ style.add}`}
          
          onChange={handleChange}
          value={text}
            
           
            
          />
          <button className={style.btnAdd} onClick={handleClick}>Add</button>
        </Form>
      </Navbar.Collapse>

   
 
  </div>

  )
}

export default ToDoForm