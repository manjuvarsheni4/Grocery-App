
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartButtonProps {
  totalItems: number;
}

export const CartButton = ({ totalItems }: CartButtonProps) => {
  return (
    <Link to="/cart" className="relative">
      <Button 
        variant="outline" 
        size="icon" 
        className="relative rounded-full border-metamart-yellow text-metamart-yellow-dark hover:bg-metamart-yellow-light hover:text-metamart-yellow-dark"
      >
        <ShoppingCart size={20} />
        {totalItems > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-metamart-yellow text-xs font-bold text-metamart-yellow-dark">
            {totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
};
