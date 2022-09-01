import React, { useState } from "react";
import logo1 from "../../Assets/Big-basket.png";
import ReviewCard from "../../Components/ProductReviewCard/ReviewCard";
import ReviewCheckout from "../../Components/ReviewCheckout/ReviewCheckout";
import logo2 from "../../Assets/Big-basket1.png";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct,searchProduct, filteredProducts } from "../../Redux/Action/Action";
const Navbar = () => {
  // const
  const count = useSelector(
    (state) => state.updatingCart?.cartItems
  );

  const dispatch = useDispatch();
  //send filterd data
  function filtering(type) { 
   dispatch(getProduct(type))
  }

  const [changeNavbar, setChangeNavbar] = useState(true);
  const changeNavBar = () => {
    if (window.scrollY >= 25) {
      setChangeNavbar(false);
    }

    if (window.scrollY <= 25) {
      setChangeNavbar(true);
    }
  }
  //search
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    e.preventDefault();
    var lowerCase = inputText.toLowerCase();
    dispatch(filteredProducts(lowerCase))
  };

  window.addEventListener("scroll", changeNavBar);

  return (
    <nav className={changeNavbar ? "navbar bg-light main-navbar d-none d-lg-block d-xl-block " : "navbar bg-light main-navbar fixed-top nav-shadow d-none d-lg-block d-xl-block"}>
      <div className="container navbar-main-container">
        <div className="navbar-container">
          <div className={changeNavbar ? "logo-box" : "logo-box2"}>
            <img className="mt-1" src={changeNavbar ? logo1 : logo2} alt="logo1" height={changeNavbar ? "75px" : "45px"} width={changeNavbar ? "180px" : "55px"} />

            <div className={"dropdown"} >
              {/* style={{width:changeNavbar?"257px":"100px" }} */}
              <button className={changeNavbar ? "dropbtn" : "dropbtn bg-white text-dark"}>
                <p className="" style={{ height: changeNavbar ? "15px" : "10px", width: changeNavbar ? "245px" : "64px" }}><span style={{ float: "left" }}>{changeNavbar ? "Shop By Category" : "Shop"}</span>
                  <i
                    className="fa fa-angle-down"
                    style={{ float: "right", margin: "5px 0px 0px 0px" }}

                  ></i>
                </p>
              </button>
              <div className="dropdown-content">
                <p style={{ margin: "0px", padding: "5px" }} onClick={(e) => filtering("fruits")}>Fruits & Vegetables</p>
                <hr style={{ margin: "0px" }} className="solid" />
                <p style={{ margin: "0px", padding: "5px" }} onClick={(e) => filtering("snacks")}>Snacks-Branded-Foods</p>
              </div>

            </div>
         
          </div>
          <div style={{ marginLeft:changeNavbar? "2rem" :"6rem",marginTop: changeNavbar? "2.9rem": "1.4rem"}}>
          <form className="form-inline" style={{  width: "28rem", "display": "flex" }}>
              <input className="form-control mr-sm-2" style={{"border-radius":"0px" ,"height":"30px"}} value={inputText} type="search" onChange={(e) => setInputText(e.target.value)} placeholder="Search" aria-label="Search" />
              <button className=" text-white my-2 my-sm-0" style={{"background-color":"#84c225" ,border:"none"}} type="submit" onClick={(e) => inputHandler(e)}
              ><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
            </div>
          <div className="contact-bucket-box">
          <div className={changeNavbar ? "contacts" : "contacts d-none"}>
              <div className="phone contacts-option">
                <i
                  style={{ margin: "0px 5px 0px 5px" }}
                  className="fa fa-phone"
                ></i>
                <p style={{ margin: "0px" }}>1860 123 1000</p>
              </div>
              <div className="location contacts-option">
                <i
                  style={{ margin: "0px 5px 0px 5px" }}
                  className="fa fa-map-pin"
                ></i>
                <p style={{ margin: "0px" }}>560004, Banglore</p>
                <i
                  style={{ margin: "0px 0px 0px 10px" }}
                  className="fa fa-angle-down"
                ></i>
              </div>
              <div className="authentication contacts-option">
                <i
                  style={{ margin: "0px 5px 0px 5px" }}
                  className="fa fa-user"
                ></i>
                <p style={{ margin: "0px" }}>Login/Sign Up</p>
              </div>
            </div>
            <div className="bucket-button-box">
              <div className="bucket-button">
                <i
                  style={{
                    fontSize: "30px",
                    marginRight: "10px",
                    color: "#da241c",
                  }}
                  className="fa-solid fa-basket-shopping"
                ></i>
                <div className="bucket-items">
                  <h6>
                    My Basket <br /> {count.length} items
                  </h6>
                </div>
              </div>

              <div className="bucket-item-review">

                {count.length == 0 ?
                  <div className="container bucket-item-container">
                    <p>Your basket is empty. Start shopping now!</p>
                  </div>
                  :
                  <ReviewCard />
                }
                <ReviewCheckout />
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
