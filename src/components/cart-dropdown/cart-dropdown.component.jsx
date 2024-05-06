import React from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { CartDropDownContainer, CartItems, EmptyMessage } from './cart-dropdown.style'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../Store/Cart/cart.selector'
const CartDropdown = () => {
  const cartItem = useSelector(selectCartItems)
  const navigate = useNavigate()
  return (
    <CartDropDownContainer>
        <CartItems>
          {
            cartItem.length ? (
              cartItem.map(item => (<CartItem key={item._id} cartItem={item}/>))
            ) : (
              <EmptyMessage>Your Cart is Empty</EmptyMessage>
            )
          }
        </CartItems>
        <Button buttontype={BUTTON_TYPE_CLASSES.inverted} onClick= {()=> navigate('/checkout')}>CHECKOUT</Button>
    </CartDropDownContainer>
  )
}

export default CartDropdown