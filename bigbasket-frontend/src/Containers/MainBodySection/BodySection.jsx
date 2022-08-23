import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./BodySection.css";
const 
BodySection = () => {
  const filteredProducts_Data = useSelector(
    (state) => state.filteringProduct.filteredProduct
  );
  console.log(filteredProducts_Data,"mapping product")
  return (
    <div className="container body-container  px-5">
      <div className="row">
        <div className="col col-lg-2 col-xl-2 d-none d-lg-block d-xl-block blank-col"></div>
        <div className="col col-lg-10 col-xl-10 col-md-12 col-sm-12 col-xs-12 content-col">
          <h3>Products</h3>
          <div className="all-products">
            <i className="fa-solid fa-truck-moving"></i>
            <p>All Products</p>
          </div>
          <hr className="solid" />

          <div className="container-fluid card-container row">
          {filteredProducts_Data?.map((el) => {
            return <div key={el._id} className="col-md-4">
               <ProductCard  data={el} />
               
            </div>
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
