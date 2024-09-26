import { useState } from 'react'
import './App.css'
import { personObj } from './helper';

function App() {
  // const [fname, setFname] = useState("Rico");
  // const [age, setAge] = useState(33);
  // const [pw, setPw] = useState("");

  const [person, setPerson] = useState({personObj})

  return (
    <form action="/getdata" method='get'>
      <label>
        First Name:
        <input type="text" />
      </label>
      <label>
        Age:
        <input type="number" name="" id="" />
      </label>
      <label>
        Password:
        <input type="password" name="" id="" />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
