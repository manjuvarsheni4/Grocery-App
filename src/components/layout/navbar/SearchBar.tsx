
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  className?: string;
}

export const SearchBar = ({ 
  searchQuery, 
  setSearchQuery, 
  handleSearch,
  className = ""
}: SearchBarProps) => {
  return (
    <form 
      onSubmit={handleSearch} 
      className={`${className}`}
    >
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
  );
};
