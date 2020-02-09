import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LanguageIcon from '@material-ui/icons/Language';
import json2mq from 'json2mq';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import {useMediaQuery} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        minWidth: 200,
        minHeight: 150,
        maxHeight: 375,
        maxWidth: 500,
        margin: '0 2rem',
        display: 'inline-block'
    },
    media: {
        minWidth: 200,
        minHeight: 150,
        maxHeight: 375,
        maxWidth: 500,
    },
    largeScreen: {
        width: 400,
        height: 225,
    }
});

export default function MediaCard(props) {
    const classes = useStyles();

    const matches = useMediaQuery(
        json2mq({
            maxWidth: 375,
        }),
    );

    return (
        <Card className={classes.root}>
            <CardActionArea href={props.github}>
                <CardMedia
                    className={!matches? classes.largeScreen : classes.media}
                    image={props.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography color="primary" gutterBottom variant="h5" component="h2">
                        {props.projTitle}
                    </Typography>
                    <Typography variant="body2" color="primary" component="p">
                        {props.projDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a href={props.website}>
                    <LanguageIcon color="primary"  fontSize="large"/>
                </a>
                <a href={props.github}>
                    <GitHubIcon color="primary" fontSize="large"/>
                </a>
            </CardActions>
        </Card>
    );
}
