"use client";

import { useState } from "react";
import { useProductStore } from "../store/product";
import { Package, DollarSign, ImageIcon, Sparkles } from "lucide-react";
import { toast } from "sonner";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    const { success, message } = await createProduct(newProduct);
    setIsLoading(false);

    if (success) {
      toast.success(message);
      setNewProduct({ name: "", price: "", image: "" });
    } else {
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 sm:mb-10 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Sparkles
              className="h-16 w-16 sm:h-24 sm:w-24 text-[#000058] animate-pulse"
              style={{ animationDuration: "3s" }}
            />
          </div>
          <div className="relative z-10">
            <div
              className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-gradient-to-r from-[#000058] to-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 animate-bounce"
              style={{
                boxShadow: "0 0 20px -5px rgba(0, 0, 88, 0.3)",
                animationDuration: "2s",
              }}
            >
              <Package className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#000058] to-blue-600 bg-clip-text text-transparent mb-2 sm:mb-3 px-4"
              style={{ textWrap: "balance" }}
            >
              Create New Product
            </h1>
            <p
              className="text-gray-600 text-base sm:text-lg px-4"
              style={{ textWrap: "pretty" }}
            >
              Add a new product to your store
            </p>
          </div>
        </div>

        <div
          className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden"
          style={{
            boxShadow: "0 0 40px -10px rgba(0, 0, 88, 0.4)",
            borderRadius: "1.5rem",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#000058] to-blue-600"></div>

          <div className="space-y-6 sm:space-y-8">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                Product Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <Package className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-[#000058] transition-colors duration-200" />
                </div>
                <input
                  type="text"
                  placeholder="Enter product name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#000058] focus:border-transparent transition-all duration-200 placeholder-gray-400 hover:border-gray-300 bg-white text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                Price
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-[#000058] transition-colors duration-200" />
                </div>
                <input
                  type="number"
                  placeholder="0.00"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#000058] focus:border-transparent transition-all duration-200 placeholder-gray-400 hover:border-gray-300 bg-white text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                Image URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <ImageIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-[#000058] transition-colors duration-200" />
                </div>
                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={newProduct.image}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, image: e.target.value })
                  }
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#000058] focus:border-transparent transition-all duration-200 placeholder-gray-400 hover:border-gray-300 bg-white text-sm sm:text-base"
                />
              </div>
            </div>

            {newProduct.image && (
              <div
                className="opacity-0"
                style={{ animation: "fadeIn 0.6s ease-out forwards" }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                  Preview
                </label>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={newProduct.image || "/placeholder.svg"}
                    alt="Product preview"
                    className="w-full h-32 sm:h-40 object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            )}

            <button
              onClick={handleAddProduct}
              disabled={isLoading}
              className="w-full group bg-gradient-to-r from-[#000058] to-blue-600 hover:from-blue-600 hover:to-[#000058] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 py-3 sm:py-4 px-4 sm:px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000058] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden text-sm sm:text-base"
              style={{ boxShadow: "0 0 20px -5px rgba(0, 0, 88, 0.3)" }}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              {isLoading ? (
                <div className="flex items-center justify-center relative z-10">
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2 sm:mr-3"></div>
                  Creating Product...
                </div>
              ) : (
                <span className="relative z-10">Add Product</span>
              )}
            </button>
          </div>
        </div>
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
      `}</style>
    </div>
  );
};

export default CreatePage;
