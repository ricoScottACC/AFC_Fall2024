import {AppBar, Box, Stack, TextField, Typography} from '@mui/material';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import Results from './Results';
import Error from './Error';
import App from '../src/App';
import LandingPage from '../src/LandingPage';
import axios from 'axios';
import { useState } from 'react';

let searchArray = []

const NavBar = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const base = "https://api.themoviedb.org/3/"
    const searchURL = "search/movie?query="
    const [showNow, setShowNow] = useState(false)
    const options = 
    {method: "get", url:`${base}${searchURL}${search}`,
    headers: { accept : 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzJhNGZmMGIzY2FiYTU4ODUxMWM3MWFhNGVhNGMwOCIsIm5iZiI6MTcyNzg3ODgxOC40OTg1Niwic3ViIjoiNjZmYjVhMTlkODA2NDE2NWJkZjE2NTgxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.LwDBQdHoy7nsOTWWuuNinZhS56fcdmF7eALlbLekAIQ'
    }};

    const handleNowPlaying = event => {
        setShowNow(true)
        console.log(showNow);
    }

    const handleChange = event => {
        setSearch(event.target.value)
        axios(options)
        .then((response) => {
            searchArray = response.data.results.map((movie) => {
                return movie
            })
            console.log(searchArray);
            navigate("../results")
        })
        .catch((err) => {
            navigate("../Error")
        })
        console.log(search);
        setShowNow(false)
    }

    const handleSubmit = event => {
        event.preventDefault();

        axios(options)
        .then((response) => {
            searchArray = response.data.results.map((movie) => {
                return movie
            })
            console.log(searchArray);
            navigate("../results")
        })
        .catch((err) => {
            navigate("../Error")
        })
        console.log(search);
        setShowNow(false)
    }

    return (
        <Box minHeight='100vh' minWidth='100vw' overflow='hidden'>
            <AppBar position='sticky'>
                <Stack direction='row' gap={4} padding={2} >
                    <Link to='/' style={{textDecoration: 'none' }}>
                        <Typography color='secondary' variant='h5' >Project Movie</Typography>
                    </Link>
                    <Link to='results' style={{textDecoration: 'none' }} onClick={handleNowPlaying}>
                        <Typography color='secondary' variant='h6' >Now Playing</Typography>
                    </Link>
                    <Box className='searchBox'
                        sx={{ marginLeft: 'auto', marginRight: '0' }}
                        component="form"
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        >
                    <TextField onChange={handleChange} color='secondary' sx={{mt:'-1.5px', mr:''}} label='Search...' variant='outlined' size='small'></TextField>
                    </Box>
                </Stack>
            </AppBar>
            <Routes>
                <Route index element={<LandingPage/>}/>
                <Route path='results' element={<Results show={showNow}/>}/>
                <Route path='error' element={<Error/>}/>
            </Routes>
        </Box>
    )
}

export default NavBar;
export {searchArray};