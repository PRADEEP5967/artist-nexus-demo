
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchComponentProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      {/* Search Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggle}
        className="relative hover:bg-purple-50 hover:text-purple-600 transition-colors"
      >
        <Search className="h-5 w-5" />
      </Button>

      {/* Search Bar */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full pb-4 bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search artists, categories, locations..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchComponent;
