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

// const initialQuantity = 1;
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
  const item = payload;
  console.log("in root reducer",payload)
  switch (type) {
    
    case actiontypes.CART_ADD_ITEM:
    //  console.log("qqqqqqqqqqqqqqqqqqqqqqqq",state.cartItems[0])
      // state.cartItems.map=(name,index)=>{
      //   console.log("qqqqqqqqqqqqqqqqqqqqqqqq",state.cartItems[index])
      //   if(name===item.name){
      //     console.log("qqqqqqqqqqqqqqqqqqqqqqqq")
      //   }
      // }
      //const dupe = state.find(obj => obj.name === item.name);
      
      // if(state.cartItems[0].name===item.name){
      //   console.log("assa",)
      // }
      console.log("ACTIONs",state.cartItems)
      return { 
        ...state,
        cartItems: [...state.cartItems, item],
        
      };
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
        // ...state,
        // // basket: [...state.basket,action.item],
        // product_Array:[...state.product_Array,payload],};
    

    // case actiontypes.DEC_QUANTITY:
    //   if (payload.quantity > 0) {
    //     return { ...payload, quantity: payload.quantity - state };
    //   }
    //   break;

    default:
      return state;
  }
};

// export const removeFromCart = (state = { cartItems }, { type, payload }) => {
  
//   // product_Array.push(payload)
//   const item = payload;
//   console.log("in root reducer")
//   switch (type) {
//     case actiontypes.CART_ADD_ITEM:
//       return { 
//         ...state,
//         cartItems: [...state.cartItems, item],
        
//       };
      
//     default:
//       return state;
//   }
// };
// export const changeQuantity = (state = initialQuantity, {type, payload})=>{
//     switch (type) {
//         case actiontypes.INC_QUANTITY :
//             return {...payload, quantity: payload.quantity+state}

//         case actiontypes.DEC_QUANTITY :
//             if(payload.quantity > 0){
//                 return {...payload, quantity:payload.quantity-state}
//             }
//             break;

//         default:
//             break;
//     }
// }
