  import React from "react";
  import veg from "../../Assets/veg.png";
  import "./ProductCard.css";
  import { useDispatch } from "react-redux";
  import { useState } from "react";
  import { createCart } from "../../Redux/Action/Action";
  const ProductCard = (el) => {
  const [qty,setQ]=useState(1)
    const dispatch = useDispatch();
    const handleClick = (name,url,price) => {
      console.log(name,url,price,qty)
    dispatch((createCart(name,url,price,qty)))
    
  }
    return (
      <div className="product-card">
        <div className="offer">
          <p>GET 20% OFF</p> <i className="fa-solid fa-sun mx-1"></i>
        </div>
        <div className="image-box">
          <div className="image">
            <img
              src={el.data.imageUrl}
              className="img-fluid"
              height="120px"
              alt="veg"
            />
          </div>
          <img className="veg-nonVeg" src={veg} height="30px" alt="veg" />
        </div>

        <p style={{ color: "grey", fontSize: "12px", margin: "0px" }}>{}</p>

        <p>{el.data.productname}</p>

        <p>1 kg</p>

        <div className="price-box">
          <p style={{margin:"0px", fontSize:"12px"}}>MRP: <span style={{"textDecoration":"line-through"}}>RS {((el.data.productprice)*1.2).toFixed(2)} </span> <span style={{fontSize:"14px"}}>RS {el.data.productprice}</span></p>
          <div className="delivery">
          <i style={{fontSize:"20px", color:"grey"}} className="fa-solid fa-truck truck"></i> <p style={{fontSize:"9px" , margin:"0px 0px 0px 3px"}}>standard Delivery: Today 9:00AM - 11:00AM</p>
          </div>
         
          <div className="add-box my-1">
            <div className="initial-quantity">
            <div className="qty"><p style={{ color:"rgb(204, 204, 204)"}}>Qty</p></div>
            <div className="quantity"> <input style={{width:"60px"}} type="number" value={qty} onChange={e => setQ(e.target.value)}/></div>
            </div> 

            <div className="add-button">
            <div className="add-button"> <p onClick={e=>handleClick(el.data.productname,el.data.imageUrl,el.data.productprice)}>ADD</p> <i style={{color:"grey"}} class="fa-solid fa-basket-shopping"></i></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProductCard;
