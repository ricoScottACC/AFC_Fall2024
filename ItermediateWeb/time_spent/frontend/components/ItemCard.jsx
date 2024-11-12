import {Card, CardActions, CardMedia, Typography} from "@mui/material";


const ItemCard = ({item}) => {

    return (
        <div className='cards' style={{position: 'relative'}}>
            <Card style={{width: 259}}>
                <CardMedia
                    component="img"
                    alt={item.title}
                    height="375"
                    image={item.posterPath ? `https://image.tmdb.org/t/p/original${item.posterPath}` : '/defaultPoster.jpg'}
                />
                <Typography sx={{position: 'absolute', left: 12, top: 10}} className='cardTitle'>
                    {item.title || item.name}
                </Typography>
                {/*<Typography sx={{position: 'absolute', left: 12, bottom: 10}}>*/}
                {/*    {item.numberOfSeasons}*/}
                {/*</Typography>*/}
            </Card>
        </div>
    )
}

export default ItemCard;