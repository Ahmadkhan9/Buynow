import { useDispatch } from "react-redux"
import { USER_ACTION_TYPE } from "./cart.types"
import { createAction } from "../../components/Utils/Reducer/reducer.util"
const dispatch = useDispatch
export const updateProductQuantity = (cartItem ,id) => {
    const existingProduct = cartItem.find(item => item._id === id)
        if(existingProduct.quantity === 1){
            const newCartItems = cartItem.filter(item => item._id !== id)
           return createAction(USER_ACTION_TYPE.ADD_ITEM_CART , newCartItems)
        }else{
            const newCartItems = cartItem.map(item => item._id === id ? {...existingProduct , quantity : existingProduct.quantity - 1} : item)
            return createAction(USER_ACTION_TYPE.ADD_ITEM_CART , newCartItems)
        }
}

export const addCartItem = (cartItem , productToAdd) => {
    const item = cartItem.find(item => item._id === productToAdd._id)
    if(item){
        const products = cartItem.map(product => product._id === item._id ? {...item , quantity : item.quantity + 1} : product)
        return products
    }
    return [...cartItem , {...productToAdd , quantity : 1}]
}

