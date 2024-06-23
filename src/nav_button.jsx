import Button from '@mui/material/Button';
import { useState } from 'react';
export default function LogIn(){
    let [cli,setclic]=useState(false);
    let clic=()=>{
        setclic(!cli)
        console.log(cli);
    }

    return (
        <div className="logInbtn">
            {

          !cli ?  <Button variant="contained" onClick={clic}>Log-In</Button>:<i class="fa-solid fa-user"></i>
            }
        </div>
    );
}