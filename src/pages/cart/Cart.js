import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { HomeContext } from '../../shopcontext/ShopContext'
import CartItem from './CartItem'
import "./Cart.css"

function Cart() {
  const {cartItem}= useContext(HomeContext)
  return (
    <div className="cart">
      <div>
      <h1>Your Cart Items</h1>
      </div>
       <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if (cartItem[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
        </div> 
    </div>

  )
}

export default Cart