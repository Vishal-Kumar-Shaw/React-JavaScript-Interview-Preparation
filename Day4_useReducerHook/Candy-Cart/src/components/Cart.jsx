import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'

const Cart = () => {
    const {state, dispatch} = useContext(CartContext);
  return (
    <div>
      <h2>Your Cart 🛒</h2>
      {state.items.length === 0 ? <p>Cart is empty</p> : 
       (
        state.items.map((item) => (
            <div key={item.id}>
                {item.name} X {item.quantity} = ₹{item.price*item.quantity}
                <button onClick={ () => dispatch({type:"REMOVE_ITEM", payload: item})}>Remove</button>
            </div>
        ))
       )
      }
      <h3>Total: ₹{state.total}</h3>
      <button onClick={()=>dispatch({type:"CLEAR_CART"})}>Clear Cart</button>
    </div>
  )
}

export default Cart
