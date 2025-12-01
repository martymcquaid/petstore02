import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. Your order has been successfully placed and will be processed shortly.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Information</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Number:</span>
                    <span className="font-medium">#PS-2024-{Math.floor(Math.random() * 10000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Date:</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-medium">Credit Card</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping Method:</span>
                    <span className="font-medium">Standard Delivery</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h2>
                <div className="space-y-1 text-gray-600">
                  <p>John Doe</p>
                  <p>123 Main Street</p>
                  <p>Apt 4B</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-teal-50 rounded-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What's Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Confirmation Email</h3>
                <p className="text-sm text-gray-600">You'll receive an order confirmation email shortly.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Order Processing</h3>
                <p className="text-sm text-gray-600">We'll prepare your items for shipping within 1-2 business days.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Shipping</h3>
                <p className="text-sm text-gray-600">Your order will arrive within 5-7 business days.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/account">
              <Button variant="outline" size="lg">
                View Order History
              </Button>
            </Link>
          </div>

          {/* Customer Service */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Our customer service team is here to help you with any questions about your order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@petstuff.com" className="text-teal-600 hover:text-teal-700 font-medium">
                support@petstuff.com
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:1-800-PET-STUFF" className="text-teal-600 hover:text-teal-700 font-medium">
                1-800-PET-STUFF
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}