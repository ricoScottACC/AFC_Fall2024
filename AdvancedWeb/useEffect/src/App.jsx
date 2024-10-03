import { useState , useEffect } from 'react';
import './App.css';
import axios from 'axios';
import DogCard from '../components/DogCard';
import {Stack, Button} from '@mui/material';

function App() {
  const [count, setCount] = useState(0)
  const [dog, setDog] = useState('');
  const baseURL = "https://dog.ceo/api/breeds"
  const route = "image/random";
  const endpoint = `${baseURL}/${route}`;

  const handleClick = () => {
    axios
    .get(endpoint)
    .then((response) => {
      setDog(response.data.message);
    })
    .catch((error) => {
      console.log(error.message);
    })
    
  }
  // setCount(count + 1);
  useEffect(() => {
      axios
      .get(endpoint)
      .then((response) => {
        setDog(response.data.message);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }, [])

  return (
    <>
      <h1>Doge</h1>
      <div>
      <button onClick={handleClick}>clicky</button>
      </div>
      <DogCard image={dog}/>
      <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </>
  )
}

export default App
