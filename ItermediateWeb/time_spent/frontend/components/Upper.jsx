import {Box, TextField, Button, Stack, Typography, Input} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import ItemCard from "./ItemCard.jsx";
import AnimatedNumber from 'animated-number-react'
import { useForm } from "react-hook-form";
import {deleteMovie, deleteShow, fetchMovies, fetchShows, saveMovie, saveShow, updateShow} from "./Client.js";
import {object, string, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const { VITE_TMDB_API_TOKEN} = process.env

const Upper = () => {
    const [total, setTotal] = useState({});
    const [srtv, setSrtv] = useState([])
    const [srm, setSrm] = useState([])
    const [dbShows, setDbShows] = useState([])
    const [dbMovies, setDbMovies] = useState([])
    let time = 0;
    const [srtvShown, setSrtvShown] = useState(0);
    const [srmShown, setSrmShown] = useState(0);

    const { register, handleSubmit, setValue, reset } = useForm();

    useEffect( () => {
        fetchMovies().then(setDbMovies)
        fetchShows().then(setDbShows)
    }, []);

    useEffect(() => {
        calculate()
    }, [dbShows, dbMovies]);

    const refresh = () => {
        fetchMovies().then(setDbMovies)
        fetchShows().then(setDbShows)
    }
    const convertMinutes = (run) => {
        let days = Math.floor(run / (60 * 24));
        let hours = Math.floor((run % (60 * 24)) / 60);
        let remaining = run % 60;
        return {
            days,
            hours,
            minutes: remaining
        };
    }

    const calculate = () => {
        dbMovies.forEach((item) => {
            time = (time + (item.runTime))
        })
        dbShows.forEach((item) => {
            item.episodeRunTime !== 0 ?
                time = (time + (item.episodeRunTime * (item.numberOfEpisodes/item.numberOfSeasons) * item.numberOfSeasonsWatched))
                : time = (time + (30 * (item.numberOfEpisodes/item.numberOfSeasons) * item.numberOfSeasonsWatched))
        })
        setTotal(convertMinutes(time))
    }


    const handleRemove = (e) => {
        const id = e.target.getAttribute('arg1')
        deleteShow(id).then(refresh)
        deleteMovie(id).then(refresh)
    }

    const handleChangeSeasons = (e) => {
        // setValue(e.target.name, e.target.value)
    }

    const handleEdit = (data, e) => {
        const id = e.target.getAttribute('arg1')
        console.log(data.seasons)
        updateShow({numberOfSeasonsWatched: parseInt(data.seasons)}, id).then(refresh)
        reset()
    }

    const handleAddTV = async (e)  => {
        const id = e.target.getAttribute('arg')
        reset()

        const options =
            {method: "get", url:`https://api.themoviedb.org/3/tv/${id}?language=en-US`,
                headers: { accept : 'application/json',
                    Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`}};

        await axios(options)
            .then((res) => {
                console.log(res)
                saveShow({
                    id: parseInt(res.data.id),
                    name: res.data.name,
                    episodeRunTime: parseInt(res.data.episode_run_time[0]),
                    numberOfSeasons: parseInt(res.data.number_of_seasons),
                    numberOfSeasonsWatched: parseInt(res.data.number_of_seasons),
                    numberOfEpisodes: parseInt(res.data.number_of_episodes),
                    posterPath: res.data.poster_path
                }).then(refresh)
            })

        function remove(arr, i){
            let front = arr.slice(0, i)
            let last = arr.slice(i+1)
            return setSrtv([...front, ...last])
        }
        let spot = 0
        srtv.forEach((item, i) => {
            if (item.id === parseInt(id)) {
                spot = i;
            }
        })
        remove(srtv, spot)
    }

    const handleAddMovie = (e) => {
        const id = e.target.getAttribute('arg')
        reset()
        const options =
            {method: "get", url:`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
                headers: { accept : 'application/json',
                    Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`}};

        axios(options)
            .then((res) => {
                saveMovie({
                    id: parseInt(res.data.id),
                    title: res.data.title,
                    runTime: parseInt(res.data.runtime),
                    posterPath: res.data.poster_path
                }).then(refresh)
            })

        function remove(arr, i){
            let front = arr.slice(0, i)
            let last = arr.slice(i+1)
            return setSrm([...front, ...last])
        }
        let spot = 0
        srm.forEach((item, i) => {
            if (item.id === parseInt(id)) {
                spot = i;
            }
        })
        remove(srm, spot)
    }

    const handleSubmitTV = (e) => {
        e.preventDefault()
        setValue(e.target.name, e.target.value)
        const options =
            {method: "get", url:`https://api.themoviedb.org/3/search/tv?query=${e.target.value}`,
                headers: { accept : 'application/json',
                    Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`}};

        axios(options)
            .then((response) => {
                setSrtv(response.data.results)
            })
            .catch((err) => {
            })
    }

    const handleSubmitMovie = (e) => {
        e.preventDefault()
        setValue(e.target.name, e.target.value)
        const options =
            {method: "get", url:`https://api.themoviedb.org/3/search/movie?query=${e.target.value}`,
                headers: { accept : 'application/json',
                    Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`}};

        axios(options)
            .then((response) => {
                setSrm(response.data.results)
            })
            .catch((err) => {
            })
    }

    const formatValue = value => `${Number(value).toFixed(0)}`

    const handleNextTV = () => {
        srtvShown <= srtv.length - 3 ?
            setSrtvShown(srtvShown + 3) :
            setSrtvShown(0)
    }
    const handleNextMovie = () => {
        srmShown <= srm.length - 3 ?
            setSrmShown(srmShown + 3) :
            setSrmShown(0)
    }

    return (
        <div className='upperContainer'>
            <Stack direction='row' sx={{textAlign: 'center', pb: 7}}>
                <Stack sx={{fontSize: '4em', textAlign: 'center'}} direction='column' className='timeContainer'>
                    <AnimatedNumber
                        value={total.days}
                        formatValue={formatValue}
                        duration='500'/>
                    <Typography>days</Typography>
                </Stack>
                <h1 >:</h1>
                <Stack sx={{fontSize: '4em'}} direction='column' className='timeContainer'>
                    <AnimatedNumber
                        value={total.hours}
                        formatValue={formatValue}
                        duration='500'/>
                    <Typography>hours</Typography>
                </Stack>
                <h1>:</h1>
                <Stack sx={{fontSize: '4em'}} direction='column' className='timeContainer'>
                    <AnimatedNumber
                        value={total.minutes}
                        formatValue={formatValue}
                        duration='500'/>
                    <Typography>minutes</Typography>
                </Stack>
            </Stack>
            <Stack direction='row' className='searchContainer' sx={{paddingBottom: '10', position: 'absolute', width: '100vw'}}>
                <Stack direction='column' sx={{position: 'absolute', left: 0, width: '48vw'}}>
                <Box className='searchBox'
                     onSubmit={handleSubmitTV}
                     sx={{marginLeft: 'auto', marginRight: '0', width: 'inherit'}}
                     component="form"
                     noValidate
                     autoComplete="off"
                >
                    <TextField
                        {...register("searchTV")}
                        onChange={handleSubmitTV}
                        color='secondary'
                        sx={{mt: '-1.5px'}}
                        style={{marginRight: '2px white solid', width: 'inherit'}}
                        label='Search TV Show...'
                        variant='standard'
                        size='small'></TextField>
                </Box>
                    <Stack direction='row'>
                    {srtv.slice(srtvShown, srtvShown+3).map((item, i) => {
                        return (
                            <Stack direction='column' key={i} sx={{alignItems: 'center', width: '15vw'}}>
                            <Typography key={item.id}>{item.name}</Typography>
                                <img style={{height: 200, width: 125, borderRadius: 3}} src={item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : '/defaultPoster.jpg'} alt={item.name}/>
                                <Button key={`b${i}`} onClick={handleAddTV} arg={item.id}>add</Button>
                            </Stack>)})}
                        { srtv.length !== 0 ? <Button onClick={handleNextTV}>Next</Button> : null}
                    </Stack>
                </Stack>
                <Stack direction='column' sx={{position: 'absolute', right: 0, width: '48vw'}}>
                    <Box className='searchBox'
                         onSubmit={handleSubmitMovie}
                         sx={{marginLeft: 'auto', marginRight: '0', width: 'inherit'}}
                         component="form"
                         noValidate
                         autoComplete="off"
                    >
                        <TextField
                            {...register("searchMovie")}
                            onChange={handleSubmitMovie}
                            color='secondary'
                            sx={{mt: '-1.5px'}}
                            style={{marginRight: '2px white solid', width: 'inherit'}}
                            label='Search Movie...'
                            variant='standard'
                            size='small'></TextField>
                    </Box>
                    <Stack direction='row'>
                        {srm.slice(srmShown, srmShown + 3).map((item, i) => {
                            return (
                                <Stack direction='column' key={i} sx={{alignItems: 'center', width: '15vw'}}>
                                    <Typography key={item.id}>{item.title}</Typography>
                                    <img style={{height: 200, width: 125, borderRadius: 3}} src={item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : '/defaultPoster.jpg'} alt={item.name}/>
                                    <Button key={`b${i}`} onClick={handleAddMovie} arg={item.id}>add</Button>
                                </Stack>)})}
                        {srm.length !== 0 ? <Button onClick={handleNextMovie}>Next</Button>: null}
                    </Stack>
                </Stack>
            </Stack>
            <div className='cardContainer' style={{paddingTop: 330}}>{dbShows.map((item) => {
                return (
                    <div key={item.id + 1} style={{position: "relative"}}>
                    <ItemCard item={item} key={item.id}/>
                    <Button sx={{position: 'absolute', bottom: 10, right: 10}} color='secondary' onClick={handleRemove} arg1={item.id} arg2={item.runtime} arg3={item.number_of_episodes} arg4={item.episode_run_time} variant='contained'>
                        del
                    </Button>
                        <Box onSubmit={handleSubmit(handleEdit)} arg1={item.id} component='form' autoComplete='off'>
                        <Input style={{position: 'absolute', bottom: 10, left: 10, height: 37, borderRadius: 3, width: 100}} color='secondary'
                               onChange={handleChangeSeasons} placeholder='Seasons' className='seasonInput'
                               variant='outlined' size='small' {...register("seasons")} type='number'
                               slotProps={{input: {max: item.numberOfSeasons, min: 0}}} disableUnderline={true}/>
                        </Box>

                    </div>
                )
            })}
                {dbMovies.map((item) => {
                    return (
                        <div key={item.id + 1} style={{position: "relative"}}>
                            <ItemCard item={item} key={item.id}/>
                            <Button sx={{position: 'absolute', bottom: 10, right: 10}} color='secondary' onClick={handleRemove} arg1={item.id} arg2={item.runtime} arg3={item.number_of_episodes} arg4={item.episode_run_time} variant='contained'>
                                del
                            </Button>
                        </div>
                    )
                })}</div>
        </div>
    )
}

export default Upper;