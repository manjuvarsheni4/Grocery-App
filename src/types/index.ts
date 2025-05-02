
// User related types
export interface User {
  id: string;
  email: string;
  name: string;
}

// Product related types
export type Category = 'fruits' | 'vegetables' | 'dairy' | 'snacks' | 'all';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  description: string;
  unit: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

// Order related types
export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  customerName: string;
  address: string;
  date: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}
