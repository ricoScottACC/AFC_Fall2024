import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function LandingPage() {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("../results");
    };

  return (
    <div style={{alignContent: 'center'}}>
        <p className='landing' style={{fontSize: '5em', fontWeight: 'bold', paddingTop: '100px', fontFamily: 'cursive'}}>Welcome.</p>
        <Button variant={'contained'} onClick={handleClick}>What's in the box!?... Office</Button>
    </div>
  )
}

export default LandingPage;
