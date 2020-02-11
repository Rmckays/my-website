import React from 'react';
import MediaCard from "./PortfolioCard";
import Carousel from 'react-material-ui-carousel';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useMediaQuery} from "@material-ui/core";
import json2mq from "json2mq";
import {makeStyles} from "@material-ui/core/styles";


const portfolioProjects = [
    {
        title: 'Score Receiver',
        description: `Score Receiver allows users to find historical NFL game data between 
                      1980-2018. The back-end was built using with Python Flask and reads a 
                      remote CSV file with historical game data. D3.js was used for charting 
                      scores and Material-UI was used for styling. `,
        github: 'https://github.com/Rmckays/ScoreReceiver',
        website: 'https://score-receiver.herokuapp.com/',
        img: 'img/ScoreRec.JPG'
    },
    {
        title: 'Stock Maverick',
        description: `Stock Maverick is a fantasy stock trading app built 
                using the IEX API to pull real time stock prices. The back-end 
                was build using ASP.NET Core 2.2 and includes full Oauth both 
                on the IEX calls and the internal API. The front-end was built 
                using Typescript, React, and MobX and includes full JWT 
                authentication.`,
        github: 'https://github.com/Rmckays/StockMaverick',
        website: 'https://stockmaverick.azurewebsites.net/',
        img: 'img/StockMav.JPG'
    },
    {
        title: 'Tweet Tweet',
        description: 'Tweet Tweet is a fun little app I ' +
            'built using the Twitter API. The application gets ' +
            '5 random tweets based on either a user defined keyword or ' +
            'predefined Twitter users.  This technology was built using a ' +
            'Node back-end and React front-end and is completely responsive ' +
            'and was deployed via Heroku. Tweet Tweet is fully responsive.',
        github: 'https://github.com/Rmckays/twitter_node',
        website: 'https://tweet-tweet-node.herokuapp.com',
        img: 'img/TweetTweet.JPG'
    },
    {
        title: 'Comet Chat',
        description: `Comet Chat is a real time chat application inspired by 
                      the sunsets in my home state Arizona. The back-end was built
                      using ASP.NET Core 2.2 and SignalR. On the front-end React was
                      implemented with Typescript and Redux.` ,
        github: 'https://github.com/Rmckays/CometChat',
        website: 'https://github.com/Rmckays/CometChat',
        img: 'img/CometChat.JPG'
    }
];

const useStyles = makeStyles({
    introHeadingLarge: {
        marginTop: '0',
        marginBottom: '3rem',
        fontSize: '3.5rem',
    },
    introHeading: {
        marginTop: '0',
        fontSize: '2rem',
        marginBottom: '1rem',
        textAlign: 'center'
    },
});

const carouselCards = portfolioProjects.map((project, index) => {
    return <MediaCard key={index} img={project.img} projTitle={project.title} projDescription={project.description} github={project.github} website={project.website}/>
});

const PortfolioCarousel = () => {
    const classes = useStyles();

    const matches = useMediaQuery(
        json2mq({
            maxWidth: 768,
        }),
    );

    return (
        <div id="portfolio" >
            <Grid container>
                <Grid item xs={12}>
                    <Typography className={!matches ? classes.introHeadingLarge : classes.introHeading} variant="body2" bg="secondary" color="secondary" component="h1" fontSize="large">
                        Portfolio
                    </Typography>
                </Grid>
            </Grid>
            <Carousel >
                {carouselCards}
            </Carousel>
        </div>
    )
};

export default PortfolioCarousel;
