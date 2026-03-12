import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import { CartProvider } from './Contexts/CartContext'

function App() {


  return (
    <CartProvider>
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h1>Global Shopping Cart Dashboard</h1>
        <ProductList />
        <hr />
        <Cart/>
      </div>
    </CartProvider>
  )
}

export default App
