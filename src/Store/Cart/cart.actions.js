// import { useDispatch, useSelector } from "react-redux"
import { createAction } from "../../components/Utils/Reducer/reducer.util"
import { updateProductQuantity, calculateItemAndPrice , addCartItem } from "./cart.helperFunctions"
import { USER_ACTION_TYPE } from "./cart.types"
export const decreaseProductQuantity = (id , cartItem) =>{
    return updateProductQuantity(cartItem ,id )
}

export const setisOpenCart = (toggleCart) => {
    return createAction(USER_ACTION_TYPE.TOGGLE_CART , !toggleCart)
}

export const removeProductFromCart = (id , cartItem) => {
    const newCartItems = cartItem.filter(product => product._id !== id)
  return  createAction(USER_ACTION_TYPE.ADD_ITEM_CART ,newCartItems)
}
export const addItemToCart = (productToAdd , cartItem)=> {
    const newItem = addCartItem(cartItem ,productToAdd)
    return createAction(USER_ACTION_TYPE.ADD_ITEM_CART, newItem)
}