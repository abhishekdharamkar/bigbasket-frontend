import { combineReducers } from "redux";
import { gettingProductData, changeQuant, filtered_products_data,updateCart } from "./EventReducer";

const rootReducers = combineReducers({
    gettingProduct: gettingProductData,
    changingQuant: changeQuant,
    filteringProduct: filtered_products_data,
    updatingCart:updateCart
})

export default rootReducers;