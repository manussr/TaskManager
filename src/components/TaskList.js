import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListSubheader, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import CardItem from './CardItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


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
    }
  }));

const TaskList = (props) => {
    const classes = useStyles();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [tasks, setTasks] = React.useState([]);
    React.useEffect(() => {
        setTasks([
            {
                id: 1,
                title: "Task 1"
            },
            {
                id: 2,
                title: "Task 2"
            },
            {
                id: 3,
                title: "Task 3"
            },
            {
                id: 4,
                title: "Task 4"
            },
            {
                id: 5,
                title: "Task 5"
            }
        ]);
    }, [])
    return(
        <List className={classes.list} subheader={
            <ListSubheader component="div" id="list-subheader">
                {props.title}
                <ListItemSecondaryAction>
                    <IconButton>
                        <MoreHorizIcon></MoreHorizIcon>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListSubheader>}>
            {tasks.map((task)=><ListItem key={task.id} className="listItem"><CardItem title={task.title}/></ListItem>)}
        </List>
    );
};

export default TaskList;
