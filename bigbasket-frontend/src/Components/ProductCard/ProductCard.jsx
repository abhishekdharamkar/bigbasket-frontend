  import React from "react";
  import veg from "../../Assets/veg.png";
  import "./ProductCard.css";

  const ProductCard = (el) => {
    
    
    return (
      <div className="product-card">
        <div className="offer">
          <p>GET 40% OFF</p> <i className="fa-solid fa-sun mx-1"></i>
        </div>
        <div className="image-box">
          <div className="image">
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40162469_6-fresho-potato-new-crop.jpg"
              className="img-fluid"
              height="120px"
              alt="veg"
            />
          </div>
          <img className="veg-nonVeg" src="veg" height="30px" alt="veg" />
        </div>

        <p style={{ color: "grey", fontSize: "12px", margin: "0px" }}>{}</p>

        <p>Abhi</p>

        <p>1 kg</p>

        <div className="price-box">
          <p style={{margin:"0px", fontSize:"12px"}}>MRP: <span style={{fontSize:"14px"}}>RS {}</span></p>
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
            <div className="quantity"> <p>1</p></div>
            </div> 

            <div className="add-button">
            <div className="add-button"> <p>ADD</p> <i style={{color:"grey"}} class="fa-solid fa-basket-shopping"></i></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProductCard;
