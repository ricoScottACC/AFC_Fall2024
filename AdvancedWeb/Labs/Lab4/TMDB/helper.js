const base = "https://api.themoviedb.org/3/"
const now = "movie/now_playing"

const optionsNow = 
    {method: "get", url:`${base}${now}`,
    headers: { accept : 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzJhNGZmMGIzY2FiYTU4ODUxMWM3MWFhNGVhNGMwOCIsIm5iZiI6MTcyNzg3ODgxOC40OTg1Niwic3ViIjoiNjZmYjVhMTlkODA2NDE2NWJkZjE2NTgxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.LwDBQdHoy7nsOTWWuuNinZhS56fcdmF7eALlbLekAIQ'
    }};

export {optionsNow};