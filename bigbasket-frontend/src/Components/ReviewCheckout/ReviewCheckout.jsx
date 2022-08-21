import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./ReviewCheckout.css";
const ReviewCheckout = () => {

  const [email,setEmail]=useState("")
  const handleChange = event => {
    setEmail(event.target.value);
    
  };

  const product = useSelector(
    (state) => state.updatingCart?.cartItems
  );
  var total=0;


  if(product!=null){
  
  product.map(e=>{
    total= total+e.qty*e.price
   
  })
}
 var itemList=" "
 var time = new Date();
      async function eSubmit(){
        console.log(product)
        if(product!=null){
  
          product.map(e=>{
           itemList= itemList+e.name +"-"+ e.qty+",";
           
          })
          //send to a database
            console.log( {"email":email,
            "cart":itemList,
            "total":total,
            "date":time.toDateString()})
          try {
            const response = await axios({
              url: "http://localhost:8080/checkout",
              headers: {
                "Content-Type": "application/json",
              },
              method: "post",
              data: {
                "email":email,
                "cart":itemList,
                "total":total,
                "date":time.toDateString()
              },
            });
          } catch (error) {
            console.log(error);
          }
        }
        else {
          alert("select the item First");
        }
      }
  return (
    <div className="review-checkout">
      <div className="apply-delivery-charges d-flex flex-column mt-3" style={{"background-color":"#f2f3f2"}}>
     
        <p>**Actual Delivery Charges computed at checkout</p>
        <div className={total>0?"":"d-none"}>
        <label >
          Email:
        </label>
        <input type="email" value={email} onChange={handleChange} required />
        </div>
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
        <div onClick={()=> eSubmit()} className="checkout-button">
            <p >View Basket & Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCheckout;
