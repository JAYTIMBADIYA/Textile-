import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate, useLocation, useRef } from "react-router-dom";

const Product = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // To track the main image displayed
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("3PC-7MTR");
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  
    const likedProduct = {
      img: Array.isArray(product.img) ? product.img : [product.img], // Ensure img is an array
      name: product.name,
      price: product.price,
    };
  
    // Get wishlist from localStorage and update it
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    // Check if the product is already in the wishlist
    const productExists = wishlist.some(
      (item) => item.name === likedProduct.name
    );
  
    if (!productExists) {
      // Add the new product to the wishlist
      const updatedWishlist = [...wishlist, likedProduct];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      // If the product is already in the wishlist, remove it (for toggling behavior)
      const updatedWishlist = wishlist.filter(item => item.name !== likedProduct.name);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  
  

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  // Handle quantity increment/decrement
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const totalPrice = product.price * quantity;

  // Check if product exists to avoid errors
  if (!product) {
    return <p>Product not found</p>;
  }

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect(); // Get image bounds
    const x = ((e.clientX - left) / width) * 100; // X percentage of mouse position in the image
    const y = ((e.clientY - top) / height) * 100; // Y percentage of mouse position in the image
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`, // Set the zoom origin point
      transform: "scale(2)", // Scale the image
    });
  };

  // Handle mouse leave (stop zooming)
  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1)" }); // Reset to normal size
  };

  const returnToHome = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollToSeller?.();
    }, 0);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value); // Update selected size
  }; 

  const handleaddToCart = () => {
    // Pass the product details and initial quantity
    navigate("/cart", {
      state: {
        products: [
          {
            img: product.img[selectedImageIndex],
            name: product.name,
            price: product.price,
            selectedSize,
            quantity: quantity, // Initialize quantity here
          },
        ],
      },
    });
  };

  const handleBuyNow = () => {
    navigate("/signin", {
      state: {
        products: [
          {
            img: product.img[selectedImageIndex],
            name: product.name,
            price: product.price,
            totalPrice: totalPrice,
            selectedSize: selectedSize, // Include selected size
          },
        ],
        totalPrice: totalPrice, // Include total price
      },
    });
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <div>
        <div className="container mx-auto p-4 md:p-8 flex gap-2">
          <p
            className="text-gray-500 cursor-pointer hover:text-black"
            onClick={() => returnToHome()}
          >
            Home
          </p>
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span> 
          <p>Details</p>
        </div>

        <div className="container mx-auto p-4 max-md:p-8 max-sm:p-3 flex flex-col md:flex-row gap-10">
          {/* Left: Product Image Gallery */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden">
              {/* Main Image */}
              {product.img && (
                <img
                  src={product.img[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-[800px] object-cover rounded-lg max-md:h-[600px] max-md:object-contain max-sm:h-[400px] max-sm:object-contain max-sm:rounded-lg"
                  style={zoomStyle}
                  loading="lazy"
                  onMouseMove={handleMouseMove} // Track mouse movement
                  onMouseLeave={handleMouseLeave}
                />
              )}
              {/* Discount and Web Exclusive Badges */}
              <span className="absolute top-2 left-2 max-sm:top-4 max-md:top-3 max-sm:left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                25% OFF
              </span>
              <span className="absolute top-2 right-4  max-sm:top-4 max-md:top-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                Web Exclusive
              </span>
            </div>

            {/* Thumbnail Images */}
            <div className="flex justify-center mt-4 space-x-4 overflow-x-auto">
              {product.img &&
                product.img.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer ${
                      index === selectedImageIndex
                        ? "border-2 border-gray-500"
                        : ""
                    }`}
                    onClick={() => handleImageClick(index)}
                  />
                ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl max-md:text-xl font-semibold">
              {product.name || "Product Name"}
            </h1>
            <p className="text-gray-500 mt-2 text-[12px] font-semibold">
              <span className="text-black font-bold">SKU:</span>
              AW24-G-19-OL-85-COT-SPP-GREY-3PC-7MTR
            </p>
            <div className="flex gap-5 mt-5">
              <p className="text-base text-gray-400 mt-3 line-through">₹1999</p>
              <p className="text-xl text-red-500 font-semibold mt-2">
                ₹{product.price || "0"}
              </p>
            </div>
            <p className="text-green-500 text-lg font-bold mt-5">
              You saved ₹{product.price ? product.price - 1999 : "0"}
            </p>

            {/* Color Options */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold">
                Color: {product.color || "Unknown"}
              </h3>
              <div className="flex space-x-2 mt-2">
                {product.colorOptions &&
                  product.colorOptions.map((colorOption, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full border border-gray-400"
                      style={{ backgroundColor: colorOption }}
                    ></div>
                  ))}
              </div>
            </div>

            {/* Size Options */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold">Size:</h3>
              <select
                className="mt-2 border border-gray-300 p-2 rounded-md"
                value={selectedSize} // Bind selected size to state
                onChange={handleSizeChange} // Update selected size on change
              >
                <option value="3PC-7MTR">3PC-7MTR</option>
                <option value="L-1.0.2MTR">L-1.0.2MTR</option>
                <option value="M-97 CMS">M-97 CMS</option>
                <option value="XL-1.07 MTR">XL-1.07 MTR</option>
                <option value="XXL-1.12 MTR">XXL-1.12 MTR</option>
              </select>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4 flex justify-between">
              <h3 className="text-sm max-md:mt-1 font-semibold mr-4">
                Quantity:
              </h3>
              <div className="flex items-center">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-1 border border-gray-400 rounded-l-md bg-gray-400 hover:bg-gray-600"
                >
                  -
                </button>
                <span className="px-3 py-1 border-t border-b border-gray-400 bg-black text-white">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-1 border border-gray-400 rounded-r-md bg-gray-400 hover:bg-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4 text-[14px] w-[70%] max-sm:w-[90%]">
              <p>
                Disclaimer: Product color may slightly vary as shown in the
                image due to photographic lighting sources.
              </p>
            </div>

            <div className="space-x-4 text-2xl mt-4">
              <span>
                <i
                  className={`fa-regular fa-heart cursor-pointer ${
                    isLiked ? "text-red-500" : "text-black"
                  }`}
                  onClick={handleHeartClick}
                ></i>
              </span>
              <span>
                <i className="fa-solid fa-share-nodes"></i>
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-6 space-x-4 max-md:space-x-2">
              <button
                onClick={handleaddToCart}
                className="px-5 py-2 bg-black border border-black text-white rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300"
              >
                Add To Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="px-5 py-2 bg-gray-100 text-black border border-gray-300 rounded-lg font-semibold"
              >
                Buy it now
              </button>
            </div>

            {/* Shipping and Policies */}
            <div className="mt-6">
              <p className=" text-base max-md:text-sm text-black space-x-4 max-sm:space-x-1">
                <span className="max-sm:text-[12px] ms-4 max-md:ms-0 max-lg:ms-0 ">
                  <i className="fa-solid fa-truck-fast"></i>
                  <p>Shipping Policy</p>
                </span>
                <span>
                  <i className="fa-solid fa-right-left"></i>
                  <p>Return Policy</p>
                </span>
                <span>
                  <i className="fa-solid fa-shield-halved"></i>
                  <p>Secure Checkout</p>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
