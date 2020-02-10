import {useMediaQuery} from "@material-ui/core";
import json2mq from "json2mq";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import React from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    divRootLarge: {
        margin: '8rem auto',
        width: '100vw'
    },
    divRoot: {
        margin: '4rem auto',
        width: '100vw'
    },
    root: {
        margin: '1rem auto',
        width: '100vw'
    },
    rootLarge: {
        margin: '2rem auto',
        width: '100vw'
    },
    introParagraphLarge: {
        marginTop: '1.5rem',
        fontSize: '1.5rem',
        textAlign: 'right'
    },
    introParagraph: {
        marginTop: '1rem',
        fontSize: '1rem',
        textAlign: 'center'

    },
    introHeadingLarge: {
        marginTop: '0',
        fontSize: '3.5rem',
    },
    introHeading: {
        marginTop: '0',
        fontSize: '2rem',
        textAlign: 'center'
    },
    divider: {
        width: '1px',
        height: '100%',
        border: '2px solid #4db6ac'
    },
    introParagraphLargeRight: {
        marginTop: '1.5rem',
        fontSize: '1.5rem',
        textAlign: 'left'
    },
    introParagraphRight: {
        marginTop: '1rem',
        fontSize: '1rem',
        textAlign: 'center'
    }
});

export default function SkillsBar() {
    const classes = useStyles();

    const matches = useMediaQuery(
        json2mq({
            maxWidth: 640,
        }),
    );

    return (
        <div id="skills" className={!matches ? classes.divRootLarge : classes.divRoot}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className={!matches ? classes.introHeadingLarge : classes.introHeading} variant="body2" bg="secondary" color="secondary" component="h1" fontSize="large">
                        Skills
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={!matches ? classes.rootLarge : classes.root}>
                <Grid item md={1} sm={0} xs={0}>
                    <Box>
                    </Box>
                </Grid>
                <Grid item md={5} sm={12} xs={12}>
                    <Box mx={6}>
                        <Typography gutterBottom={true} className={!matches ? classes.introParagraphLarge : classes.introParagraph} variant="body2" bg="secondary" color="secondary" component="div" fontSize="medium">
                            ASP.Net / C# <br/>
                            Python <br/>
                            Flask <br/>
                            NodeJS <br/>
                            Git <br/>
                            SQL Server / MySQL <br/>
                            {!matches ? <br/> : null}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={0} sm={0} xs={0}>
                    <Box className={!matches ? classes.divider : null}>
                    </Box>
                </Grid>
                <Grid item md={5} sm={12} xs={12}>
                    <Box mx={6}>
                        <Typography gutterBottom={true} className={!matches ? classes.introParagraphLargeRight : classes.introParagraphRight} variant="body2" bg="secondary" color="secondary" component="p" fontSize="medium">
                            Javascript / Typescript <br/>
                            HTML5 <br/>
                            React / Angular <br/>
                            Semantic-UI / Material-UI<br/>
                            Bootstrap / CSS / Sass <br/>
                            Heroku / Azure <br/>
                            {!matches ? <br/> : null}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={1} sm={0} xs={0}>
                    <Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
