import React,{ useState } from "react";
import logo1 from "../../Assets/Big-basket.png";
import ReviewCard from "../../Components/ProductReviewCard/ReviewCard";
import ReviewCheckout from "../../Components/ReviewCheckout/ReviewCheckout";
import logo2 from "../../Assets/Big-basket1.png";
import "./Navbar.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  // const
  //  count = useSelector(
  //   (state) => state.updateCart?.cartItems
  // );

 const [fixNavbar, setFixNavbar] = useState(true);
 const changeNavBar = ()=>{
       if(window.scrollY>= 25){
        setFixNavbar(false);
       }

       if(window.scrollY<=25){
        setFixNavbar(true);
       }
 }


 window.addEventListener("scroll", changeNavBar);

  return (
    <nav className={fixNavbar?"navbar bg-light main-navbar":"navbar bg-light main-navbar fixed-top nav-shadow "}>
      <div className="container navbar-main-container">
        <div className="navbar-container">
          <div className="logo-box">
            <img src={fixNavbar?logo1:logo2} alt="logo1" height={fixNavbar?"100px":"45px"} width={fixNavbar?"110px":"55px"} />
            <div className={fixNavbar?"dropdown":"dropdown d-none"}>
              <button className="dropbtn ">
                <p className="" style={{"height":"15px","width":"245px" }}><span style={{float:"left"}}>Shop By Category</span>
                <i
                  className="fa fa-angle-down"
                  style={{ float:"right",margin: "5px 0px 0px 0px" }}

                ></i>
                </p>
              </button>
              <div className="dropdown-content">
                <p style={{ margin: "0px", padding: "5px" }}>Fruits</p>
                <hr style={{ margin: "0px" }} className="solid" />
                <p style={{ margin: "0px", padding: "5px" }}>Vegetables</p>
                <hr style={{ margin: "0px" }} className="solid" />
                <p style={{ margin: "0px", padding: "5px" }}>Herbs</p>
              </div>
            </div>
          </div>

          <div className="contact-bucket-box">
            <div className={fixNavbar?"contacts":"contacts d-none"}>
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
                  My Basket <br /> 0 items
                </h6>
              </div>
              </div>
              <div className="bucket-item-review">
              {/* <div className="container bucket-item-container">
                <p>Your basket is empty. Start shopping now!</p>
              </div> */}
              <ReviewCard/>
              <ReviewCheckout/>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
