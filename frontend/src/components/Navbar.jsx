import { Link } from "react-router-dom";
import { Plus, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-3 text-2xl font-bold uppercase tracking-wide text-[#000058] hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <ShoppingCart
                  className="h-8 w-8 text-[#000058] animate-pulse"
                  style={{ animationDuration: "3s" }}
                />
                <div
                  className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-bounce"
                  style={{
                    animationDuration: "2s",
                    boxShadow: "0 0 20px -5px rgba(0, 0, 88, 0.3)",
                  }}
                ></div>
              </div>
              <span className="bg-gradient-to-r from-[#000058] to-blue-600 bg-clip-text text-transparent">
                Product Store
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/create"
              className="group bg-gradient-to-r from-[#000058] to-blue-600 hover:from-blue-600 hover:to-[#000058] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 px-6 py-2.5 text-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#000058] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Plus className="h-5 w-5 mr-2 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              <span className="relative z-10">Add Product</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
