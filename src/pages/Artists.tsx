
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import ArtistCard from '@/components/ArtistCard';
import { mockArtists } from '@/data/mockData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter, Grid, List, X, SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Artists = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', 'musician', 'dancer', 'speaker', 'dj'];
  const locations = ['all', 'Mumbai, India', 'Delhi, India', 'Bangalore, India', 'Chennai, India', 'Kolkata, India', 'Pune, India', 'Jaipur, India', 'Hyderabad, India'];
  const priceRanges = ['all', '₹0-10,000', '₹10,000-25,000', '₹25,000-50,000', '₹50,000+'];

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
          case '₹0-10,000':
            matchesPrice = artistPrice <= 10000;
            break;
          case '₹10,000-25,000':
            matchesPrice = artistPrice >= 10000 && artistPrice <= 25000;
            break;
          case '₹25,000-50,000':
            matchesPrice = artistPrice >= 25000 && artistPrice <= 50000;
            break;
          case '₹50,000+':
            matchesPrice = artistPrice >= 50000;
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
        {/* Mobile Search Bar */}
        <Card className="mb-6 lg:hidden">
          <CardContent className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search artists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">{filteredArtists.length} found</span>
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none px-3"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none px-3"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Filters (Collapsible) */}
        {(showFilters || window.innerWidth >= 1024) && (
          <Card className="mb-8 lg:block">
            <CardContent className="p-4 lg:p-6">
              {/* Desktop Search and Filters */}
              <div className="hidden lg:flex lg:flex-col lg:gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search artists by name or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Filter Controls */}
              <div className="flex flex-col gap-3 lg:flex-row lg:gap-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full lg:w-40">
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
                  <SelectTrigger className="w-full lg:w-48">
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
                  <SelectTrigger className="w-full lg:w-48">
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

                {activeFiltersCount > 0 && (
                  <Button variant="ghost" onClick={clearFilters} className="flex items-center whitespace-nowrap">
                    <X className="h-4 w-4 mr-1" />
                    Clear ({activeFiltersCount})
                  </Button>
                )}
              </div>

              {/* Desktop View Toggle and Results Count */}
              <div className="hidden lg:flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Filter className="h-3 w-3" />
                      {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} active
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-4">
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
            </CardContent>
          </Card>
        )}

        {/* Results Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6' 
            : 'space-y-4'
        }`}>
          {filteredArtists.map((artist) => (
            <div key={artist.id} className="animate-fade-in">
              <ArtistCard {...artist} />
            </div>
          ))}
        </div>

        {/* No Results State */}
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
