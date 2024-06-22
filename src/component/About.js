import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './css/about.css';

const About = () => {
    const [text] = useTypewriter({
        words: [
            'About me:',
            "Hi this is Chitresh Mourya, MCA grad'25 . I have a keen interest in MERN stack development and GraphQL APIs. One of my recent projects is an innovative news app powered by a custom API that aggregates news articles from various sources. Apart from this, I have developed several other applications, which you can explore from the navbar of this site.\n Feel free to connect with me by visiting my portfolio.",
            "About this App : ",
            "Indore Times is a news article reading app where users can access articles from different news websites. They can browse articles country-wise or category-wise such as sports, science, etc.",
            'Key Technologies:',
            ' React: Front-end development for a responsive and dynamic user experience.',
            ' Bootstrap: Styling the application to ensure a modern and clean design.',
            ' Third-party API (newsapi): Fetching news articles from various sources.',
        ],
        loop: true,
    });

    return (
        <div className='about-container'>
            <h1 id='title-name'>
                Indore Times &nbsp;
                {/* <span id='author'>-By CHITRESH</span> */}
            </h1>
            <h2 id="about">
                {text}
                <Cursor />
            </h2>
        </div>
    );
};

export default About;
