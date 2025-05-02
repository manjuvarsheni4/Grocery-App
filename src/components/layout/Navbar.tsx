
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

// Import refactored components
import { Logo } from './navbar/Logo';
import { SearchBar } from './navbar/SearchBar';
import { DesktopNav } from './navbar/DesktopNav';
import { MobileActions } from './navbar/MobileActions';
import { MobileMenu } from './navbar/MobileMenu';

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export const Navbar = ({ onSearch }: NavbarProps) => {
  const { isLoggedIn, user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo component */}
          <Logo />

          {/* Search Bar - Desktop */}
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
            className="hidden flex-1 max-w-md md:mx-4 md:flex"
          />

          {/* Desktop Navigation Links */}
          <DesktopNav 
            isLoggedIn={isLoggedIn}
            user={user}
            handleLogout={handleLogout}
            totalItems={totalItems}
          />
          
          {/* Mobile Menu Button */}
          <MobileActions 
            totalItems={totalItems}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          isLoggedIn={isLoggedIn}
          user={user}
          handleLogout={handleLogout}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </nav>
  );
};
