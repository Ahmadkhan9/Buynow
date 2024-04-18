import React, { useContext } from 'react'
import './checkout-item.style.jsx'
import { cartContext } from '../../Context/Cart.context'
import { Arrow,Image, CheckOutItemContainer, ImageContainer, Quantity, RemoveButton, Span, Value } from './checkout-item.style.jsx'
const CheckOutItem = ({cartItem}) => {
    const {name , photo , price , quantity , _id} = cartItem
    const {removeProductFromCart , addItemToCart , decreaseProductQuantity} = useContext(cartContext)
    const addProducttoCart = () => addItemToCart(cartItem)
    const removeItemFromCart = () => decreaseProductQuantity(_id)
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
        <RemoveButton onClick={() => removeProductFromCart(_id)}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  )
}

export default CheckOutItem