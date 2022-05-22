import React from "react";

export default function NavBar() {

    return (
        <div className="navbar-container">
            <label style={{fontWeight: 'bold', color:'#61dbfb', fontSize:'1.5em'}}>JG.</label>
            <div className="navbar-labels">
                <span>projects</span>
                <span>skills</span>
                <span>projects</span>
                <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider"></span>
                </label>
            </div>
        </div>
    )
}