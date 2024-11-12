import {Box, TextField} from "@mui/material";


const SearchMovie = () => {


    return (
        <div className='searchContainer'>
            <Box className='searchBox'
                // onSubmit={handleSubmit(onSubmit)}
                 sx={{marginLeft: 'auto', marginRight: '0'}}
                 component="form"
                 noValidate
                 autoComplete="off"
            >
                <TextField
                    color='secondary'
                    sx={{mt: '-1.5px', mr: ''}}
                    label='Search Movie...'
                    variant='standard'
                    size='small'></TextField>
            </Box>
        </div>
    )
}

export default SearchMovie;