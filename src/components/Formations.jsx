import React from "react";
import formations from "../formations"
import {FiExternalLink} from "react-icons/fi"



export default function ({darkMode}) {

    const formationsList = formations.map((item, index) => {
        return (
            <div className="formations-box" key={index}>
                <img src={item.schoolImg}></img>
                <h2>{item.course}</h2>
                <h3>{item.type}</h3>
                <span>Start: {item.start}</span>
                <span>End: {item.end}</span>
                <a href={item.link}><FiExternalLink/></a>
            </div>
        )
    })

    return (
        <div id={'formations'} className="formations-container">
            <h1>Education</h1>
            <div className="formations-content">
                {formationsList}
            </div>
        </div>
    )
}