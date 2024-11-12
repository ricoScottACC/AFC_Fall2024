import {createTheme} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFCC01',
        },
        secondary: {
            main: '#fc0303'
        }
    },
});

export {darkTheme};