import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {teal} from "@material-ui/core/colors";
import {useMediaQuery} from "@material-ui/core";
import json2mq from "json2mq";

const useStyles = makeStyles({
    root: {
        margin: '5rem auto',
        width: '100vw'
    },
    rootLarge: {
        margin: '10rem auto',
        width: '100vw'
    },
    avatar: {
        backgroundColor: teal[300],
        height: '30vh',
        width: '30vh',
        borderRadius: '50%',
        margin: 'auto',
    },
    introParagraphLarge: {
        marginTop: '1.5rem',
        fontSize: '1.5rem',
    },
    introParagraph: {
        marginTop: '1rem',
        fontSize: '1rem',
    },
    introHeadingLarge: {
        marginTop: '0',
        fontSize: '3.5rem',
    },
    introHeading: {
        marginTop: '0',
        fontSize: '2rem',
    },
    introTitleLarge: {
        marginTop: '0',
        fontSize: '2.2rem',
    },
    introTitle: {
        marginTop: '0',
        fontSize: '1.5rem',
    }
});

export default function Introduction() {
    const classes = useStyles();

    const matches = useMediaQuery(
        json2mq({
            maxWidth: 640,
        }),
    );

    return (
        <Grid container spacing={2} className={!matches ? classes.rootLarge : classes.root}>
            <Grid item md={6} sm={12} xs={12}>
                <Box className={classes.avatar} p={6}>
                </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <Box p={6}>
                    <Typography className={!matches ? classes.introHeadingLarge : classes.introHeading} variant="body2" bg="secondary" color="secondary" component="h1" fontSize="large">
                        Rustyn Simmons
                    </Typography>
                    <Typography className={!matches ? classes.introTitleLarge : classes.introTitle} variant="body2" bg="secondary" color="secondary" component="h1" fontSize="large">
                        - Full Stack Developer -
                    </Typography>
                    <Typography className={!matches ? classes.introParagraphLarge : classes.introParagraph} variant="body2" bg="secondary" color="secondary" component="p" fontSize="medium">
                        Ever since I was a child I have been fascinated with computers. After graduating from college
                        I spent the majority of my career on the sales side of software. This provided me a stable career
                        but I have always been a creative person and in 2018 I decided to transition into the programming
                        side of the business.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
