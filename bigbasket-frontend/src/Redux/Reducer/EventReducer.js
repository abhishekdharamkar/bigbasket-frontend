import { actiontypes } from "../Action/ActionTypes";

// const initialstate = null;
export const gettingProductData = (state = {}, { type, payload }) => {
  
  switch (type) {
    case actiontypes.GET_PRODUCT_DATA:
      return {...state, products: payload
      };

    default:
      return state;
  }
};


export const changeQuant = (state = 1, { type, payload }) => {
  switch (type) {
    case actiontypes.INC_QUANTITY:
      return { ...payload, quantity: payload.quantity + state };
    

    case actiontypes.DEC_QUANTITY:
      if (payload.quantity > 0) {
        return { ...payload, quantity: payload.quantity - state };
      }
      break;

    default:
      return state;
  }
};

export const filtered_products_data = (state = {}, {type, payload})=>{
    switch (type) {
        case actiontypes.FILTER_PRODUCT:
            return {...state, filteredProduct: payload};
        default:
            return state;
    }
}
var product_Array=[];
export const updateCart = (state = { cartItems: [] }, { type, payload }) => {
  
  // product_Array.push(payload)
  
  
  switch (type) {
    
    case actiontypes.CART_ADD_ITEM:
      console.log("lppl",state.cartItems)
      const item = payload;
      const existItem = state.cartItems.find(
        (x) => x.name === item.name
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.name === existItem.name ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

      case actiontypes.REMOVE_FROM_BASKET:
        console.log("payload",payload)
        const index = state.cartItems.findIndex(
          (basketItem) => basketItem.id === payload
            );
            let newBasket = [...state.cartItems];
  
        if (payload >= 0) {
          console.log("index",payload)
          newBasket.splice(payload, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${payload.id}) as its not in basket!`
          )
        }
        return {
          ...state,
          cartItems: newBasket
        }
   

    default:
      return state;
  }
};
