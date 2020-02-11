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
    footer: {
        marginTop: '3rem',
        fontSize: '2rem',
        padding: '1rem',
        backgroundColor: teal[300],
        color: '#333'
    },
    introTitleLarge: {
        marginTop: '0',
        fontSize: '2.2rem',
        color: orange[300],
    },
    introTitle: {
        marginTop: '0',
        fontSize: '2rem',
        color: orange[300],
    },
    link: {
        textDecoration: 'none',
        fontSize: '1.5rem',
        color: teal[300],
    },
});

const currentDate = new Date().getFullYear();

export default function Footer() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid xs={12}>
                <Box className={classes.footer}>
                    <Typography align="center" component="p">Rustyn Simmons &copy;{currentDate}</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}



