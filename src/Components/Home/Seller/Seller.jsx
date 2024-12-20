import React, { useState, useEffect } from "react";
import "./Seller.css"; // Import your custom styles here
import productData from '../../../assets/file.json'; // Assuming productData is an array of products
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "react-router-dom";

const Seller = () => {
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    productData.forEach((product) => {
      const secondImage = product.img[1]; // Assuming second image is at index 1
      if (secondImage) {
        const img = new Image();
        img.src = secondImage; // Pre-load second image
      }
    });
  }, []);

  const handleMouseEnter = (index) => {
    // Immediately show second image
    setCurrentImageIndices((prev) => ({ ...prev, [index]: 1 }));
  };

  const handleMouseLeave = (index) => {
    // Reset to first image
    setCurrentImageIndices((prev) => ({ ...prev, [index]: 0 }));
  };

  const handleProductClick = (product) => {
    navigate(`/details`, { state: { product, selectedImageIndex: 0  } });
  };

  return (
    <>
    <div className="fonf">
      <div className="text-center text-3xl md:text-4xl max-sm:text-xl font-semibold py-6 max-sm:py-3 mt-10 max-sm:mt-5">
        <h1>Best Sellers</h1>
      </div>
          
      <div className="grid max-2xl:grid-cols-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 gap-6 max-sm:gap-0">
        {productData.slice(0, 8).map((product, index) => (
          <div key={product.id} id={`product-${index}`} className="p-4 max-sm:p-2">
            <div 
              className="relative overflow-hidden" 
              onClick={() => handleProductClick(product, index)} 
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Product Image */}
              <img
                src={product.img[currentImageIndices[index] !== undefined ? currentImageIndices[index] : 0]} // Access the image based on current index
                alt={product.name}
                className="w-[300px] m-auto h-[400px] max-sm:h-[160px] object-cover max-sm:object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
                loading="lazy"
              />
              {/* Discount Badge */}
              <span className="absolute top-2 left-9 bg-red-500 text-white text-xs px-2 py-1 rounded max-sm:hidden">45% OFF</span>
              {/* Web Exclusive Badge */}
              <span className="absolute top-2 right-9 bg-blue-500 text-white text-xs px-2 py-1 rounded max-sm:hidden">Web Exclusive</span>
            </div>
            <div className="mt-4 mx-3 max-sm:mx-1 max-sm:mt-0 py-2">
              <h3 className="text-sm md:text-lg font-bold text-gray-800 max-sm:text-[15px]">{product.name}</h3>
              <p className="text-xs md:text-sm text-gray-500">{product.color}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm md:text-base text-red-700 font-semibold">₹{product.price}</p>
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-red-500 text-xs md:text-sm">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="text-gray-500 hover:text-blue-500 text-xs md:text-sm">
                    <i className="fa fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Seller;
