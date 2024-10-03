import { useState } from 'react'
import {Button, Stack, Typography} from "@mui/material";

function LandingPage() {
  const [count, setCount] = useState(0)

  return (
    <Stack sx={{minHeight: '100vh'}} pb={10} px={4} alignItems={'center'} justifyContent={'center'} >
        Landing
    </Stack>
  )
}

export default LandingPage;
