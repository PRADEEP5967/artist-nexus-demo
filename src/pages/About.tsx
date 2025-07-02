
import React from 'react';
import Header from '@/components/Header';
import { Music, Users, Award, Globe, Heart, Star, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About ArtistNexus</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We're passionate about connecting talented artists with amazing events, 
            creating unforgettable experiences for everyone involved.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At ArtistNexus, we believe every event deserves exceptional talent. Our mission is to 
                bridge the gap between extraordinary artists and event organizers who need them.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We've created a platform that makes it simple to discover, connect with, and book 
                verified professional artists for any occasion - from intimate gatherings to large-scale events.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                  <div className="text-gray-600">Verified Artists</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5000+</div>
                  <div className="text-gray-600">Successful Events</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Music className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Musicians</h3>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Performers</h3>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Speakers</h3>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Global Reach</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Passion</h3>
              <p className="text-gray-600">We're passionate about arts and entertainment, bringing that energy to every interaction.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards in artist verification and customer service.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600">Building trust through transparency, reliability, and genuine care for our community.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Clock className="h-12 w-12 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Efficiency</h3>
              <p className="text-gray-600">Making the booking process as smooth and efficient as possible for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals working to revolutionize event entertainment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">PS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Er Pradeep Sahani</h3>
              <p className="text-purple-600 font-medium mb-3">Lead Developer</p>
              <p className="text-gray-600 text-sm">Passionate about creating innovative solutions that connect artists with their audience.</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Community</h3>
              <p className="text-blue-600 font-medium mb-3">Artists & Clients</p>
              <p className="text-gray-600 text-sm">The heart of ArtistNexus - talented artists and amazing clients who make magic happen.</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Join Us</h3>
              <p className="text-purple-600 font-medium mb-3">Be Part of Our Story</p>
              <p className="text-gray-600 text-sm">Whether you're an artist or looking to book talent, join our growing community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of satisfied customers and artists who trust ArtistNexus
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

export default About;
