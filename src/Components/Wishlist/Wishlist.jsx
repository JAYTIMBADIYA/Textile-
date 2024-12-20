import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Wishlist = () => {
  const navigate = useNavigate();
  

  // Load wishlist from localStorage
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (indexToRemove) => {
    const updatedWishlist = wishlist.filter(
      (_, index) => index !== indexToRemove
    );
    setWishlist(updatedWishlist);

    // Update localStorage after removing the item
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleEyeClick = (product) => {
    navigate(`/details`, { state: { product } });
  };


  return (
    <>
      <div className="px-44 max-lg:px-15px max-md:px-10 max-sm:px-3">
        <div className="container mx-auto py-4 flex gap-2 ">
          <p
            className="text-gray-500 cursor-pointer hover:text-black"
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <p>Wishlist</p>
        </div>

        <div className="my-10">
          <h1 className="text-2xl font-medium">WISH-LIST</h1>
        </div>
        <hr />

        <div className="my-4 gap-4 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1">
          {wishlist.length > 0 ? (
            wishlist.map((product, index) => (
              <div
                key={index}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden my-4"
                
              >
                {/* Discount Label */}
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  45% OFF
                </div>

                {/* Close and Eye Icons */}
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button
                    className="bg-white p-2 rounded-full shadow-md"
                    onClick={() => removeFromWishlist(index)}
                  >
                    <IoMdClose className="text-red-600" size={20} />
                  </button>
                  <button
                    className="bg-white p-2 rounded-full shadow-md"
                    onClick={() => handleEyeClick(product)}
                    
                  >
                    <FaEye className="text-blue-600" size={20} />
                  </button>
                </div>

                {/* Product Image */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full object-contain h-72"
                />

                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-700">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-gray-500 line-through">₹ 1999</span>
                    <span className="text-red-600 font-semibold">
                      ₹ {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your wishlist is empty.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
