import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import TaskList from './TaskList';


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
    return (
        <div>
            <Header/>
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
        </div>
    );
};

export default App;