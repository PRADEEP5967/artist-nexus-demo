
import React from 'react';
import CategoryCard from '@/components/CategoryCard';
import { artistCategories } from '@/data/mockData';

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Artists by Category</h2>
          <p className="text-xl text-gray-600">
            Discover talented performers across various categories for your perfect event
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artistCategories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
