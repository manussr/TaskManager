import React from "react";
import {Card, CardHeader, Grid} from "@material-ui/core";
import {List, ListItem} from "@material-ui/core";
import {Button, TextField, Typography, Avatar} from "@material-ui/core"
import { CardContent } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LabelIcon from '@material-ui/icons/Label';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import CommentIcon from '@material-ui/icons/Comment';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '75%',
        position: 'fixed',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      actions:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        '& button':{
            justifyContent:"flex-start",
            marginTop: theme.spacing(0.5),
            marginBottom: theme.spacing(0.5),
        }
      },
      button: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
      row:{
        marginBlockEnd: theme.spacing(3),
        '& > *':{
          display: 'flex',
          alignSelf: "center",
          marginBottom: theme.spacing(2)
        }
      }, 
      avatar: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        fontSize: theme.spacing(2)
      },
      comment: {
        display: "flex",
        alignSelf: "center",
        justifyContent: "center"
      }
}));

const TaskInfo = React.forwardRef((props, ref)=>{
    {
        const classes = useStyles();
        const [task, setTask] = React.useState([]);
        const [isLoaded, setIsLoaded] = React.useState(false);
        const [error, setError] = React.useState(null);
        const id = props.task;
        const Actions = () =>{
            return (
              <React.Fragment>
                  <Grid item xs={12} sm={12} md={12}>
                    <div className={classes.actions}>
                        <Typography>Sugerencias</Typography>
                        <Button variant="contained" startIcon={<PersonIcon/>}>Unirse</Button>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <div className={classes.actions}>
                        <Typography>Añadir a la tarjeta</Typography>
                        <Button variant="contained" startIcon={<PersonIcon/>}>Unirse</Button>
                        <Button variant="contained" startIcon={<LabelIcon/>}>Etiquetas</Button>
                        <Button variant="contained" startIcon={<LibraryAddCheckIcon/>}>Checklist</Button>
                        <Button variant="contained" startIcon={<AttachFileIcon/>}>Adjunto</Button>
                    </div>
                  </Grid>
    
                  <Grid item xs={12} sm={12} md={12}>
                    <div className={classes.actions}>
                        <Typography>Acciones</Typography>
                        <Button variant="contained" startIcon={<ArrowForwardIcon/>}>Mover</Button>
                        <Button variant="contained" startIcon={<FileCopyIcon/>}>Copiar</Button>
                    </div>
                  </Grid>
              </React.Fragment>
            );
        };
        
        const Forms = () => {
            return (
              <React.Fragment>
                <Grid item xs={12} sm={12} md={12} className={classes.row}>
                  <div>
                    <FormatAlignLeftIcon></FormatAlignLeftIcon>
                    <Typography variant="subtitle1">Descripcion</Typography>
                  </div>
                  <div>
                    <TextField label="Descripcion" fullWidth value={task.descripcion}></TextField>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} className={classes.row}>
                  <div>
                    <CommentIcon/>
                    <Typography variant="subtitle1">Actividad</Typography>
                  </div>
                  <div className={classes.comment}>
                    <Avatar className={classes.avatar}>ES</Avatar>
                    <TextField fullWidth></TextField>
                  </div>
                </Grid>
              </React.Fragment>
            );
        };
    
        React.useEffect(() => {
          axios.get(`https://proyecto-equipo7-bedu.herokuapp.com/v1/historias/${id}`)
          .then(res=>{
              console.log(res);
              console.log(id);
              const result = res.data;
              setIsLoaded(true);
              setTask(result);
          })
          .catch(error=>{
              setIsLoaded(true);
              setError(error);
          })
          }, [id])
        
        if(error){
          return <p>Hubo un error al cargar los datos</p>
        }else if(!isLoaded){
          return (
            <Card>
              <CardContent className={classes.root}>
                <p>Loading...</p>
              </CardContent>
            </Card>
          );
        }else{
          return (
            <Card className={classes.root} ref={ref}>
              <CardHeader title={task.nombre}>
              </CardHeader>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item md={8} lg={8} xl={8} sm={12} xs={12}>
                    <Forms></Forms>
                  </Grid>
                  <Grid item md={4} lg={4} xl={4} sm={12} xs={12}>
                    <Actions></Actions>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          );
        }
    };
})

export default TaskInfo;