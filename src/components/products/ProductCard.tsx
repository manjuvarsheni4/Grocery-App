
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please login to add items to your cart",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    addToCart(product, 1);
  };

  // Placeholder image as fallback
  const imageSrc = product.image.startsWith('http') || product.image.startsWith('/') 
    ? product.image 
    : '/placeholder.svg';

  return (
    <div className="product-card flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative mb-2 aspect-square w-full overflow-hidden bg-gray-100">
        <img 
          src={imageSrc}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
          onError={(e) => {
            // If image fails to load, replace with placeholder
            (e.target as HTMLImageElement).src = '/placeholder.svg';
          }}
        />
        <div className="absolute left-2 top-2 rounded-full bg-metamart-yellow px-2 py-1">
          <span className="text-xs font-medium text-metamart-yellow-dark">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="mb-2 text-sm text-gray-600">{product.description}</p>
        
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-bold">
            ${product.price.toFixed(2)}
            <span className="text-xs text-gray-500"> / {product.unit}</span>
          </span>
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="rounded-full bg-metamart-yellow text-metamart-yellow-dark hover:bg-metamart-yellow-dark hover:text-white"
          >
            <ShoppingCart size={16} className="mr-1" />
            {isLoggedIn ? "Add" : "Login to Add"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
