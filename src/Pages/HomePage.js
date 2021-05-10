import React from 'react';
import {faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> HAKEEM FAZLI</span>
                </h1>
                <p className="h-sub-text">
                I'm an Undergraduate following the BSC in Computer Science degree program. I'm a fast learner and a keen student when it comes to work possessing good team working skills and leadership skills. I've been involved in quite a few projects at IIT hoping to do many more projects and learn many new languages.
                </p>
                <div className="icons">
                    <a href ="https://www.facebook.com/hakeem.fazli" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://github.com/Hakeem10Fazli" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/hakeemfazli/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon yt"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
