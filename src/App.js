
import './App.css';
import ToDoForm from './components/ToDoForm/ToDoForm';
import { useState,useEffect } from 'react';
import ToDo from './components/ToDo/ToDo';
import { Container } from 'react-bootstrap';


function App() {

  let [todos,SetTodos]=useState([])

  const [toggleAllComplete, setToggleAllComplete]=useState(false)

  const [todoToShow,setTodoToShow]=useState("all")

  const [activeButton, setActiveButton] = useState(null);

  const [visibleTodos, setVisibleTodos] = useState([]);

  
  const addToDo=(todo)=>{
    SetTodos([...todos,todo])
  }

  const handleDelete=(id)=>{
    SetTodos(todos.filter((todo)=>todo.id !== id))
  }
  const updateTodoToShow=(chaine)=>{
    setTodoToShow(chaine)
  }

  const removeAll=()=>{
    SetTodos( todos.filter((todo)=> !todo.complete))
  }


  //on peut le faire avec boolean 
  const toggleAll=()=>{
    SetTodos(
      todos.map((todo)=>{
       return{
        ...todo,
        complete:toggleAllComplete
       }
      
      }

      ))
      setToggleAllComplete(!toggleAllComplete)
  }
    
  
  useEffect(() => {
    if (todoToShow === 'active') {
      setVisibleTodos(todos.filter(todo => !todo.complete));
    } else if (todoToShow === 'complete') {
      setVisibleTodos(todos.filter(todo => todo.complete));
    } else {
      setVisibleTodos(todos);
    }
  }, [todos, todoToShow]);

    // if(todoToShow==='active') {
    //   todos=todos.filter((todo)=> !todo.complete)
    // }else if (todoToShow==='complete'){
    //   todos=todos.filter((todo)=> todo.complete)
    // }
  
    const toggleComplete=(id)=>{
      SetTodos(
        todos.map((todo)=>{
          if(todo.id===id){
            return{
              ...todo,
             complete: !todo.complete,
            }
          }else{
            return todo;
          }
        })
      )
    }
  return (
    <div className="App">
      <header className="App-header">
      <ToDoForm addToDo={addToDo}/>
      <Container className='container'>
        <h5>To do list</h5>
          <div className='btn-style '>
          
          <button className={activeButton === 'all' ? 'btn btn-active' : 'btn'}
          onClick={() => {
            setActiveButton('all');
            updateTodoToShow('all');
          }}>All</button>


          <button  className={activeButton === 'active' ? 'btn btn-active' : 'btn'}
          onClick={() => {
            setActiveButton('active');
            updateTodoToShow('active');
          }}>To Do</button>
          <button className={activeButton === 'complete' ? 'btn btn-active' : 'btn'}
          onClick={() => {
            setActiveButton('complete');
            updateTodoToShow('complete');
          }}>Done</button>
          

          <button className='btn btn-big' onClick={toggleAll}>Toggle all done</button>
         

          {todos.some((todo)=>todo.complete)? (
            <button className='btn btn-big' onClick={removeAll}>Remove all done</button>
          ): null}
   
         
          
       
          </div>
          {
            visibleTodos.map((todo)=>(
              <ToDo todo={todo} key={todo.id} handleDelete={()=>handleDelete(todo.id)} toggleComplete={()=>toggleComplete(todo.id)}/> // ()=> handleDelete(...)  assure que la fonction ne soit appeler que quand l'evenement 
            ))
          }

      
        </Container>  
      </header>
    </div>
  );
}

export default App;
