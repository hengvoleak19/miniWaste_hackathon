import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from "../Section/HeroSection/index"
import ZeroWaste from "../Section/ZeroWaste/index"
import Undraw from "../Section/Undraw1/Index"
import AboutUS from "../Section/AboutUsSection/AboutUs"

const Home = () => {
    
    return (
        <div>
            <Header/>
            <HeroSection/>
            <ZeroWaste/>
            <Undraw/>
            <AboutUS/>
            <Footer></Footer>
        </div>
    )
}

export default Home
