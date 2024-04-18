import React from 'react'
import './category-preview.style.jsx'
import ProductCart from '../ProductCart/ProductCart.component'
import { useNavigate } from 'react-router-dom'
import { CategoryPreviewContainer, Preview, Title } from './category-preview.style.jsx'
const CategoryPreview = ({title , products}) => {
  const navigate = useNavigate()
  return (
    <CategoryPreviewContainer>
        <h2>
            <Title onClick={()=> navigate(`/shop/${title}`)}>{title.toUpperCase()}</Title>
        </h2>
        <Preview>
            {
                products.filter((_, idx) => idx < 4)
                .map(product => <ProductCart product={product} key={product._id} />) 
            }
        </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview