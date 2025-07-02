import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-purple-100">
            Last updated: January 2, 2025
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center mb-8">
                <Shield className="h-8 w-8 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Your Privacy Matters</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                At ArtistNexus, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>

              <div className="space-y-12">
                <div>
                  <div className="flex items-center mb-4">
                    <Database className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 m-0">Information We Collect</h3>
                  </div>
                  <div className="pl-9">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                      <li>Name, email address, and phone number</li>
                      <li>Profile information and photos</li>
                      <li>Payment and billing information</li>
                      <li>Event details and booking history</li>
                      <li>Communication records between users</li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Device information and IP address</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our platform</li>
                      <li>Search queries and filters used</li>
                      <li>Referral sources</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 m-0">How We Use Your Information</h3>
                  </div>
                  <div className="pl-9">
                    <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Provide and maintain our services</li>
                      <li>Process bookings and payments</li>
                      <li>Facilitate communication between artists and clients</li>
                      <li>Send important updates and notifications</li>
                      <li>Improve our platform and user experience</li>
                      <li>Prevent fraud and ensure platform security</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <UserCheck className="h-6 w-6 text-orange-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 m-0">Information Sharing</h3>
                  </div>
                  <div className="pl-9">
                    <p className="text-gray-600 mb-4">We may share your information in the following circumstances:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li><strong>With Other Users:</strong> Profile information is visible to facilitate bookings</li>
                      <li><strong>Service Providers:</strong> Third-party services that help us operate our platform</li>
                      <li><strong>Payment Processing:</strong> Secure payment processors to handle transactions</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                      <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      <strong>We never sell your personal information to third parties for marketing purposes.</strong>
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Lock className="h-6 w-6 text-red-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 m-0">Data Security</h3>
                  </div>
                  <div className="pl-9">
                    <p className="text-gray-600 mb-4">We implement robust security measures to protect your information:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>SSL encryption for all data transmission</li>
                      <li>Secure servers with regular security updates</li>
                      <li>Access controls and authentication protocols</li>
                      <li>Regular security audits and monitoring</li>
                      <li>Compliance with industry security standards</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h3>
                  <div className="text-gray-600 space-y-4">
                    <p>You have the following rights regarding your personal information:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Access:</strong> Request a copy of your personal information</li>
                      <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li><strong>Portability:</strong> Receive your data in a portable format</li>
                      <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    </ul>
                    <p className="mt-4">
                      To exercise these rights, please contact us at privacy@artistnexus.com.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h3>
                  <div className="text-gray-600 space-y-4">
                    <p>We use cookies and similar technologies to:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Remember your preferences and settings</li>
                      <li>Analyze how you use our platform</li>
                      <li>Improve our services and user experience</li>
                      <li>Provide personalized content and recommendations</li>
                    </ul>
                    <p>You can control cookies through your browser settings, but some features may not work properly if cookies are disabled.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h3>
                  <p className="text-gray-600">
                    We retain your personal information only as long as necessary to provide our services and fulfill the purposes outlined in this policy. When you delete your account, we will remove your personal information within 30 days, except where retention is required by law.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h3>
                  <p className="text-gray-600">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h3>
                  <p className="text-gray-600">
                    Your information may be transferred to and processed in countries other than your own. We ensure that all transfers are protected by appropriate safeguards and comply with applicable data protection laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h3>
                  <p className="text-gray-600">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services constitutes acceptance of the updated policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
                  <div className="text-gray-600">
                    <p className="mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
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

export default Privacy;
