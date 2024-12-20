import React, { useState, useEffect } from 'react';
import productData from '../../../assets/file.json'; // Assuming productData is an array of products
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "react-router-dom";

const Releted = ({ product }) => {
  const [randomProducts, setRandomProducts] = useState([]);
  const navigate = useNavigate();

  // Function to shuffle the products array and get the first 5
  const getRandomProducts = () => {
    // Exclude the current product from the related products
    const filteredProducts = productData.filter(p => p.id !== product.id);
    const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  // Set random products when the component mounts
  useEffect(() => {
    setRandomProducts(getRandomProducts());
  }, [product]); // Empty dependency array means this runs once on mount

  const handleProductClick = (selectedProduct) => {
    navigate(`/details`, { state: { product:selectedProduct  } });
  };

  return (
    <>
      <div>
        <h1 className='text-center text-base font-semibold py-4'>Related Products</h1>

        <div className="grid max-2xl:grid-cols-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 gap-6 max-sm:gap-0 ">
          {randomProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="bg-white rounded-lg shadow-lg p-4 max-sm:p-1" onClick={() => handleProductClick(relatedProduct)}>
              <div className="relative overflow-hidden">
                <img
                  src={relatedProduct.img[0]} // Assuming you want the first image for related products
                  alt={relatedProduct.name}
                  className="w-[300px] m-auto h-[400px] max-sm:h-[160px] object-cover max-sm:object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-2 left-9 bg-red-500 text-white text-xs px-2 py-1 rounded max-sm:hidden">45% OFF</span>
                <span className="absolute top-2 right-9 bg-blue-500 text-white text-xs px-2 py-1 rounded max-sm:hidden">Web Exclusive</span>
              </div>
              <div className="mt-4 mx-3 max-sm:mx-1 max-sm:mt-0 p-4">
                <h3 className="text-sm md:text-lg font-bold text-gray-800">{relatedProduct.name}</h3>
                <p className="text-xs md:text-sm text-gray-500">{relatedProduct.color}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm md:text-base text-red-700 font-semibold">₹{relatedProduct.price}</p>
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

export default Releted;
