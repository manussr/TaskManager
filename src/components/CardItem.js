import { CardContent, Card, CardActions, 
        IconButton, CardHeader, Typography, Button} from "@material-ui/core";

import EditIcon from '@material-ui/icons/Edit';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CommentIcon from '@material-ui/icons/Comment';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';


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
}));


const CardItem = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader title={props.title} action={
                    <IconButton size="small" aria-label="edit">
                        <EditIcon></EditIcon>
                    </IconButton>
            }></CardHeader>
          <CardContent>
            
          </CardContent>
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
