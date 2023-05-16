import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/footer"
import HeroImage from "../Components/herosectionforproject/heroimage"
import PrizeCard from "../Components/projects price/pricisingCard";
import Work from "../Components/work"

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="PROJECTS" text="Some of 
      my most recent work"/>
      <Work/>
      <PrizeCard/>
      <Footer/>
    </div>
  )
}

export default Project
