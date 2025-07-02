import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CategoryCard from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { Star, Award, Shield, Clock, Heart, Users, Calendar, Trophy, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { artistCategories } from '@/data/mockData';
import SearchBar from '@/components/SearchBar';
import PSLogo from '@/components/PSLogo';

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

  const handleSearch = (query: string, location: string, date: string) => {
    console.log('Search:', { query, location, date });
    // TODO: Implement search functionality
  };

  const testimonials = [
    {
      name: "Rajesh Kumar",
      event: "Wedding Celebration",
      rating: 5,
      comment: "Found the perfect classical singer for our wedding. The booking process was seamless and the artist exceeded our expectations!",
      location: "Mumbai"
    },
    {
      name: "Priya Singh",
      event: "Corporate Event",
      rating: 5,
      comment: "ArtistNexus helped us find an amazing motivational speaker for our annual conference. Highly recommended!",
      location: "Delhi"
    },
    {
      name: "Amit Patel",
      event: "Birthday Party",
      rating: 5,
      comment: "The DJ we booked through ArtistNexus made our party unforgettable. Great platform with verified artists!",
      location: "Bangalore"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Enhanced Hero Section */}
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
            <SearchBar onSearch={handleSearch} className="mb-8" />
            
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

      {/* Live Events Counter */}
      <section className="py-8 bg-gradient-to-r from-green-500 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-white">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">LIVE: 127 events happening right now across India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <span className="relative text-white text-4xl font-bold z-10">
                      {artist.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-bold">{artist.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    VERIFIED
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{artist.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{artist.category}</p>
                  <p className="text-gray-600 text-sm mb-4 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {artist.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{artist.bookings} bookings</span>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group-hover:scale-105 transition-transform">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/artists">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform">
                View All Artists
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Real experiences from satisfied customers across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.event} • {testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* CTA Section */}
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

      <Footer />
    </div>
  );
};

export default Index;
