
import React from 'react';
import { Shield, Clock, Award, Heart } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All artists are verified and rated by previous clients"
    },
    {
      icon: Clock,
      title: "Quick Booking",
      description: "Book your perfect artist in just a few clicks"
    },
    {
      icon: Award,
      title: "Top Rated Artists",
      description: "Access to India's most talented and professional artists"
    },
    {
      icon: Heart,
      title: "Customer Support",
      description: "24/7 support to ensure your event is perfect"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ArtistNexus?</h2>
          <p className="text-xl text-gray-600">
            We make it easy to find and book the perfect artist for your event
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
