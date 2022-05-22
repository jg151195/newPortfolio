import React from "react";

export default function NavBar() {

    return (
        <div className="navbar-container">
            <label style={{fontWeight: 'bold'}}>JG.</label>
            <div className="navbar-labels">
                <label>projects</label>
                <label>skills</label>
                <label>projects</label>
                <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider"></span>
                </label>
            </div>
        </div>
    )
}