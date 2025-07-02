
import React from 'react';
import Header from '@/components/Header';
import { Search, UserCheck, Calendar, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">How ArtistNexus Works</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Booking exceptional talent for your events has never been easier. 
            Follow these simple steps to find and book your perfect artist.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">For Event Organizers</h2>
            <p className="text-xl text-gray-600">Book amazing talent in just 4 simple steps</p>
          </div>
          
          <div className="relative">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center mb-16">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Browse & Search</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Explore our curated selection of verified artists. Use filters to find performers 
                  by category, location, price range, and availability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Browse by category (Musicians, Speakers, Dancers, DJs)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Filter by location and price range
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    View profiles, portfolios, and reviews
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                  <Search className="h-24 w-24 text-purple-600 mx-auto mb-6" />
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Discover Talent</h4>
                    <p className="text-gray-600">Find the perfect artist for your event from our extensive network of professionals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center mb-16">
              <ArrowRight className="h-8 w-8 text-purple-600" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center mb-16">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Connect & Quote</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Found the perfect artist? Send them your event details and get a personalized quote. 
                  Our secure messaging system makes communication easy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Request quotes with event details
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Secure messaging system
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Compare offers from multiple artists
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <UserCheck className="h-24 w-24 text-blue-600 mx-auto mb-6" />
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Get Quotes</h4>
                    <p className="text-gray-600">Communicate directly with artists and receive personalized quotes for your event.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center mb-16">
              <ArrowRight className="h-8 w-8 text-blue-600" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center mb-16">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Book & Pay</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Ready to book? Secure your artist with our safe and simple booking system. 
                  Your payment is protected until after your successful event.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Secure online booking system
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Multiple payment options
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Payment protection guarantee
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                  <Calendar className="h-24 w-24 text-purple-600 mx-auto mb-6" />
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Secure Booking</h4>
                    <p className="text-gray-600">Book with confidence using our secure payment system and booking protection.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center mb-16">
              <ArrowRight className="h-8 w-8 text-purple-600" />
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Enjoy & Review</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Sit back and enjoy an amazing performance! After your event, 
                  share your experience by leaving a review to help other clients.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Professional performance guaranteed
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    24/7 event support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Leave reviews and ratings
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <Star className="h-24 w-24 text-blue-600 mx-auto mb-6" />
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Amazing Events</h4>
                    <p className="text-gray-600">Experience unforgettable performances and help others by sharing your review.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Artists Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">For Artists</h2>
            <p className="text-xl text-gray-600">Start earning from your talent in 3 easy steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Create Profile</h3>
              <p className="text-gray-600">Complete our simple onboarding process and showcase your talent with photos, videos, and reviews.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Verified</h3>
              <p className="text-gray-600">Our team verifies your credentials and approves your profile to ensure quality for all clients.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Earning</h3>
              <p className="text-gray-600">Receive booking requests, send quotes, and get paid securely for your amazing performances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands who trust ArtistNexus for their entertainment needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/artists">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl">
                Browse Artists
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl">
                Join as Artist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
