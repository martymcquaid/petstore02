import { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product } from '../types'

interface WishlistState {
  items: Product[]
  itemCount: number
}

type WishlistAction =
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'CLEAR_WISHLIST' }

interface WishlistContextType {
  state: WishlistState
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  clearWishlist: () => void
  isInWishlist: (productId: string) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST': {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        return state // Item already in wishlist
      }
      return {
        items: [...state.items, action.payload],
        itemCount: state.itemCount + 1
      }
    }
    case 'REMOVE_FROM_WISHLIST': {
      const newItems = state.items.filter(item => item.id !== action.payload)
      return {
        items: newItems,
        itemCount: newItems.length
      }
    }
    case 'CLEAR_WISHLIST':
      return {
        items: [],
        itemCount: 0
      }
    default:
      return state
  }
}

interface WishlistProviderProps {
  children: ReactNode
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, {
    items: [],
    itemCount: 0
  })

  const addToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product })
  }

  const removeFromWishlist = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId })
  }

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' })
  }

  const isInWishlist = (productId: string): boolean => {
    return state.items.some(item => item.id === productId)
  }

  return (
    <WishlistContext.Provider value={{ state, addToWishlist, removeFromWishlist, clearWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}