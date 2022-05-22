import React from "react";
import eu from '../imgs/eu.jpg';

export default function About(){
    return (
        <div className="about-container">
            <img src={eu}></img>
            <h1>Hi, i'm <label style={{color: '#61dbfb'}}>João Gabriel.</label></h1>
            <h2>Front End Developer</h2>
            <p>danwdlaknlkwanfklanfklanfaklfnaklnwlkanfkawfaçlfn</p>
            <div className="about-social">
                <a>CV</a>
                <a>Github</a>
                <a>LinkedIn</a>
            </div>
        </div>
    )
}