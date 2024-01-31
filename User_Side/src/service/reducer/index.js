import { combineReducers } from "redux";
import { ProductsReducer } from "./products.reducer";
import cartReducer from "./addCart.reducer";

export const rootReducer = combineReducers({
    ProductsReducer,
    cartReducer
})