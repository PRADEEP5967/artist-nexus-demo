
import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

const LiveEventsCounter: React.FC = () => {
  const [eventCount, setEventCount] = useState(127);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live event count changes
      setEventCount(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        const newCount = prev + change;
        return Math.max(120, Math.min(135, newCount)); // Keep between 120-135
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-6 bg-gradient-to-r from-green-500 to-emerald-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
              <Activity className="h-5 w-5 animate-pulse" />
            </div>
            <span className="text-lg font-semibold">
              LIVE: <span className="font-bold text-xl">{eventCount}</span> events happening right now across India
            </span>
          </div>
          <div className="mt-2 text-green-100 text-sm">
            Updated every few seconds • Join the excitement!
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEventsCounter;
