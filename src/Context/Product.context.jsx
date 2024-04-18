import { createContext, useContext, useEffect, useState } from "react";
import useGetProducts from "../Hooks/useGetProducts";
import { useGetCategories } from "../Hooks/useGetCategories";


export const productContext = createContext({
    categoriesMap : {},
    setCategoriesMap : () => null
})
export const ProductProvider =  ({children})=> {
    const [categoriesMap , setCategoriesMap] = useState({})
    const {data} = useGetCategories()
    useEffect(()=> {
        if(data){
            setCategoriesMap(data.categories)
        }
    } , [data])
    return (<productContext.Provider value={{categoriesMap , setCategoriesMap}}>{children}</productContext.Provider>)
}