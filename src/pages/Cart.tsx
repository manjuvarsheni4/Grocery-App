
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { getProductSuggestions } from '@/data/products';
import { Product } from '@/types';
import ProductCard from '@/components/products/ProductCard';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalAmount } = useCart();
  const { isLoggedIn } = useAuth();
  const [suggestions, setSuggestions] = useState<Product[]>([]);

  useEffect(() => {
    if (items.length > 0) {
      // Generate product suggestions based on cart contents
      const currentProductIds = items.map(item => item.product.id);
      const suggestedProducts = getProductSuggestions(currentProductIds);
      setSuggestions(suggestedProducts);
    } else {
      setSuggestions([]);
    }
  }, [items]);

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-10">
          <div className="rounded-lg bg-gray-50 p-8 text-center shadow-sm">
            <h1 className="mb-4 text-2xl font-bold">Your Cart is Empty</h1>
            <p className="mb-6 text-gray-600">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/">
              <Button className="bg-metamart-yellow text-metamart-yellow-dark hover:bg-metamart-yellow-dark hover:text-white">
                Start Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <h1 className="mb-8 border-b pb-4 text-2xl font-bold">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart items */}
          <div className="col-span-2">
            <div className="rounded-lg border bg-white shadow-sm">
              {items.map((item) => (
                <div 
                  key={item.product.id}
                  className="flex flex-col border-b p-4 last:border-b-0 md:flex-row md:items-center"
                >
                  {/* Product image */}
                  <div className="mb-4 mr-0 h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100 md:mb-0 md:mr-4">
                    <img
                      src={item.product.image.startsWith('http') || item.product.image.startsWith('/') 
                        ? item.product.image 
                        : '/placeholder.svg'}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  {/* Product info */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">{item.product.name}</h3>
                      <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="text-sm text-gray-500">${item.product.price.toFixed(2)} / {item.product.unit}</p>
                    
                    {/* Quantity controls and remove button */}
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <Button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                        >
                          <Minus size={14} />
                        </Button>
                        <span className="mx-2 min-w-8 text-center">{item.quantity}</span>
                        <Button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                        >
                          <Plus size={14} />
                        </Button>
                      </div>
                      <Button 
                        onClick={() => removeFromCart(item.product.id)}
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 size={16} className="mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order summary */}
          <div className="col-span-1">
            <div className="sticky top-24 rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
              <div className="space-y-2 border-b pb-4">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(totalAmount * 0.07).toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${(totalAmount + totalAmount * 0.07).toFixed(2)}</span>
              </div>
              <div className="mt-6">
                <Link to={isLoggedIn ? "/checkout" : "/login"}>
                  <Button 
                    className="w-full bg-metamart-yellow text-metamart-yellow-dark hover:bg-metamart-yellow-dark hover:text-white"
                    disabled={!isLoggedIn}
                  >
                    {isLoggedIn ? (
                      <>
                        Checkout <ArrowRight size={16} className="ml-2" />
                      </>
                    ) : (
                      'Login to Checkout'
                    )}
                  </Button>
                </Link>
                {!isLoggedIn && (
                  <p className="mt-2 text-center text-sm text-gray-500">
                    Please <Link to="/login" className="text-blue-500 hover:underline">login</Link> or <Link to="/signup" className="text-blue-500 hover:underline">sign up</Link> to checkout
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Suggestions section */}
        {suggestions.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-xl font-semibold">You Might Also Like</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {suggestions.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
