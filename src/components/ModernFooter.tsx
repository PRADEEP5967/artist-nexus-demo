import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import PSLogo from './PSLogo';

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 dark:from-gray-950 dark:via-purple-950 dark:to-gray-950 text-white overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Wave Effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-50 dark:fill-gray-950"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="mr-3"
              >
                <PSLogo size={40} className="drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ArtistNexus
              </span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
              Connecting talented artists with clients worldwide. Your premier destination for unforgettable events.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', delay: 0 },
                { icon: Twitter, href: '#', delay: 0.1 },
                { icon: Instagram, href: '#', delay: 0.2 },
                { icon: Linkedin, href: '#', delay: 0.3 },
              ].map(({ icon: Icon, href, delay }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay }}
                  className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/artists', label: 'Browse Artists' },
                { to: '/artist-onboarding', label: 'Join as Artist' },
                { to: '/how-it-works', label: 'How it Works' },
                { to: '/success-stories', label: 'Success Stories' },
                { to: '/about', label: 'About Us' },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.to}
                    className="text-gray-300 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Support
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/help-center', label: 'Help Center' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/terms', label: 'Terms of Service' },
                { to: '/privacy', label: 'Privacy Policy' },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.to}
                    className="text-gray-300 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <div className="space-y-3">
              {[
                { icon: Mail, href: 'mailto:pradeepsahani8130s@gmail.com', text: 'pradeepsahani8130s@gmail.com', color: 'text-purple-400' },
                { icon: Phone, href: 'tel:+918130885013', text: '+91 8130885013', color: 'text-blue-400' },
                { icon: MapPin, text: 'Delhi, India', color: 'text-green-400' },
              ].map(({ icon: Icon, href, text, color }, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className={`h-5 w-5 ${color} flex-shrink-0`} />
                  {href ? (
                    <a
                      href={href}
                      className="text-gray-300 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors text-sm"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-gray-300 dark:text-gray-400 text-sm">{text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400 dark:text-gray-500 text-sm flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              © {currentYear} ArtistNexus. Made with{' '}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="mx-1"
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500 inline" />
              </motion.span>{' '}
              in India
            </motion.p>
            <motion.p
              className="text-gray-400 dark:text-gray-500 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Developed by{' '}
              <span className="text-purple-400 dark:text-purple-300 font-medium bg-purple-500/10 px-2 py-1 rounded">
                Er Pradeep Sahani
              </span>
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default ModernFooter;
