import React from "react";
import productData from '../../../assets/file.json'; // Import your product JSON data
import { useNavigate } from "react-router-dom";

const Saree = () => {
  const navigate = useNavigate();

  // Filter the products based on the provided IDs
  const filteredProducts = productData.filter(product => 
    [37, 38, 39, 40].includes(product.id)
  );

  const handleProductClick = (product) => {
    // Navigate to the details page and pass the product data as state
    navigate(`/details`, { state: { product } });
  };

  return (
    <>
      <div className="bg-[#000000]">
        <div className="text-center text-white text-3xl max-sm:text-xl font-semibold pt-10 py-6 mt-10">
          <h1>Srivalli Collection</h1>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 max-sm:grid-cols-2 gap-8 max-sm:gap-3 p-8 max-sm:p-3 pb-14">
          {filteredProducts.map(product => (
            <div key={product.id} className="flex justify-center">
              <img
                src={product.img[0]} // Display the first image of the product
                alt={product.name}
                className="w-full h-auto object-cover cursor-pointer"
                onClick={() => handleProductClick(product)} // Handle image click
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Saree;
