
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryCard from '@/components/CategoryCard';
import { artistCategories } from '@/data/mockData';
import { Music, Users, Mic, Headphones } from 'lucide-react';

const categoryIcons = {
  musician: <Music className="h-6 w-6 text-white" />,
  dancer: <Users className="h-6 w-6 text-white" />,
  speaker: <Mic className="h-6 w-6 text-white" />,
  dj: <Headphones className="h-6 w-6 text-white" />
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Talented Artists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our curated selection of professional artists across different categories. 
              Find the perfect match for your next event.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artistCategories.map((category) => (
              <div key={category.category} className="animate-fade-in">
                <CategoryCard
                  title={category.title}
                  description={category.description}
                  icon={categoryIcons[category.category as keyof typeof categoryIcons]}
                  artistCount={category.artistCount}
                  imageUrl={category.imageUrl}
                  category={category.category}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose ArtistNexus?
            </h2>
            <p className="text-xl text-gray-600">
              The easiest way to book talented artists for your events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Verified Artists</h3>
              <p className="text-gray-600">All our artists are thoroughly vetted and verified to ensure the highest quality performances.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Booking</h3>
              <p className="text-gray-600">Simple and secure booking process with instant quotes and seamless communication.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Music className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">Satisfaction guaranteed with our 5-star rated artists and comprehensive event support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
