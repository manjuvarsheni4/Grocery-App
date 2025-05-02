
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartButton } from './CartButton';

interface DesktopNavProps {
  isLoggedIn: boolean;
  user: { name?: string } | null;
  handleLogout: () => void;
  totalItems: number;
}

export const DesktopNav = ({ isLoggedIn, user, handleLogout, totalItems }: DesktopNavProps) => {
  return (
    <div className="hidden items-center gap-4 md:flex">
      {isLoggedIn ? (
        <>
          <span className="text-sm">Hello, {user?.name}</span>
          <Link to="/profile">
            <Button variant="ghost" size="sm">
              <User size={20} className="mr-1" />
              Profile
            </Button>
          </Link>
          <Button onClick={handleLogout} variant="outline" size="sm">
            Logout
          </Button>
        </>
      ) : (
        <>
          <Link to="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="default" size="sm">
              Sign Up
            </Button>
          </Link>
        </>
      )}
      
      <CartButton totalItems={totalItems} />
    </div>
  );
};
