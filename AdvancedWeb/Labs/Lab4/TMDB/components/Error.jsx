import { Stack } from "@mui/material";
import { useState } from "react";
const Error = () => {
    const [visibility, setVisibility] = useState('visible')
    const handleEnd = () => {
        setVisibility('hidden')
    }

    return (
        <Stack sx={{minHeight: '100vh'}} pb={10} px={4} alignItems={'center'} justifyContent={'center'} >
            <video onEnded={handleEnd} autoPlay muted src="src/assets/errorVid.mp4" type="video/mp4" style={{borderRadius: '10px', visibility: `${visibility}`}}></video>
        </Stack>
    )
}

export default Error;
