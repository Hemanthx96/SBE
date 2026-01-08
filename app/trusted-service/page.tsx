"use client";

import Link from "next/link";
import { ArrowLeft, Star, Award, Users, TrendingUp, Heart, Handshake } from "lucide-react";

export default function TrustedService() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm sm:text-base">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-br from-blue-100 to-cyan-100 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Star className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Trusted Service
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Years of experience and commitment to excellence in Bangalore's real estate market
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 sm:p-8 rounded-xl text-white shadow-xl mb-12">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 mr-4" />
              <h2 className="text-2xl sm:text-3xl font-bold">Our Experience</h2>
            </div>
            <p className="text-lg text-blue-100 leading-relaxed">
              With years of dedicated service in Bangalore's real estate market, Sree Balaji Enterprises has built a reputation for trust, integrity, and excellence. We understand the local market dynamics and provide expert guidance to help you make informed decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Satisfied Clients</h3>
              <p className="text-gray-600">
                Hundreds of happy customers who have successfully bought or sold properties through us
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Market Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of Bangalore's real estate market trends and property values
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Transparent Deals</h3>
              <p className="text-gray-600">
                Honest and transparent transactions with no hidden charges or surprises
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-blue-100 p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Our Values</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Integrity:</strong> We believe in honest and ethical business practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Customer First:</strong> Your satisfaction is our top priority</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Transparency:</strong> Clear communication and no hidden agendas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Excellence:</strong> Commitment to delivering the best service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Trust:</strong> Building long-term relationships with our clients</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-blue-100 p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Why Choose Us</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Experience:</strong> Years of expertise in Bangalore real estate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Local Knowledge:</strong> Deep understanding of local market conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Personalized Service:</strong> Tailored solutions for each client</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>End-to-End Support:</strong> Assistance from search to final transaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Post-Sale Support:</strong> Continued assistance after the deal</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 rounded-xl shadow-lg mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Service Promise
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Quality</h3>
                <p className="text-sm text-gray-600">Only verified properties</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Trust</h3>
                <p className="text-sm text-gray-600">Transparent dealings</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Support</h3>
                <p className="text-sm text-gray-600">Dedicated assistance</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Excellence</h3>
                <p className="text-sm text-gray-600">Best in class service</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              Experience Our Trusted Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
