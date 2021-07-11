import { combineReducers } from "redux";
import CakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake:CakeReducer,
    iceCream:iceCreamReducer
})

export default rootReducer