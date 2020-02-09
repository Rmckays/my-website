import React from 'react';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LanguageIcon from '@material-ui/icons/Language';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import {ThemeProvider} from "@material-ui/styles";
import teal from '@material-ui/core/colors/teal';

const myTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#333',
            hover: '#fff',
        },
        secondary: {
            main: teal[500],
        },
    },
});

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        margin: '5rem',
        display: 'inline-block'
    },
    media: {
        height: 300,
        width: 400,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea href={props.website}>
                <CardMedia
                    className={classes.media}
                    image={props.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.projTitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.projDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ThemeProvider theme={myTheme}>
                    <a color="secondary" href={props.website}>
                        <LanguageIcon color="secondary"  fontSize="large"/>
                    </a>
                    <a color="secondary" href={props.github}>
                        <GitHubIcon color="secondary" fontSize="large"/>
                    </a>
                </ThemeProvider>
            </CardActions>
        </Card>
    );
}
