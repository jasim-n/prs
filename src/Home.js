import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import Todo from "./Todo";
import Header from "./Header";

const Home = () => {
    const [todo,setTodo]=useState([]);
    const [check,setCheck]=useState(true);
    const history = useNavigate();
    const [newTask,setNewTask]=useState()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false)
    setNewTask('')};
  
    const submitHandler3 = async () => {
           
        const response = await fetch("http://localhost:8080/api/task/show?userid="+ `${localStorage.getItem('userid')}`, {
          method: "GET",
          headers: { "Content-Type": "application/json",'Authorization': `${localStorage.getItem('token')}` },
    
        });
        const data = await response.json();
      //   data?.response=='200' ? history("/") : history("/rs");
        console.log(data.token,'dude the token is still thier')
      
    if(data && data.data) setTodo(data.data)
        console.log("data???", data, response.status,todo);
      };
    const adder = async () => {
           if(newTask.length<1) return 0
        const response = await fetch("http://localhost:8080/api/task/add", {
          method: "POST",
          headers: { "Content-Type": "application/json",'Authorization': `${localStorage.getItem('token')}` },
        body: JSON.stringify({  userid:localStorage.getItem('userid'),task:newTask }),

    
        });
        const data = await response.json();
        console.log(data.token,'dude the token is still thier')
      
 
        console.log("data???", data, response.status,todo);
        handleClose()
        submitHandler3()
      };
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            history('/')
        }
          submitHandler3()
    },[check])
  
  return (
    <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={12}><Header/></Grid>
      <Grid item lg={4} xs={6}>
        <Typography sx={{textAlign:'center',mt:'2rem'}}>Your Task list</Typography>
      {todo.map((s) => (
          <Todo key={s._id} txt={s.task} tid={s.taskid} sr={setCheck} />
        ))}
        <Button
          fullWidth
          startIcon={<AiOutlinePlus />}
          onClick={handleOpen}
          sx={{ border: "1px grey dashed", width: "100%" }}
        ></Button>
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
      Enter New task
    </Typography>
    <TextField onChange={(e)=>setNewTask(e.target.value)}></TextField>
    <Button onClick={()=>{
        
       adder()
    }}>add</Button>
  </Box>
</Modal>

      </Grid>
    </Grid>
  );
};

export default Home;
