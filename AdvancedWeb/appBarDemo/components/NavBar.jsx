import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import axios from "axios";

const Upper = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    const [searchData, setSearchData] = useState("");
    let searchArray = [];

    const base = "https://api.themoviedb.org/3/"
    const searchURL = "search/movie?query="
    const options =
        {method: "get", url:`${base}${searchURL}${searchData}`,
            headers: { accept : 'application/json',
                Authorization: `Bearer `
            }};

    const handleChange = (event) => {
        setSearchData(event.target.value);
        console.log(searchData)
    }
    const handleKeyDown = (keyPressed) => {
        if (keyPressed.keyCode === 13) {
            console.log(`searched for ${searchData}`);
            setSearchData("");
            axios(options)
                .then((response) => {
                    searchArray = response.data.results.map((movie) => {
                        return movie
                    })
                    console.log(searchArray);
                    // searchArray.length === 0 ? navigate("../error") : navigate("../results")
                })
                .catch((err) => {
                    // navigate("../error")
                    console.log("broke")
                })

            console.log(searchData);
        }

    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Upper…"
                            inputProps={{ 'aria-label': 'search' }}
                            //onChange
                            value={searchData}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
