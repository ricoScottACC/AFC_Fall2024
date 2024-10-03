import { Stack, Grid2, Box} from "@mui/material";
import MovieCard from "./MovieCard";
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { searchArray } from "./NavBar";
import { optionsNow } from "../helper";

const Results = (props) => {
    const {show} = props
    const [nowMovies, setNowMovies] = useState([])
    const navigate = useNavigate()

    let resultsArray= searchArray.map((movie) => {
        return <MovieCard key={movie.id} movie={movie}/>
    })
    
    useEffect(() => {
        axios(optionsNow)
        .then((response) => {
            let nowArray= response.data.results.map((movie) => {
                return <MovieCard key={movie.id} movie={movie}/>
            })
            setNowMovies(nowArray)
        })
        .catch((err) => {
            navigate("../Error")
        })
    }), [];

    return (
        <>
        {!show && 
            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {resultsArray}
            </Grid2>
        }
        {show && 
            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {nowMovies}
            </Grid2>
        }
        </>
    )
}

// <Stack direction='column' gap={5} sx={{minHeight: '100vh'}} pb={10} px={4} alignItems={'center'} justifyContent={'center'} >
        //     {nowMovies}
        // </Stack>

        

export default Results;

 // const movies = [{
    //     title: 'Movie1',
    //     plot: 'plot for movie1',
    //     rating: '4 out of 5 stars',
    //     poster: '/src/assets/pulp-fiction.avif'
    //     },
    //     {
    //     title: 'Movie2',
    //     plot: 'plot for movie2',
    //     rating: '0 out of 5 stars',
    //     poster: '/src/assets/pulp-fiction.avif'
    //     }];

    // const nowMovies = getMovies.map((movie, i) => {
    //     return (
    //         <MovieCard key={i}
    //             title={movie.title} overview={movie.overview}
    //             vote_average={movie.vote_average} poster_path={movie.poster_path}
    //         />
    //     )
    // });