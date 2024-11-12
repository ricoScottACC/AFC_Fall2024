import {useEffect, useState} from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {AppBar, Box, Stack, TextField, Typography} from "@mui/material";
import LandingPage from "../components/LandingPage.jsx";

function App() {

  return (
      <div>
          {/*<AppBar position='sticky'>*/}
          {/*    <Stack direction='row' gap={4} padding={2}>*/}
          {/*        <Link to='/' style={{textDecoration: 'none'}}>*/}
          {/*            <Typography color='secondary' variant='h5'>Home</Typography>*/}
          {/*        </Link>*/}
          {/*        <Link to='results' style={{textDecoration: 'none'}} >*/}
          {/*            <Typography color='secondary' variant='h6'></Typography>*/}
          {/*        </Link>*/}
          {/*    </Stack>*/}
          {/*</AppBar>*/}
          <Routes>
              <Route index element={<LandingPage/>}/>
              {/*<Route path='results' element={<Results show={hide}/>}/>*/}
              {/*<Route path='error' element={<Error/>}/>*/}
          </Routes>
      </div>
  )
}

export default App
