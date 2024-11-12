import axios from "axios";

const show = 'http://localhost:8080/api/show';
const movie = 'http://localhost:8080/api/movie';

export const fetchShows = () => {
    return axios.get(show).then(res => res.data);
}

export const searchShow = (id) => {
    return axios.get(`${show}/${id}`).then(res => res.data);
}

export const saveShow = (addedShow) => {
    return axios.post(show, addedShow).then(res => res.data);
}

export const deleteShow = (id) => {
    return axios.delete(`${show}/${id}`).then(res => res.data);
}

export const updateShow = (title, id) => {
    return axios.put(`${show}/${id}`, title).then(res => res.data);
}

export const fetchMovies = () => {
    return axios.get(movie).then(res => res.data);
}

export const searchMovie = (id) => {
    return axios.get(`${movie}/${id}`).then(res => res.data);
}

export const saveMovie = (addedMovie) => {
    return axios.post(movie, addedMovie).then(res => res.data);
}

export const deleteMovie = (id) => {
    return axios.delete(`${movie}/${id}`).then(res => res.data);
}

