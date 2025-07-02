
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Search, ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I book an artist on ArtistNexus?",
          answer: "Booking is simple! Browse our artist listings, click 'Ask for Quote' on any profile, provide your event details, and the artist will respond with a personalized quote. Once you agree on terms, you can secure the booking through our platform."
        },
        {
          question: "Is it free to browse and contact artists?",
          answer: "Yes! Browsing artist profiles and sending initial quote requests is completely free. You only pay when you decide to book an artist for your event."
        },
        {
          question: "How are artists verified on the platform?",
          answer: "All artists go through our comprehensive verification process including identity verification, credential checks, portfolio review, and background screening to ensure quality and safety."
        }
      ]
    },
    {
      category: "Booking & Payments",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted payment system."
        },
        {
          question: "When do I pay for my booking?",
          answer: "Payment is typically split into two parts: a deposit to secure the booking and the remaining balance closer to your event date. Specific terms are agreed upon with each artist."
        },
        {
          question: "What if I need to cancel my booking?",
          answer: "Cancellation policies vary by artist and are clearly outlined in your booking agreement. Generally, cancellations made well in advance have more favorable terms than last-minute changes."
        },
        {
          question: "Is my payment protected?",
          answer: "Yes! We offer payment protection. Your money is held securely until after your event is successfully completed. If something goes wrong, you're covered by our guarantee."
        }
      ]
    },
    {
      category: "For Artists",
      questions: [
        {
          question: "How do I join ArtistNexus as a performer?",
          answer: "Visit our Artist Onboarding page, complete the registration form with your details, upload your portfolio, and submit for verification. Our team will review and approve qualified artists."
        },
        {
          question: "What commission does ArtistNexus charge?",
          answer: "We charge a small service fee on successful bookings to maintain the platform and provide support. The exact percentage is outlined in our artist terms of service."
        },
        {
          question: "How do I get paid for my performances?",
          answer: "Payments are processed securely through our platform. You'll receive payment according to the terms agreed with your client, typically within 24-48 hours after event completion."
        },
        {
          question: "Can I set my own rates?",
          answer: "Absolutely! You have full control over your pricing. You can set different rates for different types of events and adjust them anytime through your artist dashboard."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "I'm having trouble with the website. What should I do?",
          answer: "First, try refreshing your browser or clearing your cache. If the issue persists, contact our technical support team with details about the problem and what browser you're using."
        },
        {
          question: "How do I update my profile information?",
          answer: "Log into your account and go to your profile settings. You can update most information directly. Some changes may require verification from our team."
        },
        {
          question: "I forgot my password. How do I reset it?",
          answer: "Click 'Forgot Password' on the login page, enter your email address, and we'll send you instructions to reset your password securely."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Help Center</h1>
          <p className="text-xl text-purple-100 mb-8">
            Find answers to common questions or get in touch with our support team
          </p>
          
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-white border-0 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No results found for "{searchQuery}"</p>
              <p className="text-gray-500 mt-2">Try searching with different keywords or browse all categories below.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFaqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const uniqueIndex = categoryIndex * 100 + faqIndex;
                      return (
                        <div key={faqIndex} className="bg-gray-50 rounded-xl overflow-hidden">
                          <button
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                            onClick={() => setOpenFaq(openFaq === uniqueIndex ? null : uniqueIndex)}
                          >
                            <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                            {openFaq === uniqueIndex ? (
                              <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                            )}
                          </button>
                          {openFaq === uniqueIndex && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600">Our support team is here to assist you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-6">Get instant help from our support team</p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
                Start Chat
              </Button>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">Send us a detailed message</p>
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                  Send Email
                </Button>
              </Link>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-6">Speak directly with our team</p>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                Call Now
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-12 p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
            <p className="text-gray-600">Weekend: 10:00 AM - 4:00 PM (EST)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
