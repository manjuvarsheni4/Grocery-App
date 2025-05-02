
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface MobileMenuProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  isLoggedIn: boolean;
  user: { name?: string } | null;
  handleLogout: () => void;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const MobileMenu = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  isLoggedIn,
  user,
  handleLogout,
  setIsMobileMenuOpen
}: MobileMenuProps) => {
  return (
    <div className="border-t border-gray-200 bg-white px-4 py-2 md:hidden">
      {/* Search Bar - Mobile */}
      <form onSubmit={handleSearch} className="mb-4 mt-2">
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-full border border-metamart-yellow py-2 pl-4 pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            className="absolute right-1 top-0 h-full rounded-full text-metamart-yellow-dark"
          >
            <Search size={18} />
          </Button>
        </div>
      </form>
      
      <div className="flex flex-col space-y-2 pb-3">
        {isLoggedIn ? (
          <>
            <span className="py-2 text-sm">Hello, {user?.name}</span>
            <Link 
              to="/profile" 
              className="flex items-center rounded-lg px-3 py-2 text-sm hover:bg-metamart-yellow-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User size={18} className="mr-2" />
              Profile
            </Link>
            <button 
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }} 
              className="flex w-full items-center rounded-lg px-3 py-2 text-left text-sm hover:bg-metamart-yellow-light"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className="rounded-lg px-3 py-2 text-center hover:bg-metamart-yellow-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="rounded-lg bg-metamart-yellow px-3 py-2 text-center font-medium text-metamart-yellow-dark hover:bg-metamart-yellow-dark hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
