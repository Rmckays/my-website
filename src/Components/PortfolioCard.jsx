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
import {orange} from "@material-ui/core/colors";


const useStyles = makeStyles({
    root: {
        minWidth: 200,
        minHeight: 150,
        maxHeight: 700,
        maxWidth: 900,
        margin: '0 2rem',
        display: 'inline-block'
    },
    media: {
        minWidth: 200,
        minHeight: 150,
        maxHeight: 450,
        maxWidth: 900,
    },
    largeScreen: {
        width: 900,
        height: 450,
    },
    cardTitle: {
        fontSize: '2rem',
    },
    cardText: {
        fontSize: '1.1rem',
    },
    icons: {
        color: orange[300],
    },
    links: {
        textDecoration: 'none',
        color: orange[300],
        fontSize: '1.2rem',
        verticalAlign: 'top',
        paddingBottom: '.5rem',
        paddingLeft: '.5rem'
    }
});

export default function MediaCard(props) {
    const classes = useStyles();

    const matches = useMediaQuery(
        json2mq({
            maxWidth: 416,
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
                    <Typography className={classes.cardTitle} color="primary" gutterBottom variant="h5" component="h2">
                        {props.projTitle}
                    </Typography>
                    <Typography className={classes.cardText} variant="body2" color="primary" component="p">
                        {props.projDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a className={classes.links} href={props.website}>
                    Try It!
                    <LanguageIcon className={classes.icons} fontSize="medium"/>
                </a>
                &nbsp; &nbsp;
                <a className={classes.links} href={props.github}>
                    Github:
                    <GitHubIcon className={classes.icons} fontSize="medium"/>
                </a>
            </CardActions>
        </Card>
    );
}
