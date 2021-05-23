import React from 'react';
import about from '../img/about.jpg';
import { Link } from 'react-router-dom';


function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> HAKEEM </span></h4>
                <p className="about-text">
                    Below are a few details about me, download my resume to know me more.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Languages</p>
                        <p>Occupation</p>

                       
                    </div>
                    <div className="right-section">
                        <p>: Hakeem Fazli</p>
                        <p>: 21</p>
                        <p>: English, Sinhala, Tamil</p>
                        <p>: Undergraduate - (BSC) Computer Science at IIT</p>
                        

                    </div>
                </div>

                

                <form method="get" action="/file/Hakeem Resume.pdf">
                <button  className="btn" >Download!</button>
                </form>
                                    
            </div>
        </div>
    )
}

export default ImageSection;
