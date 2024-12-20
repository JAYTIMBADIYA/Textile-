import React, { useState } from "react";
import productData from "../../../assets/file.json"; // Assuming productData is an array of products
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

const Title = ({ startIndex, endIndex }) => {
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setCurrentImageIndices((prev) => ({ ...prev, [index]: 1 })); // Set to the second image
  };

  const handleMouseLeave = (index) => {
    setCurrentImageIndices((prev) => ({ ...prev, [index]: 0 })); // Revert to the first image
  };

  const handleProductClick = (product) => {
    navigate(`/details`, { state: { product } });
  };

  const returnToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="px-4 max-sm:px-2">
      <div className="pt-3 flex gap-2">
        <p
          className="text-gray-500 cursor-pointer hover:text-black"
          onClick={() => returnToHome()}
        >
          Home
        </p>
        <span>
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-black">Category</p>
      </div>

      <div>
        <div className="text-2xl max-sm:text-xl font-bold md:text-3xl py-7">
          <h1>SAREE PIECE PRINTED</h1>
        </div>
        <hr />
        <div className="mt-2">
          <div className="flex justify-between">
            <p className="font-semibold">VIEW AS</p>
            <p className="font-semibold">ITEMS PER PAGE</p>
          </div>
        </div>
      </div>

      <div className="grid max-2xl:grid-cols-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 gap-6 max-sm:gap-0">
        {productData.slice(startIndex, endIndex).map((product, index) => (
          <div
            key={product.id}
            className="mt-4"
            onClick={() => handleProductClick(product)}
          >
            <div className="relative overflow-hidden">
              {/* Product Image */}
              <img
                src={
                  product.img[
                    currentImageIndices[index] !== undefined
                      ? currentImageIndices[index]
                      : 0
                  ]
                } // Access the image based on current index
                alt={product.name}
                className="w-[300px] m-auto h-[400px] max-sm:h-[170px] object-cover max-sm:object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
                loading="lazy"
                onMouseEnter={() => handleMouseEnter(index)} // Change to second image on mouse enter
                onMouseLeave={() => handleMouseLeave(index)} // Revert to first image on mouse leave
              />
              {/* Discount Badge */}
              <span className="absolute top-2 left-8 bg-red-500 text-white text-xs px-2 py-1 rounded max-sm:hidden">
                45% OFF
              </span>
              {/* Web Exclusive Badge */}
              <span className="absolute top-2 right-8 bg-blue-500 text-white text-xs px-2 py-1 rounded max-sm:hidden">
                Web Exclusive
              </span>
            </div>
            <div className="mt-4 mx-3 max-sm:mx-1 max-sm:mt-0 p-4 max-sm:p-1">
              <h3 className="text-lg max-sm:text-sm font-bold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500">{product.color}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-red-700 font-semibold">₹{product.price}</p>
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-red-500">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="text-gray-500 hover:text-blue-500">
                    <i className="fa fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Title;
