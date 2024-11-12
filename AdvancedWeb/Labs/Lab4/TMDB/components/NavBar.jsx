import {AppBar, Box, Stack, TextField, Typography} from '@mui/material';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import Results from './Results';
import Error from './Error';
import LandingPage from '../src/LandingPage';
import axios from 'axios';
import {optionsNow} from "../helper.js";
import MovieCard from "./MovieCard.jsx";
import { useForm } from "react-hook-form";
import {useState, useEffect} from "react";

let searchString = ""
let movies = []

const NavBar = () => {
    const { VITE_TMDB_API_TOKEN } = process.env
    const { register, handleSubmit, setValue, reset } = useForm();
    const navigate = useNavigate()
    const base = "https://api.themoviedb.org/3/"
    const searchURL = "search/movie?query="
    const [hide, setHide] = useState(true)

    useEffect(() => {
        axios(optionsNow)
            .then((response) => {
                movies = response.data.results.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie}/>
                })
            })
            .catch((err) => {
                navigate("../error")
            })
        setHide(true);
    }, []);

    const handleClick = () => {
        axios(optionsNow)
            .then((response) => {
                movies = response.data.results.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie}/>
                })
                navigate("../results")
            })
            .catch((err) => {
                navigate("../error")
            })
        setHide(true);
    }

    const handleChange = (event) => {
        console.log(`${event.target.name}: ${event.target.value}`);
        setValue(event.target.name, event.target.value);
        const options =
            {method: "get", url:`${base}${searchURL}${event.target.value}`,
                headers: { accept : 'application/json',
                    Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`}};

        axios(options)
            .then((response) => {
                movies = response.data.results.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie}/>
                })
                console.log(movies);
                movies.length === 0 ? handleClick() : navigate("../results")
            })
            .catch((err) => {
                navigate("../error")
            })
        searchString = event.target.value;
        setHide(false);
    }

    const onSubmit = (data) => {
        console.log(data);
        const options =
            {method: "get", url:`${base}${searchURL}${data.search}`,
                headers: { accept : 'application/json',
                    Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`}};

        axios(options)
            .then((response) => {
                movies = response.data.results.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie}/>
                })
                console.log(movies);
                movies.length === 0 ? navigate("../error") : navigate("../results")
            })
            .catch((err) => {
                navigate("../error")
            })

        searchString = data.search;
        reset();
        setHide(false);
    }

    return (
        <div>
            <AppBar position='sticky'>
                <Stack direction='row' gap={4} padding={2} >
                    <Link to='/' style={{textDecoration: 'none' }}>
                        <Typography color='secondary' variant='h5' >Project Movie</Typography>
                    </Link>
                    <Link to='results' style={{textDecoration: 'none' }} onClick={handleClick}>
                        <Typography color='secondary' variant='h6' >Now Playing</Typography>
                    </Link>
                    <Box className='searchBox'
                         onSubmit={handleSubmit(onSubmit)}
                        sx={{ marginLeft: 'auto', marginRight: '0' }}
                        component="form"
                        noValidate
                        autoComplete="off"
                        >
                    <TextField
                        {...register("search")}
                        onChange={handleChange}
                        color='secondary'
                        sx={{mt:'-1.5px', mr:''}}
                        label='Upper...'
                        variant='outlined'
                        size='small'></TextField>
                    </Box>
                </Stack>
            </AppBar>
            <Routes>
                <Route index element={<LandingPage/>}/>
                <Route path='results' element={<Results show={hide}/>}/>
                <Route path='error' element={<Error/>}/>
            </Routes>
        </div>
    )
}

export default NavBar;
export { searchString, movies };