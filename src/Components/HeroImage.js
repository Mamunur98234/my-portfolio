import "./heroimagestyle.css"
import {Link} from "react-router-dom"

import React from 'react'
import IntroImage from "../assets/cover.png"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src=
            {IntroImage} alt="intoimag" />
        </div>
      <div className="content">
        <p>Hello This Is Mamunur</p>
        <h1>React Developer</h1>
        <div className="btn1">
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
