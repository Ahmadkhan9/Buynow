import React, {useEffect} from 'react'
import CategoryPreview from '../../components/Category Preview/category-preview.component'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryMap } from '../../Store/Category/category.action'
import { useGetCategories } from '../../Hooks/useGetCategories'
import { selectCategories } from '../../Store/Category/category.selector'
const Shop = () => {
  const dispatch = useDispatch()
  const categoriesMap = useSelector(selectCategories)
  const {data} = useGetCategories()
  useEffect(()=> {
    if(data){
      dispatch(setCategoryMap(data?.categories))
    }
  } , [data, dispatch])
  return (
    <>
      {categoriesMap &&
        Object.keys(categoriesMap).map(title => {
          const product = categoriesMap[title].products
          return <CategoryPreview title={title} products={product} />
        })
      }
    </>
  )
}

export default Shop