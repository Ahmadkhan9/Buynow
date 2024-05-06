import { USER_ACTION_TYPE } from "./cart.types"

const INITIAL_STATE = {
    cartItem : [],
    totalItem: 0,
    totalPrice : 0,
    isOpenCart : false
}
export const CartReducer = (state = INITIAL_STATE , action) => {
    const {type , payload} = action
    switch(type){
        case USER_ACTION_TYPE.ADD_ITEM_CART: 
        return {
            ...state,
            cartItem : payload
        }
        case USER_ACTION_TYPE.TOGGLE_CART :
            return {
                ...state,
                isOpen : payload
            }
        default : 
        return state
    }
}