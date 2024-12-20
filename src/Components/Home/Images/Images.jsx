import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Images.css"; // Ensure this file has the necessary styles.
import pic1 from "../../../assets/im40.jpg";
import pic2 from "../../../assets/im12.jpg";
import pic3 from "../../../assets/im37.jpg";
import pic4 from "../../../assets/im38.jpg";
import pic5 from "../../../assets/im36.jpg";
import pic6 from "../../../assets/im35.jpg";
import pic7 from "../../../assets/im41.jpg";
import pic8 from "../../../assets/im42.jpg";

const Images = () => {
  const navigate = useNavigate();
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  const handleImageClick = (index) => {
    console.log("Navigating to category", index); 
    navigate("/category", { state: { categoryIndex: index } });
  };

  return (
    <>
      <div className="text-center text-3xl max-sm:text-xl font-semibold py-6">
        <h1>SHOP BY CATEGORY</h1>
      </div>

      <div className="mx-5 max-sm:mx-3">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-sm:gap-3">
          {images.map((pic, index) => (
            <div key={index} className="relative group cursor-pointer" onClick={() => handleImageClick(index)} >
              <div className="">
              <img
                src={pic}
                alt={`product ${index + 1}`}
                className="w-full h-full object-contain  transition duration-300 ease-in-out"
              />
              </div>
              {/* Overlay and Plus Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-200 ease-in-out">
                <span className="text-white font-light text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Images;
