import React,{createContext,  useState} from 'react'
import { PRODUCTS } from '../products'


export const HomeContext = createContext(null)

const setDefaultCart=()=>{
    let cart={}

    for(let i=1; i<PRODUCTS.length +1; i++){
        cart[i]=0;
    }
    return cart;
}

function ShopContext(props) {

    const [cartItem, setCartItem]= useState(setDefaultCart())

    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
    }

    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemCount=(newAmount, itemId)=>{
        setCartItem((prev)=>({...prev,[itemId] : newAmount}))
    }

    const ContextValue ={cartItem, setCartItem, addToCart, removeFromCart, updateCartItemCount}

    console.log(cartItem)

  return ( 
  <HomeContext.Provider value={ContextValue}>
            {props.children}
        </HomeContext.Provider>
          )
}

export default ShopContext