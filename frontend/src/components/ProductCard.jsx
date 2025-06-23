"use client";

import { useState } from "react";
import { Edit2, Trash2, X, DollarSign } from "lucide-react";
import { useProductStore } from "../store/product";
import { toast } from "sonner";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    setIsLoading(true);
    const { success, message } = await deleteProduct(pid);
    setIsLoading(false);

    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    setIsLoading(true);
    const { success, message } = await updateProduct(pid, updatedProduct);
    setIsLoading(false);
    setIsModalOpen(false);

    if (success) {
      toast.success("Product updated successfully");
    } else {
      toast.error(message);
    }
  };

  return (
    <>
      <div
        className="group bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl overflow-hidden border border-gray-100 relative transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl"
        style={{
          borderRadius: "2rem",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#000058] to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <DollarSign className="h-4 w-4 text-[#000058]" />
          </div>
        </div>

        <div className="p-6">
          <h3
            className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#000058] transition-colors duration-300 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textWrap: "balance",
            }}
          >
            {product.name}
          </h3>

          <div className="flex items-center justify-between mb-6">
            <p className="text-3xl font-bold bg-gradient-to-r from-[#000058] to-blue-600 bg-clip-text text-transparent">
              ${product.price}
            </p>
            <div
              className="h-8 w-8 bg-gradient-to-r from-[#000058] to-blue-600 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
              style={{
                animationDuration: "3s",
                boxShadow: "0 0 20px -5px rgba(0, 0, 88, 0.3)",
              }}
            ></div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 group/btn inline-flex items-center justify-center px-4 py-3 border border-[#000058] text-sm font-semibold rounded-xl text-[#000058] bg-white hover:bg-[#000058] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000058] transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden"
              disabled={isLoading}
            >
              <div className="absolute inset-0 bg-[#000058] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
              <Edit2 className="h-4 w-4 mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Edit</span>
            </button>

            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="flex-1 group/btn inline-flex items-center justify-center px-4 py-3 border border-red-500 text-sm font-semibold rounded-xl text-red-500 bg-white hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden"
              disabled={isLoading}
            >
              <div className="absolute inset-0 bg-red-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
              <Trash2 className="h-4 w-4 mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Delete</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto opacity-0"
          style={{ animation: "fadeIn 0.3s ease-out forwards" }}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300"
              onClick={() => setIsModalOpen(false)}
            />

            <div
              className="inline-block align-bottom bg-white/80 backdrop-blur-md border border-white/20 shadow-lg text-left overflow-hidden transform transition-all duration-300 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-100 opacity-0"
              style={{
                borderRadius: "2rem",
                boxShadow: "0 0 40px -10px rgba(0, 0, 88, 0.4)",
                animation: "scaleIn 0.3s ease-out forwards",
              }}
            >
              <div className="bg-white px-6 pt-6 pb-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#000058] to-blue-600 bg-clip-text text-transparent">
                    Update Product
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Product Name
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      value={updatedProduct.name}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#000058] focus:border-transparent transition-all duration-200 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Price
                    </label>
                    <input
                      type="number"
                      placeholder="Price"
                      value={updatedProduct.price}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          price: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#000058] focus:border-transparent transition-all duration-200 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Image URL
                    </label>
                    <input
                      type="url"
                      placeholder="Image URL"
                      value={updatedProduct.image}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          image: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#000058] focus:border-transparent transition-all duration-200 bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse sm:gap-3">
                <button
                  onClick={() =>
                    handleUpdateProduct(product._id, updatedProduct)
                  }
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#000058] to-blue-600 hover:from-blue-600 hover:to-[#000058] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex justify-center px-6 py-3 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000058] sm:w-auto disabled:opacity-50"
                  style={{ boxShadow: "0 0 20px -5px rgba(0, 0, 88, 0.3)" }}
                >
                  {isLoading ? "Updating..." : "Update Product"}
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-xl border border-gray-300 shadow-sm px-6 py-3 bg-white text-base font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000058] sm:mt-0 sm:w-auto transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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
    </>
  );
};

export default ProductCard;
