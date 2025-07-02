
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';
import BookingModal from './BookingModal';

interface ArtistCardProps {
  id: string;
  name: string;
  category: string;
  priceRange: string;
  location: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  languages: string[];
  isVerified?: boolean;
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  id,
  name,
  category,
  priceRange,
  location,
  rating,
  reviewCount,
  imageUrl,
  languages,
  isVerified = false
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden bg-white border-0 shadow-lg hover:shadow-purple-500/20">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Heart Icon */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200"
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${
                isLiked ? 'text-red-500 fill-current' : 'text-white'
              }`} 
            />
          </button>

          {/* Category Badge */}
          <Badge className="absolute top-3 left-3 bg-purple-600/90 hover:bg-purple-700 text-white border-0">
            {category}
          </Badge>

          {/* Verified Badge */}
          {isVerified && (
            <Badge className="absolute bottom-3 left-3 bg-green-500/90 text-white border-0 text-xs flex items-center space-x-1">
              <CheckCircle2 className="h-3 w-3" />
              <span>Verified</span>
            </Badge>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-1">
              {name}
            </h3>
            <div className="flex items-center space-x-1 text-sm">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="font-medium text-gray-700">{rating}</span>
              <span className="text-gray-500">({reviewCount})</span>
            </div>
          </div>

          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {languages.slice(0, 2).map((language) => (
              <Badge key={language} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                {language}
              </Badge>
            ))}
            {languages.length > 2 && (
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                +{languages.length - 2}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-purple-600">
              {priceRange}
            </div>
            <div className="flex space-x-2">
              <Button 
                variant="outline"
                size="sm" 
                className="hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Message
              </Button>
              <Button 
                size="sm" 
                onClick={handleBookingClick}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105"
              >
                Book Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        artist={{
          id,
          name,
          category,
          priceRange
        }}
      />
    </>
  );
};

export default ArtistCard;
