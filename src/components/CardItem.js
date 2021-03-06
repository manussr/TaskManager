import React from "react";
import { CardContent, Card, CardActions, 
        IconButton, CardHeader, CardActionArea, Modal, DialogContent, Dialog } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CommentIcon from '@material-ui/icons/Comment';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import { makeStyles } from '@material-ui/core/styles';
import TaskInfo from "./TaskInfo";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '100%',
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
      content:{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "45ch"
      }
}));


const CardItem = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = React.useState(false)
    const item = props.item;
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleEdit = (event) => {
      console.log("Edit event");
      setEdit(true);
    }

    

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader  title={item.nombre} action={
                    <IconButton size="small" aria-label="edit" onClick={handleEdit}>
                        <EditIcon></EditIcon>
                    </IconButton>
            }></CardHeader>
          <CardActionArea onClick={handleOpen}>
            <CardContent>
              <p className={classes.content}>{item.descripcion}</p>
            </CardContent>
          </CardActionArea>
          <Modal 
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description" 
          >
            <DialogContent>
              <TaskInfo task={item.idHistoria}/>
            </DialogContent>
          </Modal>
          <CardActions>
            <IconButton size="small" aria-label="description">
                <FormatAlignLeftIcon/>
            </IconButton>
            <IconButton size="small" aria-label="comments">
                <CommentIcon/>
            </IconButton>
            <IconButton size="small" aria-label="attachments">
                <AttachFileIcon/>
            </IconButton>
            <IconButton size="small" aria-label="tasks">
                <LibraryAddCheckIcon/>
            </IconButton>
          </CardActions>
        </Card>
    );
}

export default CardItem;
