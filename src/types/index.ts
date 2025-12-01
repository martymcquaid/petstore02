export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  subcategory: string
  brand: string
  rating: number
  reviewCount: number
  inStock: boolean
  stockCount?: number
  features: string[]
  materials?: string[]
  sizes?: string[]
  colors?: string[]
  tags: string[]
  isNew?: boolean
  isOnSale?: boolean
  discountPercentage?: number
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  color: string
  subcategories: string[]
}

export interface CartItem {
  product: Product
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

export interface Review {
  id: string
  productId: string
  customerName: string
  rating: number
  title: string
  content: string
  date: string
  helpful: number
  verified: boolean
  images?: string[]
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  addresses: Address[]
  wishlist: string[]
  orders: Order[]
}

export interface Address {
  id: string
  type: 'shipping' | 'billing'
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  isDefault: boolean
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  date: string
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: string
  trackingNumber?: string
}