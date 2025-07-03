
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesktopNavigation: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-dropdown]')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="hidden lg:flex items-center space-x-6">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group px-2 py-1"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
      
      {/* More Dropdown */}
      <div className="relative" data-dropdown>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center text-gray-700 hover:text-purple-600 transition-colors font-medium px-2 py-1"
        >
          More
          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
            {moreLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-600 transition-all duration-200 rounded-lg mx-2"
                onClick={() => setIsDropdownOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopNavigation;
