import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Star, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: "Pradeep Sahani",
      title: "Founder & CEO",
      description: "Passionate about connecting artists with opportunities.",
      image: "/placeholder.svg"
    },
    {
      name: "Jane Doe",
      title: "Marketing Director",
      description: "Expert in digital marketing and brand strategy.",
      image: "/placeholder.svg"
    },
    {
      name: "David Lee",
      title: "Technology Lead",
      description: "Innovative developer with a focus on user experience.",
      image: "/placeholder.svg"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Artists on Platform", icon: Users },
    { number: "10,000+", label: "Successful Events", icon: Star },
    { number: "4.9/5", label: "Average Rating", icon: Award },
    { number: "95%", label: "Client Satisfaction", icon: Heart }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty and transparency.",
      icon: "🛡️"
    },
    {
      title: "Innovation",
      description: "We continuously seek new and creative solutions.",
      icon: "💡"
    },
    {
      title: "Community",
      description: "We foster a supportive and collaborative environment.",
      icon: "🤝"
    },
    {
      title: "Excellence",
      description: "We are committed to delivering exceptional quality.",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-purple-100">
            Learn about our mission, values, and the team behind ArtistNexus
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                ArtistNexus was founded in 2022 with a vision to revolutionize the way artists and clients connect. We saw a need for a platform that not only showcases talent but also provides a seamless booking experience.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our mission is to empower artists by providing them with the tools and resources they need to succeed, while also helping clients find the perfect talent for their events.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Our Story"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">
              We've helped thousands of artists and clients connect and create amazing experiences
            </p>
          </div>
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              A dedicated group of professionals passionate about connecting artists and clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{member.title}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              These values guide everything we do at ArtistNexus
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join our community of artists and clients today!
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

      <Footer />
    </div>
  );
};

export default About;
