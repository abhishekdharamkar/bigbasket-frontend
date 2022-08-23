import "./ResponsiveNavbar.css"
import { useDispatch, useSelector } from "react-redux";
import logo from '../../Assets/Big-basket1.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { filteredProducts, getProduct} from "../../Redux/Action/Action";

function ResponsiveNavbar() {
    const [sidepanel , setSidepanel]=useState(false)
    const dispatch = new useDispatch();
    const count = useSelector(
        (state) => state.updatingCart?.cartItems
    );
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        e.preventDefault();
        var lowerCase = inputText.toLowerCase();
        dispatch(filteredProducts(lowerCase))
    };
    function filtering(type) { 
        dispatch(getProduct(type))
       }

    return (
        <div>
        <nav class="navbar navbar-div navbar-light  bg-light d-lg-none d-xl-none ">
            <div className="container-fluid small-navbar-container">
                <i className="fa-solid fa-bars py-1" onClick={() => {
                    setSidepanel(true);
                }}></i>
                <i className="fa fa-user py-1 fs-4" aria-hidden="true"></i>
                <img src={logo} height="45px" width="45px" className="img-fluid" alt="" />
                <i className="fa fa-map-marker fs-4" aria-hidden="true"></i>
                <Link to="/checkout" style={{color:"white"}} >
                    <i  className="fa fa-shopping-cart" aria-hidden="true">
                        <span className="item-count " >{count.length}</span></i></Link>

            </div>
            <div style={{ width: "100%","margin-left":"5px", "margin-right":"5px" }}>
                <form className="form-inline" style={{ "display": "flex" }}>
                    <input className="form-control mr-sm-2" style={{ width: "100%", "border-radius": "0px", "height": "30px" }} value={inputText} type="search" onChange={(e) => setInputText(e.target.value)} placeholder="Search" aria-label="Search" />
                    <button className=" text-white my-2 my-sm-0" style={{ "background-color": "#84c225", border: "none" }} type="submit" onClick={(e) => inputHandler(e)}
                    ><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </div>
        </nav>
        <div className={sidepanel?"sidepanel d-lg-none":"sidepanel d-none"}>
            <div style={{backgroundColor:"#84C225",width:"309px" ,color:"white"}} className="row">
            <h2 className="py-1 px-3">HOME<i onClick={()=>setSidepanel(false)} className="fa-regular fa-circle-xmark" style={{float:"right",backgroundColor:"white",color:"#84C225" ,borderRadius:"17px",marginTop:"4px"}}></i>
            </h2>  </div>
                <p>Category</p>
           
            <p style={{ margin: "0px", padding: "5px" }} onClick={(e) => filtering("fruits")}>Fruits & Vegetables</p>
                <hr style={{ margin: "0px" }} className="solid" />
                <p style={{ margin: "0px", padding: "5px" }} onClick={(e) => filtering("snacks")}>Snacks-Branded-Foods</p>
            </div>
        </div>
    );
} export default ResponsiveNavbar;