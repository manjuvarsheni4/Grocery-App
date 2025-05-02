
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { Address } from '@/types';

const Checkout = () => {
  const { items, totalAmount, clearCart } = useCart();
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  
  // Form state
  const [customerName, setCustomerName] = useState(user?.name || '');
  const [address, setAddress] = useState<Address>({
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  
  useEffect(() => {
    // Redirect to login if not logged in
    if (!isLoggedIn) {
      navigate('/login');
      toast({
        title: 'Please login first',
        description: 'You need to be logged in to access the checkout page',
        variant: 'destructive'
      });
    }
    
    // Redirect to cart if cart is empty
    if (items.length === 0) {
      navigate('/cart');
      toast({
        title: 'Empty Cart',
        description: 'Your cart is empty. Add some products before checkout.',
        variant: 'destructive'
      });
    }
  }, [isLoggedIn, items, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!customerName || !address.street || !address.city || !address.state || !address.zipCode || !paymentMethod) {
      toast({
        title: 'Missing Information',
        description: 'Please fill out all required fields',
        variant: 'destructive'
      });
      return;
    }
    
    // In a real app, we would send the order to a backend here
    
    // Generate order ID for confirmation
    const orderId = `ORD-${Math.floor(Math.random() * 10000)}-${Date.now().toString().slice(-4)}`;
    
    // Create a formatted address string
    const fullAddress = `${address.street}, ${address.city}, ${address.state}, ${address.zipCode}`;
    
    // Save order in localStorage for demo purposes
    const order = {
      id: orderId,
      items: items,
      totalAmount: totalAmount + totalAmount * 0.07, // Including tax
      customerName,
      address: fullAddress,
      date: new Date().toISOString()
    };
    
    const orders = JSON.parse(localStorage.getItem('metamart-orders') || '[]');
    orders.push(order);
    localStorage.setItem('metamart-orders', JSON.stringify(orders));
    
    // Clear cart
    clearCart();
    
    // Show success message
    toast({
      title: 'Order Placed Successfully',
      description: `Your order #${orderId} has been placed`,
    });
    
    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 border-b pb-4 text-2xl font-bold">Checkout</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Shipping Information</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="customerName">Full Name</Label>
                  <Input 
                    id="customerName"
                    type="text" 
                    value={customerName} 
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="street">Street Address</Label>
                  <Input 
                    id="street"
                    type="text" 
                    value={address.street} 
                    onChange={(e) => setAddress({...address, street: e.target.value})}
                    placeholder="1234 Main St"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city"
                      type="text" 
                      value={address.city} 
                      onChange={(e) => setAddress({...address, city: e.target.value})}
                      placeholder="Cityville"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input 
                      id="state"
                      type="text" 
                      value={address.state} 
                      onChange={(e) => setAddress({...address, state: e.target.value})}
                      placeholder="CA"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input 
                      id="zipCode"
                      type="text" 
                      value={address.zipCode} 
                      onChange={(e) => setAddress({...address, zipCode: e.target.value})}
                      placeholder="12345"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Payment Method</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <input 
                    id="credit-card" 
                    name="paymentMethod" 
                    type="radio" 
                    value="credit-card" 
                    checked={paymentMethod === 'credit-card'} 
                    onChange={() => setPaymentMethod('credit-card')} 
                    className="h-4 w-4 text-metamart-yellow focus:ring-metamart-yellow" 
                    required
                  />
                  <Label htmlFor="credit-card" className="ml-2">Credit Card</Label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="paypal" 
                    name="paymentMethod" 
                    type="radio" 
                    value="paypal" 
                    checked={paymentMethod === 'paypal'} 
                    onChange={() => setPaymentMethod('paypal')} 
                    className="h-4 w-4 text-metamart-yellow focus:ring-metamart-yellow" 
                  />
                  <Label htmlFor="paypal" className="ml-2">PayPal</Label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="cash" 
                    name="paymentMethod" 
                    type="radio" 
                    value="cash" 
                    checked={paymentMethod === 'cash'} 
                    onChange={() => setPaymentMethod('cash')} 
                    className="h-4 w-4 text-metamart-yellow focus:ring-metamart-yellow" 
                  />
                  <Label htmlFor="cash" className="ml-2">Cash on Delivery</Label>
                </div>
              </div>
              
              {/* Note that in a real app, we would add credit card fields if that option is selected */}
            </div>
            
            <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
              
              <div className="max-h-60 overflow-auto">
                {items.map((item) => (
                  <div key={item.product.id} className="mb-2 flex justify-between border-b pb-2 last:border-b-0">
                    <div>
                      <span className="font-medium">{item.product.name}</span>
                      <span className="ml-2 text-sm text-gray-500">x{item.quantity}</span>
                    </div>
                    <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 space-y-2 border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (7%)</span>
                  <span>${(totalAmount * 0.07).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${(totalAmount + totalAmount * 0.07).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-metamart-yellow px-8 text-lg font-semibold text-metamart-yellow-dark hover:bg-metamart-yellow-dark hover:text-white"
              >
                Place Order
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
