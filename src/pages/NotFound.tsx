
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center header-height">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-9xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              404
            </div>
            <div className="animate-bounce">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Search className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg font-semibold rounded-xl flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </Link>
            
            <Link to="/artists">
              <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl flex items-center">
                <Search className="mr-2 h-5 w-5" />
                Browse Artists
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          {/* Suggestions */}
          <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link to="/artists" className="text-purple-600 hover:text-purple-800 transition-colors">
                Browse Artists
              </Link>
              <Link to="/onboarding" className="text-purple-600 hover:text-purple-800 transition-colors">
                Join as Artist
              </Link>
              <Link to="/how-it-works" className="text-purple-600 hover:text-purple-800 transition-colors">
                How it Works
              </Link>
              <Link to="/about" className="text-purple-600 hover:text-purple-800 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
