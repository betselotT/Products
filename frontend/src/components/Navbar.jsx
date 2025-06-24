"use client";

import { Link } from "react-router-dom";
import { Plus, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-2 sm:space-x-3 text-lg sm:text-2xl font-bold uppercase tracking-wide text-[#000058] hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <ShoppingCart
                  className="h-6 w-6 sm:h-8 sm:w-8 text-[#000058] animate-pulse"
                  style={{ animationDuration: "3s" }}
                />
                <div
                  className="absolute -top-1 -right-1 h-2 w-2 sm:h-3 sm:w-3 bg-red-500 rounded-full animate-bounce"
                  style={{
                    animationDuration: "2s",
                    boxShadow: "0 0 20px -5px rgba(0, 0, 88, 0.3)",
                  }}
                ></div>
              </div>
              <span className="bg-gradient-to-r from-[#000058] to-blue-600 bg-clip-text text-transparent hidden sm:inline">
                Product Store
              </span>
              <span className="bg-gradient-to-r from-[#000058] to-blue-600 bg-clip-text text-transparent sm:hidden text-base">
                Store
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/products"
              className="group bg-gradient-to-r from-[#000058] to-blue-600 hover:from-blue-600 hover:to-[#000058] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 px-4 sm:px-6 py-2 sm:py-2.5 text-sm relative overflow-hidden"
            >
              Products
            </Link>

            <Link
              to="/create"
              className="group bg-gradient-to-r from-[#000058] to-blue-600 hover:from-blue-600 hover:to-[#000058] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 px-4 sm:px-6 py-2 sm:py-2.5 text-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#000058] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Add Product</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#000058] p-2 rounded-lg transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            <Link
              to="/products"
              className="block mx-4 group bg-gradient-to-r from-[#000058] to-blue-600 hover:from-blue-600 hover:to-[#000058] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 px-6 py-3 text-center relative overflow-hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>

            <Link
              to="/create"
              className="block mx-4 group bg-gradient-to-r from-[#000058] to-blue-600 hover:from-blue-600 hover:to-[#000058] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 px-6 py-3 text-center relative overflow-hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#000058] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center">
                Add Product
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
