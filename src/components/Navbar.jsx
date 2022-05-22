import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { ScrollLink } from 'react-scroll'

export default function NavBar({ setDarkMode, darkMode }) {

    function clickDarkMode() {
        setDarkMode(prev => !prev)
    }

    function goTo(id) {
        const anchor = document.querySelector(id);
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className="navbar-container">
            <label id="myname" style={{ fontWeight: 'bold', color: '#61dbfb', fontSize: '1.5em' }}>JG.</label>
            <div className="navbar-labels">
                <span onClick={()=>goTo('#projects')}>projects</span>
                <span onClick={()=>goTo('#skills')}>skills</span>
                <span onClick={()=>goTo('#formations')}>education</span>
                <span onClick={()=>goTo('#contact')}>contact</span>
                <span onClick={clickDarkMode}>{darkMode === true ? <BsFillSunFill /> : <BsFillMoonFill />}</span>
            </div>
        </div>
    )
}