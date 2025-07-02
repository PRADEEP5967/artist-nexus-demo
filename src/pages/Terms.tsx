import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Scale, Shield, Users, AlertCircle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-purple-100">
            Last updated: January 2, 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center mb-8">
                <Scale className="h-8 w-8 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Agreement to Terms</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                By accessing and using ArtistNexus ("we", "our", or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <div className="space-y-12">
                <div>
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 m-0">Use License</h3>
                  </div>
                  <div className="pl-9">
                    <p className="text-gray-600 mb-4">
                      Permission is granted to temporarily download one copy of ArtistNexus per device for personal, non-commercial transitory viewing only.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>This is the grant of a license, not a transfer of title</li>
                      <li>You may not modify or copy the materials</li>
                      <li>You may not use the materials for any commercial purpose or for any public display</li>
                      <li>You may not attempt to reverse engineer any software contained on the website</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 m-0">User Accounts</h3>
                  </div>
                  <div className="pl-9">
                    <p className="text-gray-600 mb-4">
                      When you create an account with us, you must provide information that is accurate, complete, and current at all times.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>You are responsible for safeguarding your account password</li>
                      <li>You must notify us immediately of any unauthorized use of your account</li>
                      <li>We reserve the right to refuse service or terminate accounts</li>
                      <li>One person or legal entity may not maintain more than one account</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <AlertCircle className="h-6 w-6 text-orange-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 m-0">Booking and Payments</h3>
                  </div>
                  <div className="pl-9">
                    <p className="text-gray-600 mb-4">
                      All bookings made through ArtistNexus are subject to the following terms:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Payment is required to confirm bookings</li>
                      <li>Cancellation policies vary by artist and are outlined in each booking</li>
                      <li>ArtistNexus acts as a facilitator between clients and artists</li>
                      <li>We charge a service fee for successful transactions</li>
                      <li>Disputes should be resolved directly with the artist first</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Artist Responsibilities</h3>
                  <div className="text-gray-600 space-y-4">
                    <p>Artists using our platform agree to:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Provide accurate information about their services and availability</li>
                      <li>Deliver services as described and agreed upon</li>
                      <li>Maintain professional conduct at all times</li>
                      <li>Respond to booking requests in a timely manner</li>
                      <li>Honor confirmed bookings unless exceptional circumstances arise</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h3>
                  <div className="text-gray-600 space-y-4">
                    <p>Clients using our platform agree to:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Provide accurate event information and requirements</li>
                      <li>Make payments as agreed upon</li>
                      <li>Treat artists with respect and professionalism</li>
                      <li>Provide suitable performance conditions as discussed</li>
                      <li>Give reasonable notice for any changes or cancellations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h3>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      In no event shall ArtistNexus or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ArtistNexus's website.
                    </p>
                    <p>
                      We act as an intermediary platform and are not responsible for the actual services provided by artists or the behavior of users on our platform.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h3>
                  <p className="text-gray-600">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h3>
                  <p className="text-gray-600">
                    We reserve the right to revise these terms of service at any time. By using this website, you are agreeing to be bound by the current version of these terms of service.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="text-gray-600">
                    <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
                    <ul className="space-y-2">
                      <li><strong>Email:</strong> pradeepsahani8130s@gmail.com</li>
                      <li><strong>Phone:</strong> +91 8130885013</li>
                      <li><strong>Address:</strong> Delhi, India</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
