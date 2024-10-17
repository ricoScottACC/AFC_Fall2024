import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "../components/Form.jsx";
import Fruits from "../components/Fruits.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>MUI Forms</h1>

        <Fruits/>
    </>
  )
}

export default App
