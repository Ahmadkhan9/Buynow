import React  from 'react'
import CheckOutItem from '../checkout-item/checkout-item.component'
import { CheckOutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.style'
import { useSelector } from 'react-redux'
import { selectCartItems, selectTotalAmount } from '../../Store/Cart/cart.selector'
const CheckOut = () => {
    const totalPrice = useSelector(selectTotalAmount)
    const cartItem = useSelector(selectCartItems)
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