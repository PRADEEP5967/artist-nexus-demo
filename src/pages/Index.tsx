
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CategoryCard from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { Star, Award, Shield, Clock, Heart, Users, Calendar, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { artistCategories } from '@/data/mockData';

const Index = () => {
  const topIndianArtists = [
    {
      name: "Raghav Sharma",
      category: "Classical Vocalist",
      location: "Mumbai, India",
      rating: 4.9,
      bookings: 120,
      image: "/placeholder.svg"
    },
    {
      name: "Priya Nair",
      category: "Bharatanatyam Dancer",
      location: "Chennai, India",
      rating: 5.0,
      bookings: 95,
      image: "/placeholder.svg"
    },
    {
      name: "Arjun Kapoor",
      category: "Bollywood DJ",
      location: "Delhi, India",
      rating: 4.8,
      bookings: 150,
      image: "/placeholder.svg"
    },
    {
      name: "Kavita Desai",
      category: "Motivational Speaker",
      location: "Bangalore, India",
      rating: 4.9,
      bookings: 80,
      image: "/placeholder.svg"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Verified Artists", icon: Users },
    { number: "15,000+", label: "Successful Events", icon: Calendar },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "50+", label: "Cities Covered", icon: Trophy }
  ];

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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
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

      {/* Top Rated Indian Artists Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Rated <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Indian Artists</span>
            </h2>
            <p className="text-xl text-gray-600">
              Meet some of India's most talented and highly-rated artists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topIndianArtists.map((artist, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {artist.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-bold">{artist.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{artist.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{artist.category}</p>
                  <p className="text-gray-600 text-sm mb-4">{artist.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{artist.bookings} bookings</span>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/artists">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg font-semibold rounded-xl">
                View All Artists
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ArtistNexus?</h2>
            <p className="text-xl text-gray-600">
              We make it easy to find and book the perfect artist for your event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Perfect Artist?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of satisfied clients who found amazing artists through ArtistNexus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/artists">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all hover:scale-105">
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

      <Footer />
    </div>
  );
};

export default Index;
