import React, { useContext } from 'react'
import useGetProducts from '../../Hooks/useGetProducts'
import ProductCart from '../../components/ProductCart/ProductCart.component'
import { productContext } from '../../Context/Product.context'
import { useGetCategories } from '../../Hooks/useGetCategories'
import CategoryPreview from '../../components/Category Preview/category-preview.component'
const Shop = () => {
  const {data} = useGetCategories()
  return (
    <>
      {data &&
        Object.keys(data?.categories).map(title => {
          const product = data?.categories[title].products
          return <CategoryPreview title={title} products={product} />
        })
      }
    </>
  )
}

export default Shop