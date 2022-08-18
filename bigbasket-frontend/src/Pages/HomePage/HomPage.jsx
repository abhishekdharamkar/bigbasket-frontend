import React from 'react'
import BodySection from '../../Containers/BodySection/BodySection';
import Carousel from '../../Containers/Carousel/Carousel';
import Navbar from '../../Containers/Navbar/Navbar';
import AdNavSection from '../../Containers/AdSection/AdNavSection'
import "./Hompage.css";
import BankOfferSection from '../../Containers/AdSection/BankOffersSection/BankOffersSection';
const HomPage = () => {
  return (
    <div>
      <Navbar/>
   
    <Carousel/> 
   <AdNavSection/>
   <BankOfferSection/>
    <BodySection/>
    
    
    </div>
  )
}

export default HomPage;