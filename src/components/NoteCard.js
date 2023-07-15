import React from "react";
import { Avatar, Card, IconButton, Typography, makeStyles } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { DeleteOutline, DeleteOutlined } from "@material-ui/icons";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
import Masonry from "react-masonry-css";

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if (note.category == 'work') {
                return yellow[700]
            }
            if (note.category == 'money') {
                return green[500]
            }
            if (note.category == 'todos') {
                return pink[500]
            }
            return blue[500]
        }
    }
})

export default function NoteCard({ note, handleDelete }) {
    const classes = useStyles(note)
    return (
        <div>
            <Card elevation={2} >
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}