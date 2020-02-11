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
        background: "url('img/backgroundImg.png') center center/cover",
    },
    rootLarge: {
        margin: '4rem auto',
        height: '52vh',
        width: '100vw',
        background: "url('img/backgroundImg.png') center center/cover",
    },
    avatar: {
        background: "url('img/logo.png') center center/cover",
        height: '30vh',
        width: '30vh',
        margin: 'auto',
    },
    avatarLarge: {
        background: "url('img/logo.png') center center/cover",
        height: '30vh',
        width: '30vh',
        margin: 'auto',
        marginTop: '5rem'
    },
    introParagraphLarge: {
        marginTop: '1rem',
        fontSize: '1.5rem',
    },
    introParagraph: {
        marginTop: '1rem',
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
    introTitleLarge: {
        marginTop: '0',
        fontSize: '2.2rem',
        color: orange[300],
    },
    introTitle: {
        marginTop: '0',
        fontSize: '1.5rem',
        color: orange[300],
    },
    link: {
        textDecoration: 'none',
        fontSize: '1.5rem',
        color: orange[300],
    },
});

export default function Introduction() {
    const classes = useStyles();

    const matches = useMediaQuery(
        json2mq({
            maxWidth: 1080,
        }),
    );

    return (
        <Grid container spacing={2} className={!matches ? classes.rootLarge : classes.root}>
            <Grid item md={1} sm={0} xs={0}>
                <Box>
                </Box>
            </Grid>
            <Grid item md={5} sm={12} xs={12}>
                <Box className={!matches ? classes.avatarLarge : classes.avatar} p={6}>
                </Box>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                <Box mx={6}>
                    <Typography className={!matches ? classes.introHeadingLarge : classes.introHeading} variant="body2" bg="secondary" color="secondary" component="h1" fontSize="large">
                        Rustyn Simmons
                    </Typography>
                    <Typography className={!matches ? classes.introTitleLarge : classes.introTitle} variant="body2" bg="secondary" color="secondary" component="h1" fontSize="large">
                        - Full Stack Developer -
                    </Typography>
                    <Typography align="center" className={!matches ? classes.introParagraphLarge : classes.introParagraph} variant="body2" bg="secondary" color="secondary" component="p" fontSize="medium">
                        Ever since I was a child I have been fascinated with computers. After graduating from college
                        I spent the majority of my career on the sales side of software. This provided me a stable career
                        but I have always been a creative person. In 2018 I decided to transition into the programming
                        side of the business. I have been freelancing ever since.
                    </Typography>
                    <br/>
                    <a  className={classes.link} href='https://github.com/Rmckays'>
                        See my Github: &nbsp;
                        <GitHubIcon color="accent" fontSize="medium"/>
                    </a>
                </Box>
            </Grid>
            <Grid item md={2} sm={0} xs={0}>
                <Box>
                </Box>
            </Grid>
        </Grid>
    )
}
