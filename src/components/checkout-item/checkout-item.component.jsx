import React from 'react'
import './checkout-item.style.jsx'
import { removeProductFromCart, addItemToCart, decreaseProductQuantity } from '../../Store/Cart/cart.actions.js'
import { Arrow,Image, CheckOutItemContainer, ImageContainer, Quantity, RemoveButton, Span, Value } from './checkout-item.style.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../Store/Cart/cart.selector.js'
const CheckOutItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const {name , photo , price , quantity , _id} = cartItem
    const addProducttoCart = () => dispatch(addItemToCart(cartItem , cartItems))
    const removeItemFromCart = () => dispatch(decreaseProductQuantity(_id , cartItems))
  return (
    <CheckOutItemContainer>
        <ImageContainer>
            <Image src={`http://localhost:8080/products/${photo}`} alt={`${name}`} />
        </ImageContainer>
        <Span>{name}</Span>
        <Quantity>
            <Arrow onClick={removeItemFromCart}>
                &#10094;
            </Arrow>
            <Value>
            {quantity}
            </Value>
            <Arrow onClick={addProducttoCart}>
                &#10095;
            </Arrow>
            </Quantity>
        <Span>{price}</Span>
        <RemoveButton onClick={() => dispatch(removeProductFromCart(_id , cartItems))}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  )
}

export default React.memo(CheckOutItem)