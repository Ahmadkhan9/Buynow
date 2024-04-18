import React from 'react'
import { CartItemContainer, ItemDetails } from './cart-item.style'
const CartItem = ({cartItem}) => {
    const {name , quantity , photo , price} = cartItem
  return (
    <CartItemContainer>
      <img src={`http://localhost:8080/products/${photo}`} alt={`${name}`} />
      <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x {price}</span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem