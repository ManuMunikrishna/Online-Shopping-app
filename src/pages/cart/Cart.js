import React, { useContext,  } from 'react'
import { PRODUCTS } from '../../products'
import { HomeContext } from '../../shopcontext/ShopContext'
import CartItem from './CartItem'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'

function Cart() {
  const {cartItem, getTotalCartAmount}= useContext(HomeContext)
  const totalAmount= getTotalCartAmount();
  const navigate = useNavigate()
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
        {totalAmount > 0 ?
        <div className="checkOut">
          <p>Subtotal : ${totalAmount}</p>
          <button onClick={()=> navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div> : <p>Your Cart is empty</p>}
    </div> 

  )
}

export default Cart