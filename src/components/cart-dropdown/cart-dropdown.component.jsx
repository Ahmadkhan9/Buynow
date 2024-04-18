import React, { useContext } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button'
import { cartContext } from '../../Context/Cart.context'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { CartDropDownContainer, CartItems, EmptyMessage } from './cart-dropdown.style'
const CartDropdown = () => {
  const {cartItem} = useContext(cartContext)
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