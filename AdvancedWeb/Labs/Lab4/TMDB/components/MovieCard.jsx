import { Accordion, AccordionDetails, AccordionSummary, Card, CardMedia, Typography, Rating } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MovieCard = ({movie}) => {
  let pic = ""
  const picCheck = movie.poster_path ? 
    pic = `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : pic = "/src/assets/defaultPoster.jpg";
  
  return (
  <div className='cards'>
    <Card style={{ width: 345, boxShadow: '0px 0px 10px 5px red' }}>
      <CardMedia
        component="img"
        alt={movie.title}
        height="500"
        image={pic}
      />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{fontSize: '1.2em', fontWeight: 'bold'}}>
          {movie.title}
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary', textWrap: 'balance', pb: 4}}>
            {movie.overview} 
          </Typography>
          <Rating name="read-only" value={movie.vote_average/2} precision={0.1} readOnly />
        </AccordionDetails>
      </Accordion>
    </Card>
  </div> 
  );
};

export default MovieCard;