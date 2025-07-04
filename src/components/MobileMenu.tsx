
import React from 'react';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthButtons from './AuthButtons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navigation = [
    { name: 'Browse Artists', href: '/artists' },
    { name: 'Join as Artist', href: '/artist-onboarding' },
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

  if (!isMenuOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Mobile Navigation Slide Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header Spacing */}
        <div className="pt-20 pb-4 px-4 h-full overflow-y-auto">
          <nav className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="mobile-menu-item block w-full text-left"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">More</p>
              {moreLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="mobile-menu-item block w-full text-left"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="pt-4 border-t border-gray-200 space-y-4">
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
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
