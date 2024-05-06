import React from 'react'
import './ProductCard.style.jsx'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.jsx'
import { Footer, Name, Price, ProductCardContainer } from './ProductCard.style.jsx'
import { addItemToCart } from '../../Store/Cart/cart.actions.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../Store/Cart/cart.selector.js'
const ProductCart = ({ product}) => {
  const dispatch = useDispatch()
    const {name , price , photo} = product
    const cartItem = useSelector(selectCartItems)
    const addCartToProduct = () => dispatch(addItemToCart(product , cartItem))

  return (
    <ProductCardContainer>
        <img className='background-image' src={`http://localhost:8080/products/${photo}`} alt={`${photo}`} />
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
            <Button buttontype={BUTTON_TYPE_CLASSES.inverted} onClick={addCartToProduct}>Add to cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCart