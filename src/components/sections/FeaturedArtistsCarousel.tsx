
import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedArtistsCarousel: React.FC = () => {
  const featuredArtists = [
    {
      id: 1,
      name: "Ananya Sharma",
      category: "Classical Vocalist",
      location: "Mumbai, India",
      rating: 4.9,
      price: "₹15,000",
      image: "/placeholder.svg",
      nextAvailable: "Dec 15",
      speciality: "Wedding Songs"
    },
    {
      id: 2,
      name: "Rohan Mehta",
      category: "Bollywood DJ",
      location: "Delhi, India", 
      rating: 4.8,
      price: "₹12,000",
      image: "/placeholder.svg",
      nextAvailable: "Dec 18",
      speciality: "Party Mix"
    },
    {
      id: 3,
      name: "Kavya Nair",
      category: "Bharatanatyam Dancer",
      location: "Chennai, India",
      rating: 5.0,
      price: "₹18,000",
      image: "/placeholder.svg",
      nextAvailable: "Dec 20",
      speciality: "Traditional Dance"
    },
    {
      id: 4,
      name: "Arjun Singh",
      category: "Motivational Speaker",
      location: "Bangalore, India",
      rating: 4.7,
      price: "₹25,000",
      image: "/placeholder.svg",
      nextAvailable: "Dec 22",
      speciality: "Corporate Events"
    },
    {
      id: 5,
      name: "Priya Joshi",
      category: "Folk Singer",
      location: "Jaipur, India",
      rating: 4.9,
      price: "₹10,000",
      image: "/placeholder.svg",
      nextAvailable: "Dec 25",
      speciality: "Rajasthani Folk"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Artists</span>
          </h2>
          <p className="text-xl text-gray-600">
            Handpicked top performers available for your events
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredArtists.map((artist) => (
              <CarouselItem key={artist.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
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
                      FEATURED
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{artist.name}</h3>
                    <p className="text-purple-600 font-medium mb-2">{artist.category}</p>
                    <p className="text-gray-600 text-sm mb-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {artist.location}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Next: {artist.nextAvailable}
                      </div>
                      <div className="text-lg font-bold text-purple-600">
                        {artist.price}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        {artist.speciality}
                      </span>
                    </div>
                    
                    <Link to={`/artists/${artist.id}`}>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group-hover:scale-105 transition-transform">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-12">
          <Link to="/artists">
            <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform border-purple-200 hover:border-purple-400">
              View All Featured Artists
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtistsCarousel;
