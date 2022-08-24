import React from 'react'
import BodySection from '../../Containers/MainBodySection/BodySection';
import Carousel from '../../Containers/Carousel/Carousel';
import Navbar from '../../Containers/Navbar/Navbar';
import AdNavSection from '../../Containers/AdSection/AdNavSection'
import "./Homepage.css";
import BankOfferSection from '../../Containers/AdSection/BankOffersSection/BankOffersSection';
import Footer from '../../Containers/Footer/Footer';
import ResponsiveNavbar from '../../Containers/ResponsiveNavbar/ResponsiveNavbar'
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <ResponsiveNavbar/>
    <Carousel/> 
   <AdNavSection/>
   <BankOfferSection/>
    <BodySection/>
    <Footer/>
    
    
    </div>
  )
}

export default HomePage;