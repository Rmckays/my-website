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
            'and was deployed via Heroku.',
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
        <div id="portfolio">
            <Carousel animation="slide">
                {carouselCards}
            </Carousel>
        </div>
    )
};

export default PortfolioCarousel;
