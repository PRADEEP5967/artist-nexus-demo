
import React from 'react';

const LiveEventsCounter: React.FC = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-green-500 to-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-white">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-semibold">LIVE: 127 events happening right now across India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEventsCounter;
