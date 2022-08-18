import React from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router";
import "./ReviewCheckout.css";
const ReviewCheckout = () => {

  const product = useSelector(
    (state) => state.updateCart.cartItems
  );

  var total=0;
  product.map(e=>{
    total= total+e.qty*e.price
   
  })
  console.log(total,"qwerty")

    const navigate = useNavigate();
  return (
    <div className="review-checkout">
      <div className="apply-delivery-charges">
        <p>**Actual Delivery Charges computed at checkout</p>
      </div>
      <div className="review-checkout-box">
        <div className="sub-total">
            <div className="subtotal-price sub">
                <p>Sub Total:</p>
                <p>{total}</p>
            </div>
            <div className="delivery-charges sub">
                <p>Delivery:</p>
                <p>**</p>
            </div>
        </div> 
        <div onClick={()=>navigate("/checkout")} className="checkout-button">
            <p>View Basket & Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCheckout;
