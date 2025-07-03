
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopArtistsSection: React.FC = () => {
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

  return (
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
  );
};

export default TopArtistsSection;
