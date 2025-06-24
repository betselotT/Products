"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Users,
  Zap,
  Shield,
  Smartphone,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Quote,
  Sparkles,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="section-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Lightning Fast",
      description:
        "Experience blazing fast performance with our optimized platform",
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Secure & Safe",
      description:
        "Your data is protected with enterprise-grade security measures",
    },
    {
      icon: <Smartphone className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Mobile First",
      description: "Perfectly optimized for all devices and screen sizes",
    },
    {
      icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Global Reach",
      description:
        "Connect with customers worldwide with our global infrastructure",
    },
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Analytics",
      description: "Get detailed insights and analytics to grow your business",
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team members and stakeholders",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "This platform has revolutionized how we manage our products. The interface is intuitive and the performance is outstanding!",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Amazing experience! The analytics and insights have helped us make better business decisions. Highly recommended!",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartupHub",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The best product management tool I've ever used. It's fast, reliable, and the support team is fantastic!",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "50K+", label: "Products Managed" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      features: [
        "Up to 100 products",
        "Basic analytics",
        "Email support",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      features: [
        "Up to 1000 products",
        "Advanced analytics",
        "Priority support",
        "Team collaboration",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      features: [
        "Unlimited products",
        "Custom analytics",
        "24/7 phone support",
        "Advanced integrations",
        "Custom branding",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-10 left-4 sm:top-20 sm:left-20 w-32 h-32 sm:w-72 sm:h-72 bg-gradient-to-r from-[#000058] to-blue-600 rounded-full opacity-10 animate-pulse"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 animate-bounce"
            style={{ animationDuration: "6s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-5 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div
            className="opacity-0 transform translate-y-10"
            style={{ animation: "fadeInUp 1s ease-out forwards" }}
          >
            <div className="flex justify-center mb-6 sm:mb-8">
              <div
                className="bg-gradient-to-r from-[#000058] to-blue-600 rounded-full p-3 sm:p-4 animate-bounce"
                style={{
                  animationDuration: "2s",
                  boxShadow: "0 0 40px -10px rgba(0, 0, 88, 0.4)",
                }}
              >
                <ShoppingCart className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-white" />
              </div>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-[#000058] via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 sm:mb-8 px-4"
              style={{ textWrap: "balance" }}
            >
              Product Store Revolution
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
              style={{ textWrap: "pretty" }}
            >
              Transform your business with our cutting-edge product management
              platform. Built for the future, designed for today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link
                to="/products"
                className="w-full sm:w-auto group bg-gradient-to-r from-[#000058] to-blue-600 hover:from-blue-600 hover:to-[#000058] text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden"
                style={{ boxShadow: "0 0 30px -5px rgba(0, 0, 88, 0.4)" }}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  Get Started Free
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <div
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="section-stats"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#000058] to-blue-600 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center opacity-0 transform translate-y-10"
                style={{
                  animation: isVisible["section-stats"]
                    ? `fadeInUp 0.8s ease-out forwards`
                    : "none",
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2 animate-pulse"
                  style={{ animationDuration: "2s" }}
                >
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base lg:text-xl text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="section-features"
        className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <Sparkles
            className="absolute top-10 right-4 sm:top-20 sm:right-20 h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32 text-[#000058] opacity-10 animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <div
            className="absolute bottom-10 left-4 sm:bottom-20 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-5 animate-pulse"
            style={{ animationDuration: "4s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0 transform translate-y-10"
            style={{
              animation: isVisible["section-features"]
                ? "fadeInUp 0.8s ease-out forwards"
                : "none",
            }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#000058] to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6 px-4"
              style={{ textWrap: "balance" }}
            >
              Powerful Features
            </h2>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
              style={{ textWrap: "pretty" }}
            >
              Everything you need to manage your products efficiently and scale
              your business
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 opacity-0"
                style={{
                  borderRadius: "1.5rem",
                  animation: isVisible["section-features"]
                    ? `fadeInUp 0.8s ease-out forwards`
                    : "none",
                  animationDelay: `${index * 150}ms`,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div
                  className="bg-gradient-to-r from-[#000058] to-blue-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ boxShadow: "0 0 20px -5px rgba(0, 0, 88, 0.3)" }}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#000058] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="section-testimonials"
        className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#000058] to-blue-600 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-5 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 4 + 3}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0 transform translate-y-10"
            style={{
              animation: isVisible["section-testimonials"]
                ? "fadeInUp 0.8s ease-out forwards"
                : "none",
            }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4"
              style={{ textWrap: "balance" }}
            >
              What Our Customers Say
            </h2>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4"
              style={{ textWrap: "pretty" }}
            >
              Join thousands of satisfied customers who trust our platform
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center opacity-0 transform scale-95"
              style={{
                borderRadius: "1.5rem",
                animation: isVisible["section-testimonials"]
                  ? "scaleIn 0.8s ease-out forwards"
                  : "none",
                animationDelay: "300ms",
              }}
            >
              <Quote className="h-12 w-12 sm:h-16 sm:w-16 text-white/50 mx-auto mb-6 sm:mb-8" />

              <div className="relative h-auto sm:h-32 overflow-hidden mb-6 sm:mb-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="transition-all duration-500 transform"
                    style={{
                      opacity: currentTestimonial === index ? 1 : 0,
                      transform: `translateY(${
                        currentTestimonial === index ? "0" : "20px"
                      })`,
                      position:
                        window.innerWidth >= 640 ? "absolute" : "static",
                      inset: window.innerWidth >= 640 ? "0" : "auto",
                    }}
                  >
                    <p
                      className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed px-4"
                      style={{ textWrap: "pretty" }}
                    >
                      "{testimonial.content}"
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src={
                    testimonials[currentTestimonial].image || "/placeholder.svg"
                  }
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white/30"
                />
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl font-bold text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm sm:text-base text-blue-200">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-3 mt-6 sm:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor:
                        currentTestimonial === index
                          ? "white"
                          : "rgba(255,255,255,0.3)",
                      transform:
                        currentTestimonial === index
                          ? "scale(1.2)"
                          : "scale(1)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="section-pricing"
        className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div
            className="absolute top-10 left-4 sm:top-20 sm:left-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-5 animate-pulse"
            style={{ animationDuration: "5s" }}
          ></div>
          <div
            className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-5 animate-bounce"
            style={{ animationDuration: "8s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0 transform translate-y-10"
            style={{
              animation: isVisible["section-pricing"]
                ? "fadeInUp 0.8s ease-out forwards"
                : "none",
            }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#000058] to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6 px-4"
              style={{ textWrap: "balance" }}
            >
              Simple Pricing
            </h2>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
              style={{ textWrap: "pretty" }}
            >
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="relative group opacity-0 transform translate-y-10"
                style={{
                  animation: isVisible["section-pricing"]
                    ? `fadeInUp 0.8s ease-out forwards`
                    : "none",
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className="bg-gradient-to-r from-[#000058] to-blue-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold animate-pulse"
                      style={{
                        animationDuration: "2s",
                        boxShadow: "0 0 20px -5px rgba(0, 0, 88, 0.4)",
                      }}
                    >
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden"
                  style={{
                    borderRadius: "1.5rem",
                    border: plan.popular
                      ? "2px solid #000058"
                      : "1px solid rgba(255,255,255,0.2)",
                    boxShadow: plan.popular
                      ? "0 0 40px -10px rgba(0, 0, 88, 0.3)"
                      : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#000058] to-blue-600"></div>
                  )}

                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#000058] to-blue-600 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-lg sm:text-xl text-gray-600 ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm sm:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95"
                    style={{
                      background: plan.popular
                        ? "linear-gradient(to right, #000058, #3b82f6)"
                        : "white",
                      color: plan.popular ? "white" : "#000058",
                      border: plan.popular ? "none" : "2px solid #000058",
                      boxShadow: plan.popular
                        ? "0 0 20px -5px rgba(0, 0, 88, 0.3)"
                        : "none",
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="section-cta"
        className="py-16 sm:py-24 lg:py-32 bg-gradient-to-r from-[#000058] via-blue-600 to-purple-600 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="opacity-0 transform translate-y-10"
            style={{
              animation: isVisible["section-cta"]
                ? "fadeInUp 0.8s ease-out forwards"
                : "none",
            }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 px-4"
              style={{ textWrap: "balance" }}
            >
              Ready to Get Started?
            </h2>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
              style={{ textWrap: "pretty" }}
            >
              Join thousands of businesses already using our platform to manage
              their products efficiently
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link
                to="/create"
                className="w-full sm:w-auto group bg-white text-[#000058] hover:bg-gray-100 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden"
                style={{ boxShadow: "0 0 30px -5px rgba(255, 255, 255, 0.3)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#000058] to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>

              <button className="w-full sm:w-auto group flex items-center justify-center text-white hover:text-blue-200 font-semibold text-lg sm:text-xl transition-colors duration-300">
                <div
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 sm:p-4 mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    boxShadow: "0 0 20px -5px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div
                  className="bg-gradient-to-r from-[#000058] to-blue-600 rounded-full p-2 sm:p-3 animate-pulse"
                  style={{
                    animationDuration: "3s",
                    boxShadow: "0 0 20px -5px rgba(0, 0, 88, 0.4)",
                  }}
                >
                  <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#000058] to-blue-600 bg-clip-text text-transparent">
                  Product Store
                </span>
              </div>
              <p
                className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md"
                style={{ textWrap: "pretty" }}
              >
                The ultimate platform for managing your products efficiently.
                Built with modern technology and designed for scale.
              </p>
              <div className="flex flex-wrap gap-4 sm:space-x-6 sm:gap-0">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <button
                    key={index}
                    className="bg-gray-800 hover:bg-gradient-to-r hover:from-[#000058] hover:to-blue-600 p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                Product
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {["Features", "Pricing", "API", "Documentation"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                Contact
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start text-gray-400 text-sm sm:text-base">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="break-all">hello@productstore.com</span>
                </li>
                <li className="flex items-center text-gray-400 text-sm sm:text-base">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-start text-gray-400 text-sm sm:text-base">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2024 Product Store. All rights reserved. Built with ❤️ for
              amazing businesses.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
