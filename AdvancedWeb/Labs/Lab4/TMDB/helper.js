
const { VITE_TMDB_API_TOKEN } = process.env
const base = "https://api.themoviedb.org/3/"
const now = "movie/now_playing"

const optionsNow = 
    {method: "get", url:`${base}${now}`,
    headers: { accept : 'application/json',
    Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
    }};

export {optionsNow};