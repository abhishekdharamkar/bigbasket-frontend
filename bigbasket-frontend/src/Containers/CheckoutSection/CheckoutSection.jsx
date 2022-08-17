import React from 'react'
import "./CheckoutSection.css"
const CheckoutSection = () => {
  return (
    <div className="checksection my-3 py-3">
        <div className="row">
            <div className="col col-lg-6 checkout-button-section">
               <div className="empty-basket checkout-alt-button">
                <p>Empty Basket</p>
               </div>
               <div className="continue-shopping checkout-alt-button">
                <p>CONTINUE SHOPPING</p>
               </div>
            </div>
            <div className="col col-lg-6 checkout-section">
                <div className='final-checkout-box'>
                    <div className="final-price final-charges">
                      <p>Subtotal</p>
                      <p>Rs.412.00</p>
                    </div>
                    <div className="final-delivery-charge final-charges">
                      <p>Delivery Charges</p>
                      <p>Rs.50.00</p>
                    </div>
                    <hr className="solid" />
                    <div className="final-price final-charges">
                      <h3>Total</h3>
                      <h3>Rs.462.00</h3>
                    </div>
                    <p style={{margin:"0px"}}>*For this order no coupon is applied!!!</p>
                    <hr style={{margin:"0px"}} className="solid" />
                   <div className="final-button-box">
                   <div className="final-checkout-button final-charges"><h5>CHECKOUT</h5> <i style={{marginLeft:"5px"}} class="fa-solid fa-circle-right"></i></div>
                   </div>

 
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutSection;