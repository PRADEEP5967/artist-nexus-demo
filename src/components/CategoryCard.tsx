
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  artistCount: number;
  imageUrl: string;
  category: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon,
  artistCount,
  imageUrl,
  category
}) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-purple-500/20">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
          {icon}
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-sm font-medium">{artistCount}+ Artists</div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <Link to={`/artists?category=${category}`}>
          <Button 
            variant="ghost" 
            className="w-full justify-between group-hover:bg-purple-50 group-hover:text-purple-600 transition-all duration-300"
          >
            Browse {title}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
