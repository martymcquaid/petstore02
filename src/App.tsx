import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import { WishlistProvider } from './context/WishlistContext'
import Home from './pages/Home'
import CategoryPage from './pages/Category'
import ProductPage from './pages/Product'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'
import OrderConfirmationPage from './pages/OrderConfirmation'
import SearchPage from './pages/Search'
import WishlistPage from './pages/Wishlist'

function App() {
  return (
    <ThemeProvider>
      <WishlistProvider>
        <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
      </Routes>
    </CartProvider>
    </ThemeProvider>
  )
}

export default App
