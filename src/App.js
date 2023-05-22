import { Box, Grid, Paper } from "@mui/material";
import SignIn from "./Signin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  
} from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";

function App() {
  return (
    <div className="App">
  <Router>
    

    <Routes>
    <Route path='/' element={<SignIn/>} />
    <Route path='/sr' element={<Signup/>} />
    <Route path='/home' element={<Home/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
