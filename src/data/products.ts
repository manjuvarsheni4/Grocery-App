
import { Product } from '../types';

export const products: Product[] = [
  // Fruits
  {
    id: 'fruit-001',
    name: 'Banana',
    price: 0.49,
    image: '/images/banana.jpg',
    category: 'fruits',
    description: 'Fresh yellow bananas, perfect for a healthy snack or smoothie.',
    unit: 'each'
  },
  {
    id: 'fruit-002',
    name: 'Apple',
    price: 0.99,
    image: '/images/apple.jpg',
    category: 'fruits',
    description: 'Crisp and juicy red apples, locally sourced and organic.',
    unit: 'each'
  },
  {
    id: 'fruit-003',
    name: 'Oranges',
    price: 1.29,
    image: '/images/orange.jpg',
    category: 'fruits',
    description: 'Sweet and juicy oranges, excellent source of vitamin C.',
    unit: 'each'
  },
  {
    id: 'fruit-004',
    name: 'Strawberries',
    price: 3.99,
    image: '/images/strawberry.jpg',
    category: 'fruits',
    description: 'Sweet and fresh strawberries, perfect for desserts or as a snack.',
    unit: 'pack'
  },

  // Vegetables
  {
    id: 'veg-001',
    name: 'Carrot',
    price: 0.79,
    image: '/images/carrot.jpg',
    category: 'vegetables',
    description: 'Fresh and crunchy carrots, rich in vitamins and minerals.',
    unit: 'each'
  },
  {
    id: 'veg-002',
    name: 'Broccoli',
    price: 1.99,
    image: '/images/broccoli.jpg',
    category: 'vegetables',
    description: 'Nutritious broccoli florets, excellent for stir-fries and salads.',
    unit: 'head'
  },
  {
    id: 'veg-003',
    name: 'Spinach',
    price: 2.49,
    image: '/images/spinach.jpg',
    category: 'vegetables',
    description: 'Fresh spinach leaves, perfect for salads and cooking.',
    unit: 'bunch'
  },
  {
    id: 'veg-004',
    name: 'Tomato',
    price: 0.99,
    image: '/images/tomato.jpg',
    category: 'vegetables',
    description: 'Ripe red tomatoes, farm-fresh and juicy.',
    unit: 'each'
  },

  // Dairy
  {
    id: 'dairy-001',
    name: 'Milk',
    price: 2.99,
    image: '/images/milk.jpg',
    category: 'dairy',
    description: 'Fresh whole milk, pasteurized and vitamin-enriched.',
    unit: 'gallon'
  },
  {
    id: 'dairy-002',
    name: 'Cheese',
    price: 4.99,
    image: '/images/cheese.jpg',
    category: 'dairy',
    description: 'Premium cheddar cheese, perfect for sandwiches and cooking.',
    unit: 'pack'
  },
  {
    id: 'dairy-003',
    name: 'Yogurt',
    price: 1.49,
    image: '/images/yogurt.jpg',
    category: 'dairy',
    description: 'Creamy Greek yogurt, high in protein and probiotics.',
    unit: 'cup'
  },
  {
    id: 'dairy-004',
    name: 'Butter',
    price: 3.49,
    image: '/images/butter.jpg',
    category: 'dairy',
    description: 'Pure unsalted butter, perfect for cooking and baking.',
    unit: 'stick'
  },

  // Snacks
  {
    id: 'snack-001',
    name: 'Chips',
    price: 3.99,
    image: '/images/chips.jpg',
    category: 'snacks',
    description: 'Crunchy potato chips, lightly salted for the perfect snack.',
    unit: 'bag'
  },
  {
    id: 'snack-002',
    name: 'Chocolate',
    price: 2.99,
    image: '/images/chocolate.jpg',
    category: 'snacks',
    description: 'Rich milk chocolate bar, the perfect sweet treat.',
    unit: 'bar'
  },
  {
    id: 'snack-003',
    name: 'Cookies',
    price: 4.49,
    image: '/images/cookies.jpg',
    category: 'snacks',
    description: 'Freshly baked chocolate chip cookies, soft and delicious.',
    unit: 'pack'
  },
  {
    id: 'snack-004',
    name: 'Popcorn',
    price: 2.49,
    image: '/images/popcorn.jpg',
    category: 'snacks',
    description: 'Light and fluffy popcorn, perfect for movie nights.',
    unit: 'bag'
  }
];

export const getProductsByCategory = (category: string) => {
  if (category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getProductSuggestions = (currentProductIds: string[]) => {
  // Get categories of current products
  const currentProducts = products.filter(p => currentProductIds.includes(p.id));
  const categories = [...new Set(currentProducts.map(p => p.category))];
  
  // Get other products from the same categories that aren't in the current list
  const suggestedProducts = products.filter(p => 
    categories.includes(p.category) && !currentProductIds.includes(p.id)
  );
  
  // Return up to 4 suggestions
  return suggestedProducts.slice(0, 4);
};
