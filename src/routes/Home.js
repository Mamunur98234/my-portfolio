import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImage from "../Components/HeroImage"
import Footer from "../Components/footer"
import Work from "../Components/work"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
