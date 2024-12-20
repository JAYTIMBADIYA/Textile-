import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Mycart = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Use optional chaining and fallback to an empty array if no state is passed
  const storedProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const { products: newProducts } = location.state || { products: [] };

  const [cartProducts, setCartProducts] = useState([
    ...storedProducts,
    ...newProducts,
  ]);

  const [subtotal, setSubtotal] = useState(0);

  // Fetch cart data from API on mount
  useEffect(() => {
    const fetchCartFromServer = async () => {
      try {
        const response = await fetch("https://localhost:44375/api/Cart/GetAllCart");
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await response.json();
        setCartProducts(data.products || []); // Update cartProducts with API data
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartFromServer();
  }, []);

  // Update subtotal whenever cartProducts changes
  useEffect(() => {
    const total = cartProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setSubtotal(total);

    // Store the updated cartProducts in localStorage
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    // Send updated cart to the backend API
    updateCartOnServer(cartProducts);
  }, [cartProducts]);

  const updateCartOnServer = async (products) => {
    try {
      const response = await fetch("https://localhost:44375/api/Cart/AddCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products }),
      });

      if (!response.ok) {
        console.error("Failed to update cart on the server");
      } else {
        console.log("Cart successfully updated on the server");
      }
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartProducts.filter((_, i) => i !== index);
    setCartProducts(updatedCart);
    // localStorage.setItem("cartProducts", JSON.stringify(updatedCart)); // Update localStorage
  };

  const increaseQuantity = (index) => {
    const newProducts = [...cartProducts];
    newProducts[index].quantity += 1;
    setCartProducts(newProducts);
  };

  const decreaseQuantity = (index) => {
    const newProducts = [...cartProducts];
    if (newProducts[index].quantity === 1) {
      // If quantity is 1, remove the product from the cart
      const updatedCart = cartProducts.filter((_, i) => i !== index);
      setCartProducts(updatedCart);
      // localStorage.setItem("cartProducts", JSON.stringify(updatedCart)); // Update localStorage
    } else {
      // Otherwise, decrease the quantity
      newProducts[index].quantity -= 1;
      setCartProducts(newProducts);
    }
  };

  const clearCart = () => {
    setCartProducts([]);
    localStorage.removeItem("cartProducts"); // Clear the cart from localStorage
  };

  const returnToHome = () => {
    navigate("/"); // Use navigate for navigation instead of window.location
  };

  const handleCheckout = () => {
    navigate("/ppage", {
      state: {
        products: cartProducts, // Pass the entire cartProducts array
        totalPrice: subtotal,
      },
    })
  }

  return (
    <>
      <div className="px-4 max-sm:px-2 max-lg:px-20 max-xl:px-44">
        <div className="container mx-auto pt-5 flex gap-2">
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

        <div className="mt-9 text-2xl">
          <h1>YOUR CART</h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between p-3 max-sm:p-1 bg-gray-100 mt-10">
          {/* Left - Product Info */}
          <div className="lg:w-3/4 bg-white p-6 max-sm:p-3 shadow-md">
            <h2 className="font-semibold text-lg border-b pb-4">PRODUCT</h2>

            {cartProducts.length > 0 ? (
              cartProducts.map((item, index) => (
                <div className="flex items-center py-6" key={index}>
                  {/* Product Image */}
                  <div className="w-1/5 max-sm:w-[20%]">
                    <img
                      src={item.img}
                      alt="Product"
                      className="w-12 h-auto object-contain rounded-lg"
                    />
                  </div>
                  {/* Product Description */}
                  <div className="w-3/5 max-sm:w-[40%] px-4 max-sm:px-2">
                    <h3 className="font-semibold max-md:text-sm max-sm:text-sm">
                      {item.name || "Product Name"}
                    </h3>
                    <p className="text-gray-500 text-sm max-md:text-[10px]">
                      size: {item.selectedSize}
                    </p> 
                    <div className="flex items-center mt-2">
                      <span className="line-through text-gray-400 text-sm mr-2">
                        ₹1,999
                      </span>
                      <span className="font-semibold text-red-600 text-sm">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>
                  {/* Quantity and Total */}
                  <div className="flex items-center w-1/5 max-sm:w-[25%] max-sm:text-xl">
                    <button
                      onClick={() => decreaseQuantity(index)}
                      className="bg-gray-300 text-gray-600 px-2 max-sm:px-1 py-1 max-sm:py-0 rounded"
                    >
                      -
                    </button>
                    <span className="px-4 max-sm:px-2 bg-black text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(index)}
                      className="bg-gray-300 text-gray-600 px-2 max-sm:px-1 py-1 max-sm:py-0 rounded"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex gap-10 max-sm:gap-3 max-sm:flex-col">
                    <div className="w-1/5 max-sm:w-[10%] text-right font-semibold">
                      ₹{item.price * item.quantity}
                    </div>
                    <div className="cursor-pointer text-end">
                      <i
                        className="fa-solid fa-xmark"
                        onClick={() => handleRemoveFromCart(index)}
                      ></i>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <p className="text-2xl font-semibold mb-4">
                  Your cart is empty.
                </p>
                <button
                  className="bg-black text-white px-6 py-3 rounded-md hover:bg-pink-700 transition duration-200"
                  onClick={returnToHome}
                >
                  Continue Shopping
                </button>
              </div>
            )}

            {/* Clear Cart Button */}
            <button
              className="bg-red-600 text-white px-4 py-2 rounded mt-4"
              onClick={clearCart}
            >
              Clear Cart
            </button>

            {/* Additional Comments */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">
                Additional Comments
              </h3>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Special instruction for seller..."
              />
            </div>

            {/* Footer - Secure Shopping Guarantee */}
            <div className="mt-4 flex items-center">
              <svg
                className="w-6 h-6 text-black mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 4.418 3.582 8 8 8h2c0-4.418-3.582-8-8-8zm-8 8a8 8 0 100-16h16a8 8 0 100 16H4z"
                ></path>
              </svg>
              <span className="text-sm text-gray-600">
                Secure Shopping Guarantee
              </span>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="lg:w-2/5 bg-white p-6 shadow-md mt-4 lg:mt-0">
            <h2 className="font-semibold text-lg border-b pb-4">
              ORDER SUMMARY
            </h2>
            <div className="flex justify-between py-4">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="py-4">
              <label className="font-semibold">Coupon Code</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                placeholder="Enter Coupon Code"
              />
              <p className="text-gray-500 text-sm mt-2">
                Coupon code will be applied on the checkout page
              </p>
            </div>
            <div className="flex justify-between py-4 border-t">
              <span className="font-semibold">TOTAL:</span>
              <span className="font-semibold text-lg">₹{subtotal}</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Tax included and shipping calculated at checkout
            </p>

            {/* Buttons */}
            <button 
              className="w-full bg-black text-white p-3 rounded-md mb-4"
              onClick={handleCheckout}
              >
              Proceed To Checkout
            </button>
            <button
              className="w-full bg-gray-200 p-3 rounded-md hover:bg-pink-700 transition duration-200 hover:text-white"
              onClick={returnToHome}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mycart;