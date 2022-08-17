import React from "react";
import "./CheckoutItemTable.css"
const CheckoutItemTable = () => {
  return (
    <table >
      <thead>
        <tr>
          <th scope="col">ITEM DESCRIPTION</th>
          <th scope="col">UNIT PRICE</th>
          <th scope="col">QUANTITY</th>
          <th scope="col">SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >Tomato hybrid - (loose)</td>
          <td>Rs 91.00</td>
          <td>2</td>
          <td>RS 182.00 <span style={{marginLeft:"30px"}}>&#10006;</span></td>
         
        </tr>
       
        <tr>
          <td >Tomato hybrid - (loose)</td>
          <td>Rs 91.00</td>
          <td>2</td>
          <td>RS 182.00 <span style={{marginLeft:"30px"}}>&#10006;</span></td>
        </tr>
       
        <tr>
          <td >Tomato hybrid - (loose)</td>
          <td>Rs 91.00</td>
          <td>2</td>
          <td>RS 182.00 <span style={{marginLeft:"30px"}}>&#10006;</span></td>
        </tr>
      
      </tbody>
      
    </table>
  );
};

export default CheckoutItemTable;
