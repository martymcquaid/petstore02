import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { state, updateQuantity, removeFromCart } = useCart()

  const subtotal = state.total
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <svg className="mx-auto h-24 w-24 text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-lg text-gray-600 mb-8">Looks like you haven't added any pet products to your cart yet.</p>
            <Link to="/">
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
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {state.items.map((item) => (
                <div key={item.product.id} className="p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center';
                      }}
                    />

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{item.product.name}</h3>
                          <p className="text-sm text-gray-500">{item.product.brand}</p>
                          {item.size && (
                            <p className="text-sm text-gray-500">Size: {item.size}</p>
                          )}
                          {item.color && (
                            <p className="text-sm text-gray-500">Color: {item.color}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                          {item.product.originalPrice && (
                            <p className="text-sm text-gray-500 line-through">
                              ${(item.product.originalPrice * item.quantity).toFixed(2)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link to="/">
                <Button variant="outline">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({state.itemCount} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {shipping === 0 && (
                  <div className="text-sm text-green-600 font-medium">
                    🎉 You qualify for free shipping!
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Discount Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Discount Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
                <Button size="lg" className="w-full mb-4">
                  Proceed to Checkout
                </Button>
              </Link>

              {/* Security Badges */}
              <div className="text-center text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure Checkout</span>
                </div>
                <p>Your payment information is encrypted and secure.</p>
              </div>

              {/* Accepted Payment Methods */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Accepted Payment Methods</p>
                <div className="flex gap-2">
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">VISA</div>
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">MC</div>
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">AMEX</div>
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">PP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}