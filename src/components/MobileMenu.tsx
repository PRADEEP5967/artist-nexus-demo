
import React from 'react';
import { X, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthButtons from './AuthButtons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navigation = [
    { name: 'Browse Artists', href: '/artists' },
    { name: 'Join as Artist', href: '/onboarding' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'About', href: '/about' },
  ];

  const moreLinks = [
    { name: 'Help Center', href: '/help-center' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="px-4 py-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-200"
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="border-t border-gray-200 pt-2 mt-2">
            <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">More</p>
            {moreLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-200"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="pt-4 border-t border-gray-200 space-y-2">
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm font-medium text-gray-600">Notifications</span>
              <div className="relative">
                <Bell className="h-5 w-5 text-gray-400" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </div>
            </div>
            <div className="px-4">
              <AuthButtons />
            </div>
          </div>
        </div>
      </div>
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
        onClick={onClose}
      />
    </>
  );
};

export default MobileMenu;
