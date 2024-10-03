import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid2 } from '@mui/material';


const MovieCard = ({movie}) => {
  //const {title, overview, vote_average, poster_path} = props;
  


  return (
    <Grid2 size={4}>
    <Card sx={{ maxWidth: 345, placeItems: 'center' }}>
      <CardMedia
        component="img"
        alt={movie.title}
        height="auto"
        image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', textWrap: 'balance'}}>
          {movie.overview} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {movie.vote_average}
        </Typography>
      </CardContent>
    </Card>
    </Grid2>
  );
};

export default MovieCard;

