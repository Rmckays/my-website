import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core";
import json2mq from "json2mq";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {orange} from "@material-ui/core/colors";

const useStyles = makeStyles({
    root: {
        marginTop: '3rem',
    },
    resumeBtn: {
        backgroundColor: orange[300],
    },
});

const ResumeButton = () => {
    const classes = useStyles();

    const matches = useMediaQuery(
        json2mq({
            maxWidth: 640,
        }),
    );

    return (
        <Grid id="resume" container className={classes.root}>
            <Grid item xs={12}>
                <Button href="resume/RustynSimmonsResume.pdf" variant="contained" className={classes.resumeBtn}>
                    View My Resume
                </Button>
            </Grid>
        </Grid>
    );
};

export default ResumeButton;
