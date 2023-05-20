import { Box, Grid, Paper } from "@mui/material";
import SignIn from "./Signin";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item lg={5}>
          <Paper elevation={7}>
            <Box>
              <SignIn/>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
