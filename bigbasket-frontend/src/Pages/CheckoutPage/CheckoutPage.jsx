import React from 'react'

import CheckoutBody from '../../Containers/CkeckoutBodySection/CheckoutBody';
import Navbar from '../../Containers/Navbar/Navbar';
import "./CheckoutPage.css";
const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
        <Navbar/>
        <CheckoutBody/>
       
    </div>
  )
}

export default CheckoutPage;