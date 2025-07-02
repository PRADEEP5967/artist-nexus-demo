
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import ArtistCard from '@/components/ArtistCard';
import { mockArtists } from '@/data/mockData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Grid, List, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Artists = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['all', 'musician', 'dancer', 'speaker', 'dj'];
  const locations = ['all', 'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Miami, FL', 'Austin, TX', 'Seattle, WA', 'Boston, MA', 'San Francisco, CA'];
  const priceRanges = ['all', '$0-300', '$300-600', '$600-900', '$900+'];

  const filteredArtists = useMemo(() => {
    return mockArtists.filter(artist => {
      const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          artist.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || artist.category === selectedCategory;
      const matchesLocation = selectedLocation === 'all' || artist.location === selectedLocation;
      
      let matchesPrice = true;
      if (selectedPriceRange !== 'all') {
        const artistPrice = parseInt(artist.priceRange.replace(/[^0-9]/g, ''));
        switch (selectedPriceRange) {
          case '$0-300':
            matchesPrice = artistPrice <= 300;
            break;
          case '$300-600':
            matchesPrice = artistPrice >= 300 && artistPrice <= 600;
            break;
          case '$600-900':
            matchesPrice = artistPrice >= 600 && artistPrice <= 900;
            break;
          case '$900+':
            matchesPrice = artistPrice >= 900;
            break;
        }
      }
      
      return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedLocation, selectedPriceRange]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedLocation('all');
    setSelectedPriceRange('all');
    setSearchParams({});
  };

  const activeFiltersCount = [selectedCategory, selectedLocation, selectedPriceRange].filter(f => f !== 'all').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Browse Artists</h1>
          <p className="text-xl text-purple-100">Discover talented performers for your next event</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search artists by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location === 'all' ? 'All Locations' : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range === 'all' ? 'All Prices' : range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters and View Toggle */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {activeFiltersCount > 0 && (
                <>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Filter className="h-3 w-3" />
                    {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} active
                  </Badge>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="h-4 w-4 mr-1" />
                    Clear all
                  </Button>
                </>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{filteredArtists.length} artists found</span>
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className={`grid ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'grid-cols-1 gap-4'
        }`}>
          {filteredArtists.map((artist) => (
            <div key={artist.id} className="animate-fade-in">
              <ArtistCard {...artist} />
            </div>
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎭</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No artists found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters to see more results.</p>
            <Button onClick={clearFilters} variant="outline">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artists;
