import "./footerstyle.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem" }}/>
                    <p>Rupnagar Abashiq, Mirpur</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem" }}/>+8801798214069</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem" }}/>rmamunur@gmail.com</h4>
                </div>
                
            </div>
            <div className="right">
                <h4>About The Developer</h4>
                <p>This is Mamunur Rashid a personal Developer. I provide SEO services and MERN stack web development</p>
                <div className="social">
                    <FaFacebook size={30} 
                    style={{color: "#fff", 
                    marginRight: "1rem" }}/>
                    <FaTwitter size={30} 
                    style={{color: "#fff", 
                    marginRight: "1rem" }}/>
                    <FaLinkedin size={30} 
                    style={{color: "#fff", 
                    marginRight: "1rem" }}/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default footer
