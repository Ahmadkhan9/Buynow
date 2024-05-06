import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoryReducer } from "./Category/category.reducer";
import { CartReducer } from "./Cart/cart.reducer";

export const rootReducer = combineReducers({
    user : userReducer,
    categories : categoryReducer,
    cart : CartReducer
})