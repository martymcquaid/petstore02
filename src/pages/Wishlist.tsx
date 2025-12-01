import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import { useWishlist } from '../context/WishlistContext'
import { scrollToTop } from '../utils/scrollToTop'

export default function WishlistPage() {
  const { state, removeFromWishlist, clearWishlist } = useWishlist()

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <svg className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your wishlist is empty</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Start adding products you love to your wishlist!
            </p>
            <Link to="/" onClick={scrollToTop}>
              <Button size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Wishlist</h1>
              <p className="text-gray-600 dark:text-gray-300">
                {state.items.length} {state.items.length === 1 ? 'item' : 'items'} in your wishlist
              </p>
            </div>
            {state.items.length > 0 && (
              <Button
                variant="outline"
                onClick={clearWishlist}
                className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                Clear Wishlist
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {state.items.map((product) => (
            <div key={product.id} className="relative group">
              <ProductCard product={product} />
              
              {/* Remove from Wishlist Button */}
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600 z-10"
                aria-label="Remove from wishlist"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Wishlist Actions */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="flex-1 sm:flex-none">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Continue Shopping
            </Button>
          </Link>
          <Button size="lg" className="flex-1 sm:flex-none">
            Add All to Cart
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}