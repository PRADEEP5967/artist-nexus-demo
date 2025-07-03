
import React from 'react';
import { Users, Calendar, Heart, Trophy } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    { number: "5,000+", label: "Verified Artists", icon: Users },
    { number: "15,000+", label: "Successful Events", icon: Calendar },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "50+", label: "Cities Covered", icon: Trophy }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
