
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthButtons from './AuthButtons';
import PSLogo from './PSLogo';
import MobileMenu from './MobileMenu';
import DesktopNavigation from './DesktopNavigation';
import SearchComponent from './SearchComponent';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <div className="mr-3 transition-transform group-hover:scale-105">
              <PSLogo size={40} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ArtistNexus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <SearchComponent isOpen={isSearchOpen} onToggle={() => setIsSearchOpen(!isSearchOpen)} />

            {/* Notifications */}
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-purple-50 hover:text-purple-600 transition-colors"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-[10px] text-white font-bold">3</span>
              </span>
            </Button>

            <AuthButtons />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <SearchComponent isOpen={isSearchOpen} onToggle={() => setIsSearchOpen(!isSearchOpen)} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-purple-50 hover:text-purple-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
