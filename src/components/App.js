import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import TaskList from './TaskList';
import Login from "./Login";
import useToken from "./useToken";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    list:{
      backgroundColor: '#d3d3d3'
    }
  }));


const App = () => {
    const classes = useStyles();
    const {token, setToken} = useToken(); 
    if(!token){
      return <Login setToken={setToken}/>
    }

    return (
        <div>
          <Header/>
          <BrowserRouter>
            <Switch>
              <Route path="/dashboard">
                <Grid container spacing={1}>
                  <Grid item lg={4} md={4} xs={12} className={classes.paper}>
                    <TaskList title={"To Do"}></TaskList>
                  </Grid>
                  <Grid item lg={4} md={4} xs={12} className={classes.paper}>
                    <TaskList title={"Doing"}></TaskList>
                  </Grid>
                  <Grid item lg={4} md={4} xs={12} className={classes.paper}>
                    <TaskList title={"Done"}></TaskList>
                  </Grid>
                </Grid>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
    );
};

export default App;
