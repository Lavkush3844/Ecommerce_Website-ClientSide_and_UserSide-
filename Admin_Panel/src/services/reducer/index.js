import { combineReducers } from "redux";
import { ProductsReducer } from "./products.reducer";
import { loginReducer } from "./login.reducer";

export const rootReducer = combineReducers({
    ProductsReducer,
    loginReducer
})