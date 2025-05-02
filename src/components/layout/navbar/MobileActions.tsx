
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartButton } from './CartButton';

interface MobileActionsProps {
  totalItems: number;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const MobileActions = ({ 
  totalItems, 
  isMobileMenuOpen, 
  toggleMobileMenu 
}: MobileActionsProps) => {
  return (
    <div className="flex items-center gap-2 md:hidden">
      <CartButton totalItems={totalItems} />
      <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
    </div>
  );
};
