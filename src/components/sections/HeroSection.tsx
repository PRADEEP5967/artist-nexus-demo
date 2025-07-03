
import React from 'react';
import SearchBar from '@/components/SearchBar';
import PSLogo from '@/components/PSLogo';

interface HeroSectionProps {
  onSearch: (query: string, location: string, date: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <PSLogo size={80} className="animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find Perfect
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Artists
            </span>
            for Your Events
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with India's most talented musicians, dancers, speakers, and performers. 
            Make your event unforgettable with verified artists.
          </p>
          
          {/* Enhanced Search Bar */}
          <SearchBar onSearch={onSearch} className="mb-8" />
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5K+</div>
              <div className="text-purple-200">Verified Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15K+</div>
              <div className="text-purple-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-200">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-purple-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
