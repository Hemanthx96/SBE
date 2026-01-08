"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Home as HomeIcon,
  IndianRupee,
  CheckCircle,
  Handshake,
  MapPin,
  Target,
  Lock,
  Star,
} from "lucide-react";

// Lord Venkateswara Logo - Using PNG Image with fallback
const VenkateshwaraLogo = ({
  className = "w-16 h-16",
}: {
  className?: string;
}) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className={`${className} bg-blue-100 rounded-full flex items-center justify-center`}
      >
        <span className="text-blue-600 font-bold text-xs">SBE</span>
      </div>
    );
  }

  return (
    <Image
      src="/balaji-logo.png"
      alt="Sree Balaji Enterprises Logo"
      width={200}
      height={200}
      className={`${className} object-cover object-center`}
      priority
      unoptimized
      onError={() => setImgError(true)}
    />
  );
};

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(sectionsRef.current).forEach((key) => {
      const element = sectionsRef.current[key];
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-500/20 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 overflow-hidden flex items-center justify-center">
                <VenkateshwaraLogo className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 scale-110" />
              </div>
              <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-blue-200 via-cyan-100 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] animate-slideInLeft">
                <span className="hidden sm:inline">Sree Balaji Enterprises</span>
                <span className="sm:hidden">SBE</span>
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a
                  href="#home"
                  className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#services"
                  className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10 relative group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <a
                href="tel:+919448533341"
                className="bg-white hover:bg-white/90 text-blue-600 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5 sm:gap-2 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-4 sm:mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <span className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse-glow">
                Real Estate Consultant
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Sree Balaji Enterprises
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-2 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              S.J. Shankar
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Real Estate Consultant
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto mb-4 sm:mb-6 rounded-full animate-scaleIn" style={{ animationDelay: '0.5s' }}></div>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              Specializing in Buying & Selling B.D.A. Sites & B.D.A. Approved
              Sites
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
              <a
                href="tel:+919448533341"
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 md:px-10 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base md:text-lg">+91 94485 33341</span>
              </a>
              <a
                href="tel:+918971801990"
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 md:px-10 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base md:text-lg">+91 89718 01990</span>
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 text-blue-600 font-semibold py-3 px-6 sm:py-4 sm:px-8 md:px-10 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border-2 border-blue-600 hover:border-cyan-500 active:scale-95"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-blue-50/30 to-white"
        ref={(el) => (sectionsRef.current['services'] = el)}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 px-2">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Our Services
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto mb-3 sm:mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600 px-2">
              Comprehensive real estate solutions for all your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {/* Service Card 1 */}
            <div className={`bg-white border-2 border-blue-100 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] bg-gradient-to-br from-white to-blue-50/30 group ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible['services'] ? '0.1s' : '0s' }}>
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Buying B.D.A. Sites
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Find your perfect B.D.A. approved site in prime locations across
                Bangalore. We help you discover the best properties that match
                your requirements and budget.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className={`bg-white border-2 border-blue-100 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] bg-gradient-to-br from-white to-blue-50/30 group ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible['services'] ? '0.2s' : '0s' }}>
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Selling B.D.A. Sites
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Get the best value for your B.D.A. approved sites. Our expert
                team ensures smooth transactions and competitive pricing for
                your property.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className={`bg-white border-2 border-blue-100 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] bg-gradient-to-br from-white to-blue-50/30 group ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible['services'] ? '0.3s' : '0s' }}>
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  B.D.A. Approved Sites
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                All our properties are B.D.A. approved, ensuring legal
                compliance and peace of mind. We verify all documentation before
                listing.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className={`bg-white border-2 border-blue-100 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] bg-gradient-to-br from-white to-blue-50/30 group ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible['services'] ? '0.4s' : '0s' }}>
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Expert Consultation
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Get professional advice on real estate investments, legal
                matters, and property valuation. We're here to guide you through
                every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50/30" ref={(el) => (sectionsRef.current['whyChoose'] = el)}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${isVisible['whyChoose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 px-2">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Why Choose Us?
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto mb-3 sm:mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600 px-2">
              Experience, Trust, and Excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            <Link href="/prime-locations" className={`text-center bg-white p-6 sm:p-7 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-blue-50/40 border border-blue-100 group cursor-pointer ${isVisible['whyChoose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible['whyChoose'] ? '0.1s' : '0s' }}>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                Prime Locations
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                Properties in J.P. Nagar and other prime areas of Bangalore
              </p>
            </Link>

            <Link href="/legal-compliance" className={`text-center bg-white p-6 sm:p-7 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-blue-50/40 border border-blue-100 group cursor-pointer ${isVisible['whyChoose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible['whyChoose'] ? '0.2s' : '0s' }}>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Lock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                Legal Compliance
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                All properties are B.D.A. approved with verified documentation
              </p>
            </Link>

            <Link href="/trusted-service" className={`text-center bg-white p-6 sm:p-7 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-blue-50/40 border border-blue-100 group cursor-pointer ${isVisible['whyChoose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible['whyChoose'] ? '0.3s' : '0s' }}>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                Trusted Service
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                Years of experience in Bangalore real estate market
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden"
        ref={(el) => (sectionsRef.current['contact'] = el)}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-300 rounded-full mix-blend-overlay filter blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-overlay filter blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${isVisible['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 px-2 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white via-cyan-200 to-white mx-auto mb-3 sm:mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-blue-100 px-2">
              We're here to help you find your perfect property
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/20 transition-all duration-700 ${isVisible['contact'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-5 group">
                  <div className="bg-white/20 p-3 sm:p-4 rounded-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Address</h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg">
                      #457, 16th Cross,
                      <br />
                      Narayana Nagar, 1st Block,
                      <br />
                      J.P. Nagar, 9th Phase,
                      <br />
                      Bangalore - 560062
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6 sm:pt-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-5 group">
                      <div className="bg-white/20 p-3 sm:p-4 rounded-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Phone</h3>
                        <div className="space-y-2">
                          <a
                            href="tel:+919448533341"
                            className="block text-white hover:text-blue-100 text-base sm:text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105 break-all"
                          >
                            +91 94485 33341
                          </a>
                          <a
                            href="tel:+918971801990"
                            className="block text-white hover:text-blue-100 text-base sm:text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105 break-all"
                          >
                            +91 89718 01990
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 sm:pt-6 space-y-2 sm:space-y-3">
                  <a
                    href="tel:+919448533341"
                    className="block w-full bg-gradient-to-r from-white via-cyan-50 to-white hover:from-white hover:via-blue-50 hover:to-cyan-50 text-blue-600 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-center text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border border-white/30 active:scale-95"
                  >
                    Call: +91 94485 33341
                  </a>
                  <a
                    href="tel:+918971801990"
                    className="block w-full bg-gradient-to-r from-white via-cyan-50 to-white hover:from-white hover:via-blue-50 hover:to-cyan-50 text-blue-600 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-center text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border border-white/30 active:scale-95"
                  >
                    Call: +91 89718 01990
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-8 sm:py-10 animate-fadeIn">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent px-2 animate-gradient bg-[length:200%_auto]">
              Sree Balaji Enterprises
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-2 px-2">
              Your trusted partner for B.D.A. Sites in Bangalore
            </p>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto mb-3 sm:mb-4 rounded-full"></div>
            <p className="text-xs sm:text-sm text-gray-400 px-2">
              © {new Date().getFullYear()} Sree Balaji Enterprises. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
