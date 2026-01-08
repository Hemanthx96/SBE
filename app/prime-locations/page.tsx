"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Home, TrendingUp, Building2 } from "lucide-react";

export default function PrimeLocations() {
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
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Prime Locations
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover premium B.D.A. approved sites in Bangalore's most sought-after neighborhoods
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">J.P. Nagar</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                One of Bangalore's most prestigious and well-planned residential areas. J.P. Nagar offers excellent connectivity, proximity to IT hubs, and a thriving community atmosphere.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Excellent connectivity to major IT corridors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Well-developed infrastructure and amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Proximity to schools, hospitals, and shopping centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>High appreciation potential</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Other Prime Areas</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We also offer B.D.A. approved sites in other strategically located areas across Bangalore, each with unique advantages for investors and homebuyers.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>South Bangalore - Growing residential hub</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>East Bangalore - Emerging investment destination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Well-connected to major business districts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Future development potential</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 sm:p-8 rounded-xl text-white shadow-xl">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 mr-4" />
              <h2 className="text-2xl sm:text-3xl font-bold">Why Choose Prime Locations?</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Investment Value</h3>
                <p className="text-blue-100">
                  Prime locations offer excellent returns on investment with steady appreciation rates and high demand.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality of Life</h3>
                <p className="text-blue-100">
                  Access to quality schools, healthcare facilities, shopping centers, and recreational areas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Connectivity</h3>
                <p className="text-blue-100">
                  Well-connected to major business districts, IT parks, and transportation hubs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Future Growth</h3>
                <p className="text-blue-100">
                  Strategic locations with planned infrastructure development and urban expansion.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              Contact Us for Available Properties
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
