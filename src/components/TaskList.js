import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListSubheader, ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core';
import {Menu, MenuItem} from "@material-ui/core";
import CardItem from './CardItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: 'grey'
    },
    list:{
      backgroundColor: '#d3d3d3'
    },
    listItem: {
        width: '200px'
    },
    title:{
        fontWeight: "bold"
    }
  }));

const TaskList = (props) => {
    const classes = useStyles();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [tasks, setTasks] = React.useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    React.useEffect(() => {
        axios.get("https://proyecto-equipo7-bedu.herokuapp.com/v1/historias")
        .then(res=>{
            const result = res.data.filter(x=> x.estado===props.estado);
            setIsLoaded(true);
            setTasks(result);
        })
        .catch(error=>{
            setIsLoaded(true);
            setError(error);
        })

    }, [props.estado])

    if(error){
        return <p>{error.message}</p>
    }else if(!isLoaded){
        return <div>Loading...</div>
    }else{
        return(
            <List className={classes.list} subheader={
                <ListSubheader component="div" id="list-subheader">
                    <Typography className={classes.title} variant="h6" align="left">{props.title}</Typography>
                    <ListItemSecondaryAction>
                        <IconButton onClick={handleClickMenu}>
                            <MoreHorizIcon></MoreHorizIcon>
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu} 
                        >
                            <MenuItem onClick={handleCloseMenu}>Añadir tarjeta</MenuItem>
                            <MenuItem onClick={handleCloseMenu}>Ordenar</MenuItem>
                            <MenuItem onClick={handleCloseMenu}>Copiar</MenuItem>
                        </Menu>
                    </ListItemSecondaryAction>
                </ListSubheader>}>
                {tasks.map((task)=><ListItem key={task.idHistoria} className="listItem"><CardItem item={task}/></ListItem>)}
            </List>
        );
    }
    /*
    return(
        <List className={classes.list} subheader={
            <ListSubheader component="div" id="list-subheader">
                <Typography className={classes.title} variant="h6" align="left">{props.title}</Typography>
                <ListItemSecondaryAction>
                    <IconButton onClick={handleClickMenu}>
                        <MoreHorizIcon></MoreHorizIcon>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleCloseMenu} 
                    >
                        <MenuItem onClick={handleCloseMenu}>Añadir tarjeta</MenuItem>
                        <MenuItem onClick={handleCloseMenu}>Ordenar</MenuItem>
                        <MenuItem onClick={handleCloseMenu}>Copiar</MenuItem>
                    </Menu>
                </ListItemSecondaryAction>
            </ListSubheader>}>
            {tasks.map((task)=><ListItem key={task.id} className="listItem"><CardItem title={task.title}/></ListItem>)}
        </List>
    );
    */
};

export default TaskList;
