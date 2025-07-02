
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Quote, Calendar, Users, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      clientName: "Sarah Johnson",
      eventType: "Wedding Reception",
      artistName: "The Jazz Collective",
      rating: 5,
      image: "/placeholder.svg",
      quote: "The Jazz Collective made our wedding absolutely magical! Their performance was flawless, and they created the perfect atmosphere for our special day. Every guest complimented the music.",
      details: {
        attendees: 150,
        date: "October 2024",
        location: "Napa Valley, CA"
      }
    },
    {
      id: 2,
      clientName: "Mark Davis",
      eventType: "Corporate Event",
      artistName: "Elena Rodriguez",
      rating: 5,
      image: "/placeholder.svg",
      quote: "Elena's keynote speech was inspiring and perfectly aligned with our company values. She engaged our team of 300+ employees and left everyone motivated. Highly recommend!",
      details: {
        attendees: 300,
        date: "September 2024",
        location: "San Francisco, CA"
      }
    },
    {
      id: 3,
      clientName: "Lisa Chen",
      eventType: "Birthday Party",
      artistName: "DJ Mike Thompson",
      rating: 5,
      image: "/placeholder.svg",
      quote: "DJ Mike absolutely crushed it at my 30th birthday party! He read the crowd perfectly and kept everyone dancing all night long. The energy was incredible!",
      details: {
        attendees: 80,
        date: "November 2024",
        location: "Los Angeles, CA"
      }
    },
    {
      id: 4,
      clientName: "Robert Williams",
      eventType: "Charity Gala",
      artistName: "Symphony Strings Quartet",
      rating: 5,
      image: "/placeholder.svg",
      quote: "The Symphony Strings Quartet brought elegance and sophistication to our charity gala. Their classical performance was the perfect backdrop for our fundraising event.",
      details: {
        attendees: 200,
        date: "December 2024",
        location: "New York, NY"
      }
    }
  ];

  const stats = [
    { number: "5,000+", label: "Successful Events", icon: Calendar },
    { number: "1,200+", label: "Happy Clients", icon: Users },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "98%", label: "Client Satisfaction", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Success Stories</h1>
          <p className="text-xl text-purple-100">
            Real experiences from clients who found their perfect artists through ArtistNexus
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">
              Hear directly from our satisfied clients about their amazing experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {story.clientName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{story.clientName}</h3>
                        <p className="text-gray-600">{story.eventType}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-purple-600 mb-4" />
                    <p className="text-gray-700 leading-relaxed italic">
                      "{story.quote}"
                    </p>
                  </div>

                  {/* Artist Info */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold text-gray-900">Artist: {story.artistName}</span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{story.details.attendees}</div>
                      <div className="text-sm text-gray-600">Attendees</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-blue-600">{story.details.date}</div>
                      <div className="text-sm text-gray-600">Event Date</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-purple-600">{story.details.location}</div>
                      <div className="text-sm text-gray-600">Location</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Rated Artists</h2>
            <p className="text-xl text-gray-600">
              Meet some of our highest-rated performers who consistently deliver amazing experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "The Jazz Collective", category: "Musicians", rating: 4.9, bookings: 45 },
              { name: "Elena Rodriguez", category: "Speaker", rating: 5.0, bookings: 38 },
              { name: "DJ Mike Thompson", category: "DJ", rating: 4.8, bookings: 52 },
              { name: "Symphony Strings", category: "Musicians", rating: 4.9, bookings: 31 }
            ].map((artist, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {artist.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{artist.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{artist.category}</p>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">{artist.rating}</span>
                </div>
                <p className="text-sm text-gray-600">{artist.bookings} successful bookings</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of satisfied clients who found their perfect artists through ArtistNexus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/artists">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl">
                Browse Artists Now
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

      <Footer />
    </div>
  );
};

export default SuccessStories;
