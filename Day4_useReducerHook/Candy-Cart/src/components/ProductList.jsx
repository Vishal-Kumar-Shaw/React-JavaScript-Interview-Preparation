import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'

const ProductList = () => {
    const { dispatch } = useContext(CartContext);

    const products = [
        {id:1, name: 'Laptop', price: 40000},
        {id:2, name: 'Phone', price: 15000},
        {id:3, name: 'T-Shirt', price: 499},
        {id:4, name: 'Jeans', price: 899},
        {id:5, name: 'Mobile Cover', price:150}
    ]
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "5px", width:'400px', display:'flex', justifyContent:'space-between'}}>
           <strong>{product.name}</strong> - ₹{product.price}
           <button onClick={()=>dispatch({type: "ADD_ITEM", payload: product})} style={{background:'#fff', color:'#000'}}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
