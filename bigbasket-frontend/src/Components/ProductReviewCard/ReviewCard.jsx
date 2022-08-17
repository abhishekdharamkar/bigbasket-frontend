import React from 'react'
import "./ReviewCard.css";
const ReviewCard = () => {
  return (
    <div className="review-card">
      <div className="image-review-box">
        <img src="https://www.freepnglogos.com/uploads/eggplant-png/eggplant-brinjal-png-image-purepng-transparent-png-image-library-29.png" width="65px" alt="veg-img" />
      </div>
      <div className='name-brand-review'>
        <p className='name-brand'>Fresho</p>
        <p className='name-brand'>Tomato Hybrid - (loose)</p>
        <p style={{fontSize:"10px", margin:"5px 0px 0px 0px"}}>2 X 91.00</p>
      </div>
      <div className="qty-box">
        <p>2</p>
      </div> 
      <div className="final-price-box">
        <p>Rs 91.00</p>
        <span>&#10060;</span>
      </div>
    </div>
  )
}

export default ReviewCard;