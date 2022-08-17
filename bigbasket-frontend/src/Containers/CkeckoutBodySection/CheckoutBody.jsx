import React from 'react'
import CheckoutItemTable from '../../Components/CheckoutTables/CheckoutItemTable';
import CheckoutSection from '../CheckoutSection/CheckoutSection';
import "./CheckoutBody.css"
const CheckoutBody = () => {
  return (
    <section className='checkout-body'>
        <div className="container checkoutBody ">
            <h3>Your Basket (3)</h3>
            <hr className="solid" />
            <CheckoutItemTable/>
            <CheckoutSection/>
        </div> 
       
    </section>
  )
}

export default CheckoutBody;