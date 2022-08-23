import axios from "axios";
import { actiontypes } from "./ActionTypes";

let product_data = [];
export const getProduct = (type="allproduct") => async (dispatch) => {
  try {
    // console.log(process.env.REACT_APP_GET_DATA_URL)
    const response = await axios.get(process.env.REACT_APP_GET_DATA_URL);

    
    product_data = response.data;
   // console.log("responseeeeeeeeeeeeeeeeeeeeeeee",product_data)
    dispatch({
      type: actiontypes.GET_PRODUCT_DATA,
      payload: product_data,
    });

    dispatch(filteredProducts(type));
  } catch (error) {
    console.log("get data error", error);
  }
};

export const filteredProducts = (params) => async (dispatch) => {
 
  try {
    var filteredProducts = [];
    if(params==="allproduct"){
      filteredProducts = product_data;
    } 
    else if(params==="fruits"){
        filteredProducts = product_data.filter((el) => el.category.id ==1);

    }
      else if(params==="snacks"){
      filteredProducts = product_data.filter((el) => el.category.id==2);
    }
    else{
      try {
        const response = await axios.get("http://localhost:8080/api/v1/product/search?keyword="+params);
        console.log("response",response.data)
        filteredProducts=response.data
      } catch (error) {
        console.log("Search product error", error.message);
      }
   
    }
    dispatch({
      type: actiontypes.FILTER_PRODUCT,
      payload: filteredProducts,
    });
  } catch (error) {
    console.log("filtered product error", error.message);
  }
};
export const createCart = (name,url,price,qty) => {
 
  return {
    type: actiontypes.CART_ADD_ITEM,
    payload: {name,url,price,qty}
  };
};

export const removeFromCart = (index) => {
   return {
     type: actiontypes.REMOVE_FROM_BASKET,
     payload: index
   };
   
 };
 