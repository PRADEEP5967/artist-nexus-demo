
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesktopNavigation: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="desktop-nav-item group relative px-3 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 rounded-lg"
        >
          {item.name}
          <span className="nav-underline"></span>
        </Link>
      ))}
      
      {/* More Dropdown */}
      <div className="relative" data-dropdown>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="desktop-nav-item group flex items-center px-3 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-purple-600 transition-colors rounded-lg"
        >
          More
          <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {moreLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="dropdown-item text-sm"
                onClick={() => setIsDropdownOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default DesktopNavigation;
