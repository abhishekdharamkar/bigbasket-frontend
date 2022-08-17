import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "./Reducer/RootReducer";

const composeEhancers = composeWithDevTools(
    applyMiddleware(thunk)
)

const store = createStore(rootReducers, composeEhancers);
export default store;