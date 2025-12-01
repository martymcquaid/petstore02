import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { mockProducts } from '../data/products'
import { Product } from '../types'
import ProductCard from '../components/ProductCard'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchResults, setSearchResults] = useState<Product[]>([])

  useEffect(() => {
    if (query.trim() === '') {
      setSearchResults([])
      return
    }

    const filtered = mockProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.subcategory.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    )

    setSearchResults(filtered)
  }, [query])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {query ? `Search Results for "${query}"` : 'Search'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      {searchResults.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No products found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {query ? `No products match your search "${query}". Try different keywords.` : 'Enter a search term to find products.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}