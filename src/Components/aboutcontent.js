import "./aboutcontent.css"

import React from 'react'
import {Link} from "react-router-dom"
import IMAGE2 from "../assets/photo-1619410283995-43d9134e7656.jpeg"
import IMAGE from "../assets/react.png"


const aboutcontent = () => {
  return ( 
    <div className="about">
        <div className="left">
            <h1>WHO AM I?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, sit.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src={IMAGE2} className="img"
                    alt="about image" />
                </div>
                <div className="img-stack-bottom">
                    <img src={IMAGE} className="img"
                    alt="about image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default aboutcontent
