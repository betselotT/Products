"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { Plus, Package, Sparkles } from "lucide-react";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Sparkles
              className="h-24 w-24 sm:h-32 sm:w-32 text-[#000058] animate-spin"
              style={{ animationDuration: "8s" }}
            />
          </div>
          <div className="relative z-10">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#000058] to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6 opacity-0 animate-pulse px-4"
              style={{
                animation: "fadeIn 0.6s ease-out forwards",
                textWrap: "balance",
              }}
            >
              Current Products 🚀
            </h1>
            <p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
              style={{ textWrap: "pretty" }}
            >
              Discover our amazing collection of products crafted with care and
              innovation
            </p>
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div
                key={product._id}
                className="opacity-0"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20">
            <div className="relative mx-auto h-24 w-24 sm:h-32 sm:w-32 mb-6 sm:mb-8">
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#000058] to-blue-600 rounded-full opacity-20 animate-pulse"
                style={{
                  animationDuration: "3s",
                  boxShadow: "0 0 20px -5px rgba(0, 0, 88, 0.3)",
                }}
              ></div>
              <div className="absolute inset-2 sm:inset-4 bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-full flex items-center justify-center">
                <Package
                  className="h-8 w-8 sm:h-12 sm:w-12 text-[#000058] animate-bounce"
                  style={{ animationDuration: "2s" }}
                />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              No products found
            </h3>
            <p
              className="text-gray-600 mb-8 sm:mb-10 max-w-md mx-auto text-base sm:text-lg leading-relaxed px-4"
              style={{ textWrap: "pretty" }}
            >
              Get started by creating your first product. It's quick, easy, and
              exciting!
            </p>
            <Link
              to="/create"
              className="inline-block w-full sm:w-auto group bg-gradient-to-r from-[#000058] to-blue-600 hover:from-blue-600 hover:to-[#000058] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg relative overflow-hidden mx-4 sm:mx-0"
              style={{ boxShadow: "0 0 20px -5px rgba(0, 0, 88, 0.3)" }}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="flex items-center justify-center">
                <Plus className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 group-hover:rotate-90 transition-transform duration-300" />
                Create Your First Product
              </span>
            </Link>
          </div>
        )}
      </div>

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
      `}</style>
    </div>
  );
};

export default HomePage;
