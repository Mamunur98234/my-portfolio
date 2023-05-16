import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImage from "../Components/herosectionforproject/heroimage"
import Footer from "../Components/footer"
import ABOUT from "../Components/aboutcontent"

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="About" text="Im a MERN Stack Developer"/>
      <ABOUT/>
      <Footer/>
    </div>
  )
}

export default About
