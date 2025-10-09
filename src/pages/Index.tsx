
import React from 'react';
import Header from '@/components/Header';
import ModernFooter from '@/components/ModernFooter';
import HeroSection from '@/components/sections/HeroSection';
import { SEO } from '@/components/SEO';
import LiveEventsCounter from '@/components/sections/LiveEventsCounter';
import StatsSection from '@/components/sections/StatsSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import TopArtistsSection from '@/components/sections/TopArtistsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';
import FeaturedArtistsCarousel from '@/components/sections/FeaturedArtistsCarousel';

const Index = () => {
  const handleSearch = (query: string, location: string, date: string) => {
    console.log('Search:', { query, location, date });
    // TODO: Implement search functionality
  };

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <HeroSection onSearch={handleSearch} />
        <LiveEventsCounter />
        <StatsSection />
        <CategoriesSection />
        <FeaturedArtistsCarousel />
        <TopArtistsSection />
        <TestimonialsSection />
        <FeaturesSection />
        <CTASection />
        <ModernFooter />
      </div>
    </>
  );
};

export default Index;
