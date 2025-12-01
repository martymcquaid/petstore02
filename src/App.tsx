import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/Category'
import ProductPage from './pages/Product'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/cart" element={<div>Cart Page</div>} />
      <Route path="/checkout" element={<div>Checkout Page</div>} />
    </Routes>
  )
}

export default App
