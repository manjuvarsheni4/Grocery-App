
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { getProductsByCategory, products } from "@/data/products";
import { Category, Product } from "@/types";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products whenever category or search query changes
  useEffect(() => {
    let result = getProductsByCategory(selectedCategory);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar onSearch={handleSearch} />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-metamart-yellow-light to-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold text-metamart-yellow-dark md:text-4xl lg:text-5xl">
              Fresh Groceries, Delivered to Your Door
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-700">
              Shop from our wide selection of fresh fruits, vegetables, dairy products, and snacks.
              We deliver quality products directly to your home.
            </p>
            <Button className="rounded-full bg-metamart-yellow px-8 py-6 text-lg font-medium text-metamart-yellow-dark hover:bg-metamart-yellow-dark hover:text-white">
              Start Shopping
            </Button>
          </div>
        </section>

        {/* Category filter section */}
        <section className="container mx-auto mt-8 px-4">
          <h2 className="mb-4 text-2xl font-bold">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {['all', 'fruits', 'vegetables', 'dairy', 'snacks'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as Category)}
                className={`category-button ${
                  selectedCategory === category ? 'active' : ''
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* Products section */}
        <section className="container mx-auto mt-8 px-4">
          <h2 className="mb-6 text-2xl font-bold">
            {searchQuery 
              ? `Search Results for "${searchQuery}"` 
              : selectedCategory === 'all' 
                ? 'All Products' 
                : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
          </h2>
          
          {filteredProducts.length === 0 ? (
            <div className="rounded-lg bg-gray-50 p-8 text-center">
              <p className="text-lg text-gray-600">
                No products found. Try a different search term or category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
        
        {/* Features section */}
        <section className="bg-gray-50 py-12 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Why Choose Meta Mart?</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 text-lg font-semibold text-metamart-yellow-dark">Fresh Products</h3>
                <p className="text-gray-600">
                  We source our products directly from local farmers and suppliers to ensure freshness.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 text-lg font-semibold text-metamart-yellow-dark">Fast Delivery</h3>
                <p className="text-gray-600">
                  Get your groceries delivered to your doorstep within hours of placing your order.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 text-lg font-semibold text-metamart-yellow-dark">Best Prices</h3>
                <p className="text-gray-600">
                  We offer competitive prices and regular discounts to provide the best value.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
