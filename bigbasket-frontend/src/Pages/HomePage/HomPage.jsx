import React from 'react'
import BodySection from '../../Containers/BodySection/BodySection';
import Carousel from '../../Containers/Carousel/Carousel';
import Navbar from '../../Containers/Navbar/Navbar';
import AdNavSection from '../../Containers/AdSection/AdNavSection'
import "./Hompage.css";
import BankOfferSection from '../../Containers/AdSection/BankOffersSection/BankOffersSection';
import Footer from '../../Containers/Footer/Footer';
const HomPage = () => {
  return (
    <div>
      <Navbar/>
   
    <Carousel/> 
   <AdNavSection/>
   <BankOfferSection/>
    <BodySection/>
    <Footer/>
    
    
    </div>
  )
}

export default HomPage;