import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {teal} from "@material-ui/core/colors";
import {orange} from "@material-ui/core/colors";
import {useMediaQuery} from "@material-ui/core";
import json2mq from "json2mq";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
    root: {
        margin: '3.5rem auto 4rem auto',
        padding: '2rem auto',
        width: '100vw',
    },
    rootLarge: {
        margin: '4rem auto',
        width: '100vw',
    },
    avatar: {
        background: "url('img/Profphoto.jpg') center center/cover",
        height: '30vh',
        width: '30vh',
        borderRadius: '50%',
        margin: 'auto',
    },
    avatarLarge: {
        background: "url('img/Profphoto.jpg') center center/cover",
        borderRadius: '50%',
        height: '30vh',
        width: '30vh',
        margin: 'auto',
        marginTop: '5rem'
    },
    introParagraphLarge: {
        marginTop: '6rem',
        fontSize: '1.5rem',
    },
    introParagraph: {
        marginTop: '3rem',
        fontSize: '1.1rem',
    },
    introHeadingLarge: {
        marginTop: '4.5rem',
        fontSize: '3.5rem',
    },
    introHeading: {
        marginTop: '0',
        fontSize: '2rem',
    },
    link: {
        textDecoration: 'none',
        fontSize: '1.5rem',
        color: orange[300],
    },
});

export default function About() {
    const classes = useStyles();

    const matches = useMediaQuery(
        json2mq({
            maxWidth: 768,
        }),
    );

    return (
        <Grid id="about" container spacing={2} className={!matches ? classes.rootLarge : classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className={!matches ? classes.introHeadingLarge : classes.introHeading} variant="body2" bg="secondary" color="secondary" component="h1" fontSize="large">
                        About
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg={1} sm={0} xs={0}>
                <Box>
                </Box>
            </Grid>
            <Grid item lg={5} md={6} sm={12} xs={12}>
                <Box className={!matches ? classes.avatarLarge : classes.avatar} p={6}>
                </Box>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
                <Box >
                    <Typography align="center" className={!matches ? classes.introParagraphLarge : classes.introParagraph} variant="body2" bg="secondary" color="secondary" component="p" fontSize="medium">
                        I grew up in Arizona and have spent most of my life there with brief stints in Seattle and San Francisco. Currently I live in Phoenix with my beautiful wife and our spoiled Cavalier King Charles, Anry.
                        I am extremely passionate about learning new things.  That was part of the motivation for becoming a developer. Creativity plays a huge role in my life and I spend a good deal of my free time painting,
                        drawing, and creating 3D digital art. I am happiest when I am working on building a new project whether that be a new application or a new piece of art. A few of my other hobbies include Game Development
                        with Unity and C#, as well as, playing the piano and digital orchestration. If you are interested in checking out some of my projects take a look at my Github below.
                    </Typography>
                    <br/>
                    <a  className={classes.link} href='https://github.com/Rmckays'>
                        Checkout my Github: &nbsp;
                        <GitHubIcon color="accent" fontSize="medium"/>
                    </a>
                </Box>
            </Grid>
            <Grid id="skills" item lg={1} sm={0} xs={0}>
                <Box>
                </Box>
            </Grid>
        </Grid>
    )
}
