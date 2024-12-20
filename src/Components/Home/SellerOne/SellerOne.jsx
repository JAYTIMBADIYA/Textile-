import React, { useState, useEffect } from "react";
import productData from "../../../assets/file.json";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './SellerOne.css';
import { useNavigate } from "react-router-dom";

const SellerOne = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(8);
  const [currentImageIndices, setCurrentImageIndices] = useState({});

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


  // Filter productData to start from ID 9 to 17 initially
  const initialProducts = productData.filter(product => product.id >= 9 && product.id <= 74);

  const handleProductClick = (product) => {
    navigate(`/details`, { state: { product, selectedImageIndex: 20  } });
  };

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Increase the count by 4
  };
  
  return (
    <>
    <div className="fonf">
      <div className="text-center text-3xl max-sm:text-xl font-semibold py-6 max-sm:py-3 mt-10 max-sm:mt-5">
        <h1>Most Loved</h1>
      </div>

      <div className="grid max-2xl:grid-cols-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 gap-6 max-sm:gap-0">
        {initialProducts.slice(0, visibleCount).map((product, index) => (
          <div key={product.id} className="p-4 max-sm:p-2" onClick={() => handleProductClick(product)}>
            <div 
              className="relative overflow-hidden"
              onClick={() => handleProductClick(product)}  
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              >
              {/* Product Image */}
              <img 
                src={product.img[currentImageIndices[index] !== undefined ? currentImageIndices[index] : 0]} // Access the first image from the array
                alt={product.name} 
                className="w-[300px] m-auto h-[400px] max-sm:h-[160px] object-cover max-sm:object-contain transition-transform duration-300 ease-in-out transform hover:scale-105" 
                loading="lazy"
              />
              {/* Discount Badge */}
              <span className="absolute top-2 left-5 bg-red-500 text-white text-xs px-2 py-1 rounded max-sm:hidden">45% OFF</span>
              {/* Web Exclusive Badge */}
              <span className="absolute top-2 right-5 bg-blue-500 text-white text-xs px-2 py-1 rounded max-sm:hidden">Web Exclusive</span>
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

      {visibleCount < productData.length && (
        <div className="text-center py-4">
          <button 
            onClick={handleViewMore} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View More
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default SellerOne;
