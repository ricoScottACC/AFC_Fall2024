import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const initPerson = {fname: "", lname: "", age: 21};

  const [personData, setPersonData] = useState(initPerson);


  const handleChange = (event) => {
      setPersonData({ ...personData, [event.target.name]: event.target.value})
      console.log(personData);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log("submited");
      setPersonData("");
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor={"fname"}>
                First Name:
                <input type={"text"} name={"fname"} id={"fname"} value={personData.fname} onChange={handleChange}
                required
                minLength={3}
                maxLength={5}/>
            </label>
            <br/>
            <label htmlFor={"lname"}>
                Last Name:
                <input type={"text"} name={"lname"} id={"lname"} value={personData.lname} onChange={handleChange}
                       minLength={3}
                       maxLength={5}/>
            </label>
            <br/>
            <label htmlFor={"age"}>
                Age:
                <input type={"number"} name={"age"} id={"age"} value={personData.age} onChange={handleChange}
                min={21}
                max={99}/>
            </label>
            <br/>
            <button>Submit</button>
        </form>
    </>
  )
}

export default App
