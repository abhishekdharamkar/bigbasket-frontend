import axios from "axios";
import { actiontypes } from "./ActionTypes";

let product_data = [];
export const getProduct = (type="allproduct") => async (dispatch) => {
  try {
    // console.log(process.env.REACT_APP_GET_DATA_URL)
    const response = await axios.get("http://localhost:8080/api/v1/productList");

    
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
  //console.log("param",params)
  try {
    var filteredProducts = [];
    //params === "allProducts"
console.log("param",params)
    if (params) {
      // JSON.parse(product_data)
     //console.log("param",product_data.productname)
     
    //  filteredProducts = product_data.filter((el) => el.productname.includes(params));
    }
    if(params==="allproduct"){
      filteredProducts = product_data;
    } 
    else {
      if(params==="fruits"){
        filteredProducts = product_data.filter((el) => el.id <=9);

      }
      if(params==="snacks")
      filteredProducts = product_data.filter((el) => el.id >=10);
    }

    dispatch({
      type: actiontypes.FILTER_PRODUCT,
      payload: filteredProducts,
    });
  } catch (error) {
    console.log("filtered product error", error.message);
  }
};

// export const incQuantity = (quantity) => {
//   return {
//     type: actiontypes.INC_QUANTITY,
//     payload: quantity,
//   };
// };

// export const decQuantity = (quantity) => {
//   return {
//     type: actiontypes.DEC_QUANTITY,
//     payload: quantity,
//   };
// };

export const createCart = (name,url,price,qty) => {
 
  return {
    type: actiontypes.CART_ADD_ITEM,
    payload: {name,url,price,qty}
  };
};

export const removeFromCart = (index) => {
  console.log("yess",index)
   // product={name,url,price,qty}
  //  console.log("ACTION",index)
   return {
     type: actiontypes.REMOVE_FROM_BASKET,
     payload: index
   };
   
 };
 
 //
 export const searchProduct = (keyword) => {
  console.log("keyword",keyword)

  try {
    let searchProduct = [];
    const response =  axios.get("http://localhost:8080/api/v1/product/search/"+keyword);
    console.log("response",response.data)
    filteredProducts=response.data
  } catch (error) {
    console.log("filtered product error", error.message);
  }
};