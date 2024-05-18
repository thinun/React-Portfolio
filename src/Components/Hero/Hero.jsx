import React from 'react';
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faFile} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";


const Hero = () => {
    return (
        <div className="hero" id={"home"}>
            <img src={profile_img} alt={"Profile Image"}/>
            <h1><span>I'm Thinun Tharushika,</span> Full-Stack Developer</h1>
            <p>From the assembly line to the code line, I'm driven by innovation. Eagerly seeking an internship to
                infuse creativity, contribute fresh perspectives, and ignite groundbreaking projects.</p>
            <div className={"hero-buttons"}>
                <a className={"hero-btn-links"} href={"https://github.com/thinun"}><i><FontAwesomeIcon icon={faGithub}
                                                                                                       className="icon"/></i></a>
                <a className={"hero-btn-links"} href={""}><i><FontAwesomeIcon icon={faFile} className="icon"/></i></a>
                <a className={"hero-btn-links"} href={"https://www.linkedin.com/in/thinun-tharushika/"}> <i><FontAwesomeIcon icon={faLinkedin} className="icon"/></i></a>
            </div>
        </div>
    );
};

export default Hero;