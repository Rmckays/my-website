import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {teal} from "@material-ui/core/colors";

const useStyles = makeStyles({
    root: {
        margin: '5rem auto 0 auto',
        width: '100vw'
    },
    avatar: {
        backgroundColor: teal[300],
        height: '30vh',
        width: '30vh',
        borderRadius: '50%',
        margin: 'auto',
    },
});

export default function Introduction() {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item md={6} sm={12} xs={12}>
                <Box className={classes.avatar} p={6}>
                </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <Box p={6}>
                    <Typography variant="body2" bg="secondary" color="secondary" component="p" fontSize="large">
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
