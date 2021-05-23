import React from 'react'
import { Link } from 'react-router-dom';
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import DownloadLink from "react-download-link";



function AboutPage() {

    
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />

           


         
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Python'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Java'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'React Js'} progress={'55%'} width={'55%'} />
                <SkillsSection skill={'Web Design'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'Adobe Photoshop'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Adobe Premiere Pro'} progress={'60%'} width={'60%'} />


            </div>



          

        </div>
    )
}

export default AboutPage;
