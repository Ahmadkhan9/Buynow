import React, { useContext } from 'react'
import { cartContext } from '../../Context/Cart.context'
import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIcon.style'
const CartIconComponent = () => {
    const {isOpenCart,setisOpenCart , totalItem} = useContext(cartContext)
  return (
    <CartIconContainer>
        <ShoppingIcon onClick={()=> setisOpenCart(!isOpenCart) } className='shopping-icon' />
        <ItemCount className='item-count'>{totalItem}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIconComponent