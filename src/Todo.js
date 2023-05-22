import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Todo = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const [newTask,setNewTask]=useState(props.txt)
    const [newTask2,setNewTask2]=useState(props.txt)

    function getRandomValue() {
      
        
        return Math.floor(Math.random() * (250 - 140 + 1) + 140);
      }
      
      // Example usage
      const k= getRandomValue();
      

      const tododel = async () => {
     const response = await fetch(`http://localhost:8080/api/task/del?userid=${localStorage.getItem('userid')}&task=${props.txt}`, {
       method: "DELETE",
       headers: { "Content-Type": "application/json",'Authorization': `${localStorage.getItem('token')}` },

 
     }); 
     props.sr((prev)=> !prev) 
    
   };
   const todoupdate = async () => {
    const response = await fetch("http://localhost:8080/api/task/up", {
        method: "PUT",
        headers: { "Content-Type": "application/json",'Authorization': `${localStorage.getItem('token')}` },
        body: JSON.stringify({ userid:localStorage.getItem('userid'),task:newTask2,taskid:props.tid  }),
      }); 
      console.log(props.tid)
      props.sr(prev=> !prev) 
      handleClose()
   
  };


    return (
        <Grid sx={{mt:'1rem',mb:'1rem',position:'relative'}}>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            minHeight: "50px",
            background: `linear-gradient(164deg, rgba(15,52,67,1) 22%, rgba(52,232,${k},1) 90%)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color:'white',
            borderRadius:'10px'
          }}
        >
       {props.txt}

        </Box>
        <Grid sx={{
            position: 'absolute',
            top: '8px',
            right: '-138px',
        }}>
            <Button sx={{background: 'aliceblue',mr:'4px'}} onClick={()=>{tododel(); console.log('redd')}}>Del</Button>
            <Button sx={{background: 'aliceblue'}} onClick={handleOpen}>edit</Button>
        </Grid>
        <Modal
  open={open}
  onClose={handleClose}

>
  <Box sx={{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Edit task
    </Typography>
    <TextField value={newTask2} onChange={(e)=>setNewTask2(e.target.value)}></TextField>
    <Button onClick={()=>{
        
       todoupdate()
    }}>add</Button>
  </Box>
</Modal>
      </Grid>
    );
};

export default Todo;