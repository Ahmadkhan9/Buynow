import { createContext, useEffect, useState } from "react";


const addCartItem = (cartItem , productToAdd) => {
    const item = cartItem.find(item => item._id === productToAdd._id)
    if(item){
        const products = cartItem.map(product => product._id === item._id ? {...item , quantity : item.quantity + 1} : product)
        console.log(products)
        return products
    }
    return [...cartItem , {...productToAdd , quantity : 1}]
}

export const cartContext = createContext({
    isOpenCart : false,
    setisOpenCart : () => null,
    cartItem : [],
    addItemToCart : ()=> {},
    decreaseProductQuantity : () => {},
    totalPrice : 0,
    removeProductFromCart : () => {}
})
export const CartProvider = ({children}) =>{
    const [isOpenCart , setisOpenCart] = useState(false)
    const [cartItem , setCartItem] = useState([])
    const [totalPrice , setTotalPrice] = useState(0)
    const [totalItem , setTotalItem] = useState(0)
    const decreaseProductQuantity = (id) =>{
        const existingProduct = cartItem.find(item => item._id === id)
        if(existingProduct.quantity === 1){
            setCartItem(cartItem.filter(item => item._id !== id))
        }else{
            setCartItem(cartItem.map(item => item._id === id ? {...existingProduct , quantity : existingProduct.quantity - 1} : item))
        }
    }
    const removeProductFromCart = (id) => {
        setCartItem(cartItem.filter(product => product._id !== id))
    }
    const addItemToCart = (productToAdd)=> {
        setCartItem(addCartItem(cartItem ,productToAdd ))
    }
    useEffect(()=> {
        const newTotal = cartItem.reduce((total , cartitem) => total + cartitem.quantity * cartitem.price , 0)
        setTotalPrice(newTotal)
    } , [cartItem])
    useEffect(()=> {
        const newCartItem = cartItem.reduce((total , cartitem)=> total + cartitem.quantity , 0)
        setTotalItem(newCartItem)
    }, [cartItem])
    return (<cartContext.Provider value={{setisOpenCart , isOpenCart , cartItem , addItemToCart , totalItem , decreaseProductQuantity , removeProductFromCart , totalPrice}}>{children}</cartContext.Provider>)
}