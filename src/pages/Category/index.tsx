import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import Button from '../../components/Button'
import { categories, mockProducts } from '../../data/products'
import { Product } from '../../types'

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>()
  
  const category = categories.find(cat => cat.id === categoryId)
  const categoryProducts = mockProducts.filter(product => product.category === categoryId)

  const handleAddToCart = (product: Product) => {
    console.log('Added to cart:', product.name)
  }

  const handleQuickView = (product: Product) => {
    console.log('Quick view:', product.name)
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-lg text-gray-600">Sorry, we couldn't find the category you're looking for.</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header cartItemCount={0} />

      {/* Category Hero */}
      <section className="bg-gradient-to-r from-teal-50 to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name} Products</h1>
            <p className="text-xl text-gray-600">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
                
                {/* Subcategories */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Type</h4>
                  <div className="space-y-2">
                    {category.subcategories.map((subcategory) => (
                      <label key={subcategory} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{subcategory}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Price</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Under $25</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">$25 - $50</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">$50 - $100</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Over $100</span>
                    </label>
                  </div>
                </div>

                {/* Brand */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Brand</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">PetPremium</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">KittyFun</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">ComfortPaws</span>
                    </label>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Rating</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">4 Stars & Up</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">3 Stars & Up</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">2 Stars & Up</span>
                    </label>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort Bar */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-700">
                  Showing <span className="font-medium">{categoryProducts.length}</span> products
                </p>
                <div className="flex items-center gap-4">
                  <label className="text-sm text-gray-700">Sort by:</label>
                  <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Top Rated</option>
                  </select>
                </div>
              </div>

              {/* Products */}
              {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onQuickView={handleQuickView}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found in this category.</p>
                  <Button variant="outline" className="mt-4">
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}