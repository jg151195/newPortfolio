import React from "react";
import eu from '../imgs/eu.jpg';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import resume from "../assets/resume.pdf"

export default function About({darkmode}){

    const styles = {
        color: darkmode === true ? 'white': '#212121'
    }

    return (
        <div className="about-container">
            <img src={eu}></img>
            <h1>Hi, i'm <label style={{color: '#61dbfb'}}>João Gabriel.</label></h1>
            <h2>Front End Developer</h2>
            <p>Welcome to my portfolio, here you can learn more about me. I've been studying programming for a few months, mostly Javascript,
                Node.js and now React.js. This whole website was made using React.js. I'm looking forward to have a first opportunity as a Developer.
                Hope you like it !
            </p>
            <div className="about-social">
                <a   id="cv" style={styles} href={resume} target = "_blank" download="resume.pdf">Resume</a>
                <a style={styles} href="https://github.com/jg151195"><FaGithub/></a>
                <a style={styles} href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-ara%C3%BAjo-rodrigues-856a151b9/"><FaLinkedin/></a>
            </div>
        </div>
    )
}