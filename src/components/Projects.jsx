import React from "react";
import myProjects from "../projects.json";

export default function Projects() {

    const projects = myProjects.map(({ name, description, languages }) => {
        return (
            <div className="projects-box">
                <h2>{name}</h2>
                <p>{description}</p>
                {languages.map(item => {
                    return (
                        <span>{item}</span>
                    )})
                }
                <img src="."></img>
            </div>
        )
    })

    console.log(projects)

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-content">
                {projects}
            </div>
        </div>
    )
}