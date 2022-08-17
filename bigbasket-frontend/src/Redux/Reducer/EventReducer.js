import { actiontypes } from "../Action/ActionTypes";

// const initialstate = null;
export const gettingProductData = (state = {}, { type, payload }) => {
  switch (type) {
    case actiontypes.GET_PRODUCT_DATA:
      return {...state, products: payload.data};

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
