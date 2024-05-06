import { createSelector } from "reselect";


export const selectCartReducer = state => state.cart


export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItem
)
export const selectisOpenCart = createSelector(
    [selectCartReducer],
    (cart) => cart.isOpen
)

export const selectTotalAmount = createSelector(
    [selectCartItems],
    (cartItem) => cartItem.reduce((total , cartitem) => total + cartitem.quantity * cartitem.price , 0)
)

export const selectTotalQuantity = createSelector(
    [selectCartItems],
    (cartItem) => cartItem.reduce((total , cartitem)=> total + cartitem.quantity , 0)
)