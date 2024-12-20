import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const returnToHome = () => {
    window.location.href = "/";
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handlePpage = () => {
    const productDetails = location.state?.products?.[0]; // Accessing the first product from the products array

    // Ensure productDetails is defined before proceeding
    if (productDetails) {
      navigate("/ppage", { 
        state: { 
          products: [productDetails], 
          totalPrice: productDetails.totalPrice 
        } 
      });
    }
  };

  return (
    <>
      <div className="px-4 md:px-20 lg:px-44">
        <div className="container mx-auto pt-6 flex gap-2">
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

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-normal mt-6">SIGN IN</h1>

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row my-8 max-sm:my-4 mx-2">
            {/* Login Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-8">
              <h2 className="text-lg sm:text-2xl font-semibold mb-4">Login</h2>
              <p className="mb-4 text-sm sm:text-base">
                Please enter your email and password below to access your account.
              </p>

              <form className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  className="in1 w-full p-2 border border-gray-300 rounded mb-4"
                />

                <label className="block text-sm font-medium text-gray-700 mb-1">Password <span className="text-red-500">*</span></label>
                <input
                  type="password"
                  className="in1 w-full p-2 border border-gray-300 rounded mb-4"
                />

                <button className="w-full mt-2 p-2 bg-black text-white rounded mb-4">
                  Sign In
                </button>
              </form>

              <div className="flex justify-between mb-4">
                <a href="#" className="text-sm text-gray-500">
                  Lost your password?
                </a>
              </div>
            </div>

            {/* Registration Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 bg-gray-50 max-md:mt-4">
              <h2 className="text-lg sm:text-2xl font-semibold mb-4">Register</h2>
              <p className="mb-4 text-sm sm:text-base">
                Please register below to create an account
              </p>

              <form className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="in1 w-full p-2 border border-gray-300 rounded mb-4"
                />

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="in1 w-full p-2 border border-gray-300 rounded mb-4"
                />

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="in1 w-full p-2 border border-gray-300 rounded mb-4"
                />

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  className="in1 w-full p-2 border border-gray-300 rounded mb-4"
                />

                <button
                  onClick={handlePpage}
                  className="mt-2 w-full p-2 bg-gray-800 text-white rounded"
                >
                  Create An Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
