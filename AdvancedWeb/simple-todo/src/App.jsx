import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  
  const handleChange = event => {
    setNewTodo(event.target.value);
    console.log(toString(todos));
  }

  const handleSubmit = event => {
    event.preventDefault();
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setNewTodo("");
    console.log(todos);
  }

  const TodoItem = ({text}) => {
    return <li>{text}</li>
  }

  return (
    <>
      <h1>Pictures go here.</h1>
      
      <img className="cat" src="./src/assets/cat.png" alt="" />
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todo-input" autoComplete="off" type="text" name="newTodo" placeholder="What needs to be done?"/>
        <button type="submit" className="save-button">Save</button>
      </form>

      <div>
        <ol>
          
        </ol>
      </div>
    </>
  )
}

export default App
