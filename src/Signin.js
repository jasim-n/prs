/* eslint-disable */

import {
    Alert,
    Button,
    FilledInput,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    Typography,
  } from "@mui/material";
  import React, {  useState } from "react";
  import { MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
  import { CgMail } from "react-icons/cg";
  import { useForm } from "react-hook-form";
//   import { Router } from "react-router";
  import { useNavigate } from "react-router-dom";
  function SignIn(props) {
    // const history = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [Password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [check, setcheck] = useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const submitHandler3 = async () => {
      console.log(Email, Password, "iomkl");
      const response = await fetch("http://localhost:8080/api/users/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({  email: Email, password: Password }),
      });
      const data = await response.json();
      data?.token ? '' : "";
      console.log(data.token,'dude the token is still thier')
      if (response.status != 200) 
      {setcheck(true);
        console.log(errorMessage,'errpor message',response)
      setErrorMessage(data.message)
      }
  
      console.log("data???", data, response.status);
    };
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  
    return (
      <form onSubmit={ handleSubmit(submitHandler3)}>
      <Grid
        container
        sx={{
          width: "-webkit-fill-available",
          mt: "4rem",
          justifyContent: "center",
          minHeight: "92vh",
          alignContent: "center",
        }}
      >
        <Grid item xs={12} sx={{ mt: "-2rem", mb: "3rem" }}>
          <Typography
            sx={{ textAlign: "center", fontSize: "45px", fontWeight: "600" }}
          >
            Sign In with your AMntegrity account.
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Grid container>
            {check && (
              <Alert severity="warning" sx={{ width: "100%" }}>
                {errorMessage}
              </Alert>
            )}
            <Grid item xs={12} sx={{ position: "relative" }}>
              <FormControl
              className="pr"
            autoComplete='off'
                sx={{
                  "& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline":
                    { borderColor: "#4267B2 !important", borderRadius: "10px" },
                  "& .Mui-focused": { color: "#4267B2 !important" },
                  "& .MuiFormControl-root":{width:'-webkit-fill-available'},
                  ':has(input:-internal-autofill-selected)':{
  background:'#e8f0fe',borderRadius:'9px',
                  },
                  m: 1,
                  ml:0,
                  "& .MuiOutlinedInput-notchedOutline legend ": {
                    ml: "2rem",
                    backgroundColor: "red",
                    color: "red",
                  },
                }}
                fullWidth
                variant="outlined"
              >
                <InputLabel
                  sx={{ pl: "2.5rem" }}
                  htmlFor="outlined-adornment-password"
                >
                  Emails
                </InputLabel>
                <OutlinedInput
                  sx={{ pl: "2.5rem" }}
                  type={"email"}
                  label="Email"
              autoComplete="off"
              onFocus={()=>{setPassword(Password)
              console.log('focus')
            }}
                  value={Email || ''}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  onInput={(e) => {
                    setEmail(e.target.value);
                  
                    console.log('value')
                  }}
                
                />
                {/* <MdVisibilityOff /> */}
              </FormControl>
              {errors.email && <Grid ><Typography sx={{ml:'.8rem',color:'#d33943',fontWeight:'400'}}>{errors.email.message}</Typography></Grid>}
              <Grid
                item
             
                sx={{
                  padding: ".5rem",
                  backgroundColor: "rgba(10,81,105,.2)",
                  borderRadius: "8px",
                  display: "flex",
                  width: "max-content",
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                }}
              >
                <CgMail style={{ color: "#4267B2" }} />
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ position: "relative" }}>
              <FormControl
                sx={{
                  "& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline":
                    { borderColor: "#4267B2 !important", borderRadius: "10px" },
                  "& .Mui-focused": { color: "#4267B2 !important" },
                  "& .MuiFormControl-root":{width:'-webkit-fill-available'},
                  m: 1,
                  ml:0,
                  ':has(input:-internal-autofill-selected)':{
                    background:'#e8f0fe',borderRadius:'9px',
                                    },
                  "& .MuiOutlinedInput-notchedOutline legend ": {
                    ml: "2rem",
                    backgroundColor: "red",
                    color: "red",
                  },
                }}
                fullWidth
                
                variant="outlined"
              >
                <InputLabel
                
                  sx={{ pl: "2.5rem" }}
                  htmlFor="outlined-adornment-password"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                 className="input2"
                  sx={{ pl: "2.5rem" }}
                  onFocus={()=>{setPassword(Password)}}
                  {...register('password', { 
                    required: 'password is required', 
                    minLength: { value: 3, message: 'password is least 2 characters' },
                    pattern: { 
                      value: /^/, 
                      message: 'Name should contain only letters and spaces'
                    }
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={Password}
                  onInput={(e) => {
                    setPassword(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((prev) => !prev)}
                        //   onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                            {errors.password && <Grid ><Typography sx={{ml:'.8rem',color:'#d33943',fontWeight:'400'}}>{errors.password.message}</Typography></Grid>}
  
                {/* <MdVisibilityOff /> */}
              </FormControl>
              <Grid
                item
                sx={{
                  padding: ".5rem",
                  backgroundColor: "rgba(10,81,105,.2)",
                  borderRadius: "8px",
                  display: "flex",
                  width: "max-content",
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                }}
              >
                <MdLock style={{ color: "#4267B2" }} />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="/forgotpassword"
                sx={{
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "underline",
                    color: "green",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  sx={{ fontSize: "14px", color: "#4267B2", textAlign: "right" }}
                >
                  Forgot Password?
                </Typography>
              </Link>
            </Grid>
  
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button
              type="submit"
                
                sx={{
                  backgroundColor: "#4267B2",
                  color: "white",
                  fontFamily: "Raleway",
                  fontSize: "13px",
                  pl: "1.35rem",
                  pr: "1.35rem",
                  borderRadius: "1rem",
                  border: "2px solid ",
                  textAlign: "center",
                  ":hover": {
                    backgroundColor: "white",
                    color: "#4267B2",
                    border: "2px solid #4267B2",
                    borderRadius: "1rem",
                  },
                }}
              >
                Sign In{" "}
              </Button>
            </Grid>
  
            <Grid item xs={12} sx={{ mt: "1rem" }}>
              <Grid container sx={{ alignItems: "center" }}>
                <Grid
                  item
                  xs={4}
                  sx={{ height: "1px", background: "#00000080" }}
                ></Grid>
                <Grid item xs={4} sx={{ background: "white" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#4267B2",
                      textAlign: "center",
                    }}
                  >
                    New to AMntegrity?
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{ height: "1px", background: "#00000080" }}
                ></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", mt: "2rem" }}>
              <Button
                href="/signup"
                sx={{
                  backgroundColor: "transparent",
                  color: "#4267B2",
                  fontFamily: "Raleway",
                  fontSize: "18px",
                  pl: ".5rem",
                  pr: ".5rem",
                  fontWeight: "400",
                  border: "1px solid #4267B2",
                  borderRadius: "25px",
                  pt: ".5rem",
                  pb: ".5rem",
                  textAlign: "center",
                  minWidth: "44%",
                  ":hover": { backgroundColor: "#4267B2", color: "white" },
                }}
              >
                Create Account{" "}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </form>
    );
  }
  
  export default SignIn;