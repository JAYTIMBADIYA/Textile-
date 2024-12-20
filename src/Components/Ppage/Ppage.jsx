import React, { useState } from "react";
import PayOption from "../../assets/pay-option.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./Ppage.css";

const Ppage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { products = [], totalPrice = 0 } = location.state || {};

  // State for form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    address: "",
    secondAddress: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  // State for form errors
  const [formErrors, setFormErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim())
      errors.firstName = "First name is required.";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required.";
    if (!formData.address.trim()) errors.address = "Address is required.";
    if (!formData.secondAddress.trim())
      errors.secondAddress = "Address is required.";
    if (!formData.city.trim()) errors.city = "City is required.";
    if (!formData.state.trim()) errors.state = "state is required.";
    if (!formData.country.trim()) errors.country = "state is required.";
    if (!formData.pinCode.trim()) errors.pinCode = "PIN code is required.";
    if (!formData.phoneNo.trim()) errors.phoneNo = "Phone number is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if there are no errors
  };

  // Handle form submission
  const handlePayments = async () => {
    if (validateForm()) {
      try {
        const response = await fetch(
          "https://localhost:44375/api/Order/AddOrderDetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to submit order details");
        }

        const data = await response.json();
        console.log("Order Details Submitted Successfully:", data);

        // Navigate to payments page after successful API call
        navigate("/payments", { state: { totalPrice } });
      } catch (error) {
        console.error("Error submitting order details:", error);
      }
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-between p-4 max-sm:p-2 bg-gray-100 min-h-screen">
          {/* Left Section (Account & Delivery Form) */}
          <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg">
            {/* Account Info */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Account</h2>
            </div>

            <hr className="my-4" />

            {/* Delivery Form */}
            <h2 className="text-2xl font-semibold mb-4">Delivery</h2>
            <form className="space-y-4 flex flex-col">
              {/* First and Last Name */}
              <div className="flex space-x-4 w-full">
                <div className="w-1/2 ">
                  <label className="block mb-1 text-gray-700">
                    First name<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="in1 block w-full p-2 border text-black border-gray-300 rounded "
                    placeholder="First name"
                  />
                  {formErrors.firstName && (
                    <p className="text-red-600 text-sm">
                      {formErrors.firstName}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <label className="block mb-1 text-gray-700">
                    Last name<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="in1 block w-full p-2 border text-black border-gray-300 rounded"
                    placeholder="Last name"
                  />
                  {formErrors.lastName && (
                    <p className="text-red-600 text-sm">
                      {formErrors.lastName}
                    </p>
                  )}
                </div>
              </div>
              {/* Phone */}
              <div className="w-full">
                <label className="block mb-1 text-gray-700">
                  Phone<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                  className="in1 block w-full p-2 border text-black border-gray-300 rounded"
                  placeholder="Phone number"
                />
                {formErrors.phoneNo && (
                  <p className="text-red-600 text-sm">{formErrors.phoneNo}</p>
                )}
              </div>
              {/* Email */}
              <div className="w-full">
                <label className="block mb-1 text-gray-700">
                  Email Address<span className="text-red-700">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="in1 block w-full p-2 border text-black border-gray-300 rounded"
                  placeholder="Email"
                />
                {formErrors.email && (
                  <p className="text-red-600 text-sm">{formErrors.email}</p>
                )}
              </div>
              {/* Address */}
              <div className="w-full">
                <label className="block mb-1 text-gray-700">
                  Address<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="in1 block w-full p-2 border text-black border-gray-300 rounded"
                  placeholder="Address"
                />
                {formErrors.address && (
                  <p className="text-red-600 text-sm">{formErrors.address}</p>
                )}
              </div>
              {/* Apartment, Suite */}
              <div className="w-full">
                <label className="block mb-1 text-gray-700">
                  Second Address (Apartment, suite, etc.)
                  <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="secondAddress"
                  value={formData.secondAddress}
                  onChange={handleInputChange}
                  className="in1 block w-full p-2 border text-black border-gray-300 rounded"
                  placeholder="Apartment, suite, etc."
                />
                {formErrors.secondAddress && (
                  <p className="text-red-600 text-sm">
                    {formErrors.secondAddress}
                  </p>
                )}
              </div>
              {/* City, State, and PIN */}
              <div className="flex w-full max-md:flex-auto max-sm:flex-wrap max-sm:space-x-0 space-x-4">
                <div className="w-1/2 max-sm:w-full">
                  <label className="block mb-1 text-gray-700">
                    City<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="in1 block w-full p-2 border text-black border-gray-300 rounded"
                    placeholder="City"
                  />
                  {formErrors.city && (
                    <p className="text-red-600 text-sm">{formErrors.city}</p>
                  )}
                </div>
                <div className="flex gap-2 max-sm:mt-4">
                  <div className="w-1/2">
                    <label className="block mb-1 text-gray-700">
                      State<span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="in1 block w-full p-2 border text-black border-gray-300 rounded"
                      placeholder="State"
                      required
                    />
                    {formErrors.state && (
                      <p className="text-red-600 text-sm">{formErrors.state}</p>
                    )}
                  </div>
                  <div className="w-1/2">
                    <label className="block mb-1 text-gray-700">
                      PIN code<span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      className="in1 block w-full p-2 border text-black border-gray-300 rounded"
                      placeholder="PIN code"
                    />
                    {formErrors.pinCode && (
                      <p className="text-red-600 text-sm">
                        {formErrors.pinCode}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* Country/Region */}
              <div className="w-full">
                <label className="block mb-1 text-gray-700">
                  Country/Region<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="in1 block w-full p-2 border text-blackx border-gray-300 rounded"
                  placeholder="Country/Region"
                />
                {formErrors.country && (
                  <p className="text-red-600 text-sm">{formErrors.country}</p>
                )}
              </div>
            </form>
          </div>

          {/* Right Section (Order Summary) */}
          <div className="w-full md:w-1/3 bg-white p-6 mt-8 md:mt-0 shadow-md rounded-lg bg-fixed">
            <h2 className="font-semibold text-lg border-b pb-4">
              ORDER SUMMARY
            </h2>

            <div className="h-64 overflow-y-scroll">
              {/* Loop through products and display each product */}
              {products.map((product, index) => (
                <div
                  className="flex justify-between items-center mb-4"
                  key={index}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded-md"
                  />
                  <div className="flex-1 mx-4">
                    <p className="text-gray-700 font-semibold max-sm:text-[12px]">
                      {product.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Size: {product.selectedSize}
                    </p>
                  </div>
                  <p className="font-semibold">₹{product.price}</p>
                </div>
              ))}
            </div>

            {/* Discount Code */}
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Discount code or gift card"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button className="ml-2 px-4 py-2 bg-gray-200 text-gray-600 font-semibold rounded">
                Apply
              </button>
            </div>

            {/* Price Details */}
            <div className="text-sm text-gray-600">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Enter shipping address</span>
              </div>
            </div>

            {/* Total Price */}
            <div className="text-xl font-bold flex justify-between">
              <span>Total</span>
              <span>INR ₹{totalPrice}</span>
            </div>

            <div className="mt-6">
              <img src={PayOption} alt="Payment Options" />
            </div>
          </div>
        </div>

        <div className="text-center mb-4" onClick={handlePayments}>
          <button className="bg-blue-800 text-white font-bold py-3 px-20 rounded-md mt-4 hover:bg-blue-600 ">
            Pay now
          </button>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Ppage;
