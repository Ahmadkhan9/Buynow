import React, { useContext } from 'react'
import './ProductCard.style.jsx'
import { productContext } from '../../Context/Product.context'
import { cartContext } from '../../Context/Cart.context'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.jsx'
import { Footer, Name, Price, ProductCardContainer } from './ProductCard.style.jsx'
const ProductCart = ({ product}) => {
  const {addItemToCart} = useContext(cartContext)

    const {name , price , photo} = product
    const addCartToProduct = () => addItemToCart(product)

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