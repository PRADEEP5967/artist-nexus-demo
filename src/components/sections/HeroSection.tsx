import React from 'react';
import SearchBar from '@/components/SearchBar';
import PSLogo from '@/components/PSLogo';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface HeroSectionProps {
  onSearch: (query: string, location: string, date: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 dark:from-purple-950 dark:via-blue-950 dark:to-purple-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="text-center mb-12">
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <PSLogo size={80} className="drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
            </motion.div>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Find Perfect
            <motion.span
              className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Artists
            </motion.span>
            for Your Events
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-purple-100 dark:text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Connect with India's most talented musicians, dancers, speakers, and performers. 
            Make your event unforgettable with verified artists.
          </motion.p>
          
          {/* Enhanced Search Bar */}
          <motion.div variants={itemVariants}>
            <SearchBar onSearch={onSearch} className="mb-8" />
          </motion.div>
          
          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { value: '5K+', label: 'Verified Artists' },
              { value: '15K+', label: 'Happy Clients' },
              { value: '50+', label: 'Cities' },
              { value: '98%', label: 'Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center glass-card p-6 rounded-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-purple-200 dark:text-purple-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
