import React, { useContext } from 'react'
import { cartContext } from '../../Context/Cart.context'
import CheckOutItem from '../checkout-item/checkout-item.component'
import { CheckOutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.style'
const CheckOut = () => {
    const {totalPrice, cartItem} = useContext(cartContext)
    console.log(cartItem)
  return (
    <CheckOutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
        {cartItem.map(product => (
            <CheckOutItem key={product._id} cartItem={product}/>
        ))}
        <Total>Total : {totalPrice}</Total>
    </CheckOutContainer>
  )
}

export default CheckOut