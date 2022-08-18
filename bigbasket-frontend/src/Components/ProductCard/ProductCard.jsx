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
          <img className="veg-nonVeg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACW
          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" height="30px" alt="veg" />
        </div>

        <p style={{ color: "grey", fontSize: "12px", margin: "0px" }}>{}</p>

        <p>{el.data.productname}</p>

        <p>1 kg</p>

        <div className="price-box">
          <p style={{margin:"0px", fontSize:"12px"}}>MRP: <span style={{"textDecoration":"line-through"}}>RS {((el.data.productprice)*1.2).toFixed(2)} </span> <span style={{fontSize:"14px"}}>RS {el.data.productprice}</span></p>
          <div className="delivery">
          <i style={{fontSize:"20px", color:"grey"}} className="fa-solid fa-truck truck"></i> <p style={{fontSize:"9px" , margin:"0px 0px 0px 3px"}}>standard Delivery: Today 9:00AM - 11:00AM</p>
          </div>
          {/* <div className="change-qty">
            <div className="dec-qty qty-button"><p>-</p></div>
            <div className="show-qty"> <p>1</p></div>
            <div className="inc-qty  qty-button"><p>+</p></div>
          </div> */}
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
