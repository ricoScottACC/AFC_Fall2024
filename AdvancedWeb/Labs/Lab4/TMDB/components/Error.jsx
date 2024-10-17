import { Stack } from "@mui/material";
import { useState } from "react";
const Error = () => {
    const [visibility, setVisibility] = useState(true)
    const [bueller, setBueller] = useState(false)
    const handleEnd = () => {
        setVisibility(false)
        setTimeout(() => setBueller(true), 3000)
    }

    return (
        <Stack sx={{minHeight: '100vh'}} pb={10} px={4} alignItems={'center'} justifyContent={'center'} >
            {visibility &&
            <video onEnded={handleEnd} autoPlay muted src="src/assets/errorVid.mp4" type="video/mp4" style={{borderRadius: '10px'}}></video>
            }
            {bueller &&
            <video onEnded={handleEnd} autoPlay muted src="src/assets/errorVid2.mp4" type="video/mp4" style={{borderRadius: '10px'}}></video>
            }
        </Stack>
    )
}

export default Error;
