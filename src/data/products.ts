import { Product, Category } from '../types'

export const categories: Category[] = [
  {
    id: 'dogs',
    name: 'Dogs',
    description: 'Everything your canine companion needs',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center',
    color: 'blue',
    subcategories: ['Food & Treats', 'Toys', 'Beds & Comfort', 'Grooming', 'Collars & Leads', 'Training']
  },
  {
    id: 'cats',
    name: 'Cats',
    description: 'Premium products for your feline friends',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center',
    color: 'purple',
    subcategories: ['Food & Treats', 'Toys', 'Beds & Comfort', 'Grooming', 'Litter & Accessories', 'Scratching']
  },
  {
    id: 'birds',
    name: 'Birds',
    description: 'Supplies for feathered friends',
    image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&h=400&fit=crop&crop=center',
    color: 'green',
    subcategories: ['Food & Treats', 'Toys', 'Cages & Habitats', 'Grooming', 'Health & Wellness']
  },
  {
    id: 'fish',
    name: 'Fish',
    description: 'Create the perfect aquatic environment',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center',
    color: 'cyan',
    subcategories: ['Food & Treats', 'Tanks & Aquariums', 'Decorations', 'Filters & Pumps', 'Water Care']
  },
  {
    id: 'reptiles',
    name: 'Reptiles',
    description: 'Habitats and supplies for reptile care',
    image: 'https://images.unsplash.com/photo-1584214177574-0e3e4e4a1b3c?w=400&h=400&fit=crop&crop=center',
    color: 'orange',
    subcategories: ['Food & Treats', 'Habitats', 'Heating & Lighting', 'Decorations', 'Health & Wellness']
  },
  {
    id: 'small-animals',
    name: 'Small Animals',
    description: 'Essentials for rabbits, guinea pigs, and more',
    image: 'https://images.unsplash.com/photo-1422568374078-57d432c8de21?w=400&h=400&fit=crop&crop=center',
    color: 'pink',
    subcategories: ['Food & Treats', 'Toys', 'Cages & Habitats', 'Bedding', 'Grooming', 'Health & Wellness']
  }
]

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Chicken Dog Treats',
    description: 'All-natural chicken treats made with real chicken breast. Perfect for training and rewarding your good boy!',
    price: 12.99,
    originalPrice: 16.99,
    images: [
      'https://images.unsplash.com/photo-1583337130417-3346a1bbe748?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b6?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1591005246457-7b821b13c712?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'dogs',
    subcategory: 'Food & Treats',
    brand: 'PetPremium',
    rating: 4.5,
    reviewCount: 234,
    inStock: true,
    stockCount: 45,
    features: ['All-natural ingredients', 'No artificial preservatives', 'High in protein', 'Made in USA'],
    materials: ['Chicken breast', 'Natural flavoring'],
    sizes: ['Small (5oz)', 'Medium (10oz)', 'Large (20oz)'],
    tags: ['treats', 'training', 'chicken', 'natural'],
    isOnSale: true,
    discountPercentage: 24
  },
  {
    id: '2',
    name: 'Interactive Cat Toy Set',
    description: '3-piece interactive toy set with feathers, bells, and catnip to keep your cat entertained for hours.',
    price: 18.99,
    images: [
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'cats',
    subcategory: 'Toys',
    brand: 'KittyFun',
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    stockCount: 32,
    features: ['Interactive play', 'Catnip included', 'Safe materials', 'Durable construction'],
    materials: ['Feathers', 'Bells', 'Catnip', 'Plastic'],
    tags: ['toys', 'interactive', 'catnip', 'feather'],
    isNew: true
  },
  {
    id: '3',
    name: 'Luxury Orthopedic Dog Bed',
    description: 'Memory foam dog bed with orthopedic support for older dogs or those with joint issues. Ultra-soft removable cover.',
    price: 89.99,
    originalPrice: 119.99,
    images: [
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1415369629372-26f2b60e7427?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1583337130417-3346a1bbe748?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'dogs',
    subcategory: 'Beds & Comfort',
    brand: 'ComfortPaws',
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    stockCount: 18,
    features: ['Memory foam', 'Orthopedic support', 'Waterproof liner', 'Machine washable cover'],
    materials: ['Memory foam', 'Polyester cover', 'Waterproof liner'],
    sizes: ['Small (30x20)', 'Medium (40x30)', 'Large (50x35)', 'Extra Large (60x40)'],
    colors: ['Gray', 'Brown', 'Navy', 'Beige'],
    tags: ['bed', 'orthopedic', 'memory foam', 'luxury'],
    isOnSale: true,
    discountPercentage: 25
  },
  {
    id: '4',
    name: 'Automatic Pet Feeder',
    description: 'Programmable automatic pet feeder with portion control and voice recording. Perfect for scheduled feeding times.',
    price: 59.99,
    images: [
      'https://images.unsplash.com/photo-1606857521015-7f9faeaf8d4e?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1589924633312-65c209c639d1?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'dogs',
    subcategory: 'Food & Treats',
    brand: 'TechPet',
    rating: 4.3,
    reviewCount: 201,
    inStock: true,
    stockCount: 27,
    features: ['Programmable schedule', 'Portion control', 'Voice recording', 'Battery backup'],
    materials: ['Plastic', 'Stainless steel bowl'],
    sizes: ['4L capacity', '6L capacity'],
    tags: ['feeder', 'automatic', 'programmable', 'tech'],
    isNew: true
  },
  {
    id: '5',
    name: 'Grooming Kit for Cats',
    description: 'Complete grooming kit including brush, nail clippers, and shampoo. Everything you need for cat grooming.',
    price: 24.99,
    images: [
      'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'cats',
    subcategory: 'Grooming',
    brand: 'GroomPro',
    rating: 4.6,
    reviewCount: 143,
    inStock: true,
    stockCount: 56,
    features: ['Complete kit', 'Gentle on skin', 'Ergonomic design', 'Travel case included'],
    materials: ['Stainless steel', 'Plastic', 'Soft bristles'],
    tags: ['grooming', 'brush', 'nail clippers', 'shampoo'],
    isOnSale: true,
    discountPercentage: 17
  },
  {
    id: '6',
    name: 'Bird Cage with Play Top',
    description: 'Spacious bird cage with play top, seed guards, and easy-clean bottom. Suitable for medium-sized birds.',
    price: 149.99,
    images: [
      'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1577515911212-4c6607e0a5d5?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1584214177574-0e3e4e4a1b3c?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'birds',
    subcategory: 'Cages & Habitats',
    brand: 'AvianHome',
    rating: 4.4,
    reviewCount: 67,
    inStock: true,
    stockCount: 12,
    features: ['Spacious design', 'Play top', 'Seed guards', 'Easy-clean bottom', 'Multiple perches'],
    materials: ['Wrought iron', 'Plastic', 'Wood perches'],
    sizes: ['Medium (18x18x24)', 'Large (24x18x30)'],
    colors: ['Black', 'White'],
    tags: ['cage', 'habitat', 'play top', 'spacious']
  },
  {
    id: '7',
    name: 'Fish Tank Starter Kit',
    description: 'Complete 10-gallon aquarium starter kit with filter, heater, LED light, and decorations. Perfect for beginners.',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1570891519019-4b1bb618857b?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'fish',
    subcategory: 'Tanks & Aquariums',
    brand: 'AquaStart',
    rating: 4.5,
    reviewCount: 198,
    inStock: true,
    stockCount: 34,
    features: ['Complete starter kit', 'LED lighting', 'Filter included', 'Heater included', 'Decorations included'],
    materials: ['Glass', 'Plastic', 'Silicone'],
    tags: ['aquarium', 'starter kit', 'beginner', 'complete'],
    isNew: true
  },
  {
    id: '8',
    name: 'Reptile Heat Lamp',
    description: 'Adjustable heat lamp with UVA/UVB lighting for reptiles. Essential for maintaining proper temperature.',
    price: 34.99,
    images: [
      'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1577567912240-7d8509a89722?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'reptiles',
    subcategory: 'Heating & Lighting',
    brand: 'ReptiHeat',
    rating: 4.2,
    reviewCount: 87,
    inStock: true,
    stockCount: 41,
    features: ['UVA/UVB lighting', 'Adjustable temperature', 'Ceramic emitter', 'Safety clamp'],
    materials: ['Ceramic', 'Metal', 'Plastic'],
    tags: ['heating', 'lighting', 'UVB', 'temperature'],
    isOnSale: true,
    discountPercentage: 13
  },
  {
    id: '9',
    name: 'Guinea Pig Habitat',
    description: 'Spacious guinea pig habitat with removable bottom, hay feeder, and water bottle. Easy to clean and maintain.',
    price: 69.99,
    images: [
      'https://images.unsplash.com/photo-1583337130417-3346a1bbe748?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1422568374078-57d432c8de21?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'small-animals',
    subcategory: 'Cages & Habitats',
    brand: 'SmallPetHome',
    rating: 4.6,
    reviewCount: 124,
    inStock: true,
    stockCount: 23,
    features: ['Spacious design', 'Easy to clean', 'Hay feeder included', 'Water bottle included', 'Multiple levels'],
    materials: ['Plastic', 'Metal wire', 'Wood'],
    sizes: ['Medium (30x18x16)', 'Large (40x24x18)'],
    tags: ['habitat', 'guinea pig', 'spacious', 'easy clean']
  },
  {
    id: '10',
    name: 'Dog Training Clicker',
    description: 'Professional dog training clicker with wrist strap. Perfect for positive reinforcement training.',
    price: 6.99,
    images: [
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'dogs',
    subcategory: 'Training',
    brand: 'TrainPro',
    rating: 4.7,
    reviewCount: 312,
    inStock: true,
    stockCount: 89,
    features: ['Loud click', 'Comfortable grip', 'Wrist strap', 'Durable construction'],
    materials: ['Plastic', 'Metal'],
    colors: ['Blue', 'Red', 'Black', 'Green'],
    tags: ['training', 'clicker', 'positive reinforcement', 'professional']
  },
  {
    id: '11',
    name: 'Cat Scratching Post',
    description: 'Tall cat scratching post with sisal rope and perch. Saves your furniture while giving cats a place to scratch.',
    price: 39.99,
    originalPrice: 49.99,
    images: [
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'cats',
    subcategory: 'Scratching',
    brand: 'ScratchPro',
    rating: 4.4,
    reviewCount: 178,
    inStock: true,
    stockCount: 31,
    features: ['Sisal rope', 'Sturdy base', 'Perch included', 'Easy assembly'],
    materials: ['Sisal rope', 'Wood', 'Carpet'],
    sizes: ['Medium (32in)', 'Tall (42in)'],
    colors: ['Beige', 'Gray'],
    tags: ['scratching', 'sisal', 'post', 'furniture protection'],
    isOnSale: true,
    discountPercentage: 20
  },
  {
    id: '12',
    name: 'Pet First Aid Kit',
    description: 'Complete pet first aid kit with essential supplies for emergencies. Includes bandages, antiseptic wipes, and more.',
    price: 29.99,
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'dogs',
    subcategory: 'Health & Wellness',
    brand: 'PetSafe',
    rating: 4.8,
    reviewCount: 94,
    inStock: true,
    stockCount: 47,
    features: ['Complete kit', 'Emergency supplies', 'Compact case', 'Easy to use'],
    materials: ['Various medical supplies'],
    tags: ['first aid', 'emergency', 'health', 'safety'],
    isNew: true
  }
]

export const featuredProducts = mockProducts.slice(0, 8)
export const newArrivals = mockProducts.filter(p => p.isNew)
export const saleProducts = mockProducts.filter(p => p.isOnSale)