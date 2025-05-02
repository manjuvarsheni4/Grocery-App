
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="rounded-full bg-metamart-yellow p-2">
        <ShoppingCart size={24} className="text-metamart-yellow-dark" />
      </div>
      <span className="hidden text-xl font-bold text-metamart-yellow-dark md:inline">
        Meta Mart
      </span>
    </Link>
  );
};
