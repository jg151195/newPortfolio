import React from "react";
import myProjects from "../projects.js";
import {FaGithub} from 'react-icons/fa';

export default function Projects({darkMode}) {

    const projects = myProjects.map(({ name, description, languages,img,link },index) => {

        return (
            <div key={index} className="projects-box">
                <h2>{name}</h2>
                <img src={img}></img>
                <p>{description}</p>
                <div className="projects-languages">
                {languages.map((item,index) => {
                    return (
                        <span key={index}>{item} </span>
                    )})
                }
                </div>
                <a style={{color:darkMode === true ? '#e8e8e8' : '#212121', marginTop:"2em",  fontSize:'2em'}} href={link}><FaGithub/></a>
            </div>
        )
    })

    return (
        <div id={'projects'}  className="projects-container">
            <h1>Projects</h1>
            <div  className="projects-content">
                {projects}
            </div>
        </div>
    )
}