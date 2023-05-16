import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImage from '../Components/herosectionforproject/heroimage'
import Footer from "../Components/footer"
import FORM from "../Components/form"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="CONTACT" text="Lets have a chat"/>
      <FORM/>
      <Footer/>
    </div>
  )
}

export default Contact
