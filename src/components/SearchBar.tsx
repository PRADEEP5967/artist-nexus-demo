
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch?: (query: string, location: string, date: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = "" }) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    onSearch?.(query, location, date);
  };

  const clearSearch = () => {
    setQuery('');
    setLocation('');
    setDate('');
    setShowFilters(false);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {/* Main Search Bar */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search artists, musicians, speakers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-0 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Location Input */}
          <div className="flex-1 relative border-t md:border-t-0 md:border-l border-gray-200">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Location (City, State)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-0 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Date Input */}
          <div className="flex-1 relative border-t md:border-t-0 md:border-l border-gray-200">
            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-0 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex border-t md:border-t-0 md:border-l border-gray-200">
            <Button
              variant="ghost"
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-4 hover:bg-gray-50 rounded-none"
            >
              <Filter className="h-5 w-5" />
            </Button>
            {(query || location || date) && (
              <Button
                variant="ghost"
                onClick={clearSearch}
                className="px-4 py-4 hover:bg-gray-50 rounded-none"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
            <Button
              onClick={handleSearch}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-none rounded-r-2xl md:rounded-r-2xl text-white font-semibold"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">All Categories</option>
                  <option value="musicians">Musicians</option>
                  <option value="dancers">Dancers</option>
                  <option value="speakers">Speakers</option>
                  <option value="djs">DJs</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">Any Price</option>
                  <option value="0-5000">₹0 - ₹5,000</option>
                  <option value="5000-15000">₹5,000 - ₹15,000</option>
                  <option value="15000-50000">₹15,000 - ₹50,000</option>
                  <option value="50000+">₹50,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">Any Rating</option>
                  <option value="4.5+">4.5+ Stars</option>
                  <option value="4+">4+ Stars</option>
                  <option value="3.5+">3.5+ Stars</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Popular Searches */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <span className="text-sm text-gray-600">Popular:</span>
        {['Wedding Singers', 'Corporate Speakers', 'Classical Dancers', 'Party DJs'].map((term, index) => (
          <button
            key={index}
            onClick={() => setQuery(term)}
            className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
