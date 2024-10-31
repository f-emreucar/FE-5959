// import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer(){
  return (
    <div className="footerBox">
        <p>Copyright © 2024</p>
        <div className="footerİcons">
        <FaInstagram className="footerİconsHover"/>
        <FaGithub className="footerİconsHover"/>
        <FaLinkedin className="footerİconsHover"/>
        </div>
    </div>
  )
}

export default Footer;