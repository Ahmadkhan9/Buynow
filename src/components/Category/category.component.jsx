import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productContext } from '../../Context/Product.context'
import ProductCart from '../ProductCart/ProductCart.component'
import { CategoryTitle } from './category.style'
import { CategoryContainer } from './category.style'
const Category = () => {
    const {category} = useParams()
    const {categoriesMap} = useContext(productContext)
    const [products , setProducts] = useState([])
    useEffect(()=> {
        if(categoriesMap){
            setProducts(categoriesMap[category]?.products)
        }
    }, [category, categoriesMap])
  return (
    <>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
    <CategoryContainer>
        {products &&
            products?.map(product => <ProductCart key={product._id} product={product}/>)
        }
    </CategoryContainer>
    </>
  )
}

export default Category