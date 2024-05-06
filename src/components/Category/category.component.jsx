import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCart from '../ProductCart/ProductCart.component'
import { CategoryTitle } from './category.style'
import { CategoryContainer } from './category.style'
import { useSelector } from 'react-redux'
import { selectCategories } from '../../Store/Category/category.selector'
const Category = () => {
    const {category} = useParams()
    console.log('render/rerender component')
    const categoriesMap = useSelector(selectCategories)
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