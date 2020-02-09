import React from 'react';
import MediaCard from "./PortfolioCard";
import Carousel from 'react-material-ui-carousel'

const portfolioProjects = [
    {
        title: 'Score Receiver',
        description: 'An App built using Python Flask and React.',
        github: 'https://github.com/Rmckays/ScoreReceiver',
        website: 'https://score-receiver.herokuapp.com/',
        img: 'img/ScoreRec.JPG'
    },
    {
        title: 'Stock Maverick',
        description: 'An App built using ASP.NET Core, Typescript, and React.',
        github: 'https://github.com/Rmckays/StockMaverick',
        website: 'https://stockmaverick.azurewebsites.net/',
        img: 'img/StockMav.JPG'
    },
    {
        title: 'Tweet Tweet',
        description: 'An App built using Node.js, React, and the Twitter API',
        github: 'https://github.com/Rmckays/twitter_node',
        website: 'https://tweet-tweet-node.herokuapp.com',
        img: 'img/TweetTweet.JPG'
    }
];

const carouselCards = portfolioProjects.map((project, index) => {
    return <MediaCard key={index} img={project.img} projTitle={project.title} projDescription={project.description} github={project.github} website={project.website}/>
});

const PortfolioCarousel = () => {
    return (
        <Carousel animation="slide">
            {carouselCards}
        </Carousel>
    )
};

export default PortfolioCarousel;
