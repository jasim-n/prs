import { Avatar, Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const history = useNavigate();
    return (
        <Grid container sx={{background:'#0f3443',pt:'1rem',pb:'1rem',position:'relative'}}>
            <Grid item xs={12}>
<Typography sx={{color:'white',textAlign:'center'}}>Todo list</Typography>
            </Grid>
            <Grid item xs={2} sx={{position:'absolute',top:'10px',right:'10px'}}>
            <Button onClick={()=>{
                localStorage.removeItem('token');
                localStorage.removeItem('userid');
                history('/');
            }}
            sx={{background:' #2a625d',
                color: 'white'}}>logout</Button>
            </Grid>
        </Grid>
    );
};

export default Header;