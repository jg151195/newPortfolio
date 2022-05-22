import React from "react";
import {FaHtml5,FaCss3,FaReact} from 'react-icons/fa';
import {IoLogoJavascript}from 'react-icons/io'
import {DiNodejs} from 'react-icons/di'
import {SiMongodb} from 'react-icons/si'


export default function Skills() {


    return (
        <div  className="skills-container">
            <h1>Skills</h1>
            <div id={'skills'} className="skills-content">
                <span><FaHtml5/></span>
                <span><FaCss3/></span>
                <span><IoLogoJavascript/></span>
                <span><DiNodejs/></span>
                <span><FaReact/></span>
                <span><SiMongodb/></span>
            </div>
        </div>

    )
}