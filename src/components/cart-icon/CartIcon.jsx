import React from 'react'
import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIcon.style'
import { setisOpenCart } from '../../Store/Cart/cart.actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectTotalQuantity, selectisOpenCart } from '../../Store/Cart/cart.selector'
const CartIconComponent = () => {
  const dispatch = useDispatch()
  const totalItem = useSelector(selectTotalQuantity)
  const isOpenCart = useSelector(selectisOpenCart)
  return (
    <CartIconContainer>
        <ShoppingIcon onClick={()=> dispatch(setisOpenCart(isOpenCart)) } className='shopping-icon' />
        <ItemCount className='item-count'>{totalItem}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIconComponent