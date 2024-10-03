import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import {Button} from '@mui/material'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const base = "https://api.themoviedb.org/3/"
  const now = "movie/now_playing"

  const handlClick = () => {
    const options = {method: "get", url:`${base}${now}`,
      headers: { accept : 'application/json',
      Authorization: 'Bearer 832a4ff0b3caba588511c71aa4ea4c08'
      }}
    axios(options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
    <Router>
      <div className="App">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <Button variant='contained' color='success' onClick={handlClick}>Button</Button>
          <hr />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
