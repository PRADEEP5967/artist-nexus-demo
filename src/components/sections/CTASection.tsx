
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Find Your Perfect Artist?
        </h2>
        <p className="text-xl text-purple-100 mb-8">
          Join thousands of satisfied clients who found amazing artists through ArtistNexus
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/artists">
            <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all hover:scale-105 shadow-lg">
              Browse Artists Now
            </Button>
          </Link>
          <Link to="/onboarding">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all hover:scale-105">
              Join as Artist
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
