import React from "react";
import { AiOutlineMail } from "react-icons/ai"
import { BsWhatsapp, BsInstagram } from "react-icons/bs"
import { FaLinkedin } from 'react-icons/fa'

export default function Contact({darkMode}) {

    const styles = {
        color: darkMode === true ? '#e8e8e8': '#212121'
    }

    return (
        <div id={'contact'} className="contact-container">
            <h1>Contact</h1>
            <div className="contact-content">
                <div className="contact-email">
                    <h2><AiOutlineMail /></h2>
                    <span>joaog151195@gmail.com</span>
                </div>
                <a style={styles} href="https://api.whatsapp.com/send?phone=5562983035041&text=Hi%20There!" ><BsWhatsapp /></a>
                <a style={styles} href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-ara%C3%BAjo-rodrigues-856a151b9/"><FaLinkedin /></a>
                <a style={styles} href="https://www.instagram.com/joaogabriel1511/"><BsInstagram /></a>
            </div>

        </div>
    )
}