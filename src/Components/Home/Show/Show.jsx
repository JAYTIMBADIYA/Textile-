import React, { useState, useEffect } from "react";
import productData from '../../../assets/file.json';
import './Show.css'; // Import the external CSS file

const Show = () => {
  // Extract the data for products with index 21 to 24
  const selectedProducts = productData.slice(21, 40);

  // Create an array of all images across selected products
  const allImages = selectedProducts.flatMap(product => product.img[0]);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');

    // Pause the animation by changing the animation-play-state
    scrollContainer.style.animationPlayState = isPaused ? 'paused' : 'running';

    return () => {
      // Reset the animation state on unmount
      scrollContainer.style.animationPlayState = 'running';
    };
  }, [isPaused]); 

  return (
    <div>
      <div className="text-center text-3xl font-semibold py-6 mt-5">
        <h1>@srivalli.in</h1>
      </div>

      <div className="overflow-hidden">
        {/* Scrolling container */}
        <div className="scroll-container"
        onMouseEnter={() => setIsPaused(true)} // Pause on mouse enter
        onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
        >
          {/* Duplicate images for seamless scrolling */}
          {allImages.concat(allImages).map((imageUrl, imgIndex) => (
            <img
              key={imgIndex}
              src={imageUrl}
              alt={`product ${imgIndex + 1}`}
              className="image-wrapper"
            />
          ))}
        </div>
      </div>

      <div className="text-center my-6">
        <button className="bg-black text-white py-1 px-6 rounded-3xl">
          <a 
          href="https://www.instagram.com/shrivalli_fashion_store?igsh=aHk4OWw1ZzkxbDZ5"
          target="_blank"
          rel="noopener noreferrer"
          >
            FOLLOW US
          </a>
        </button>
      </div>
    </div>
  );
};

export default Show;

