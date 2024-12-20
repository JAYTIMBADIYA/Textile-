import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Password.css';

const Password = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      // Prepare data payload
      const formData = { email, password, confirmPassword };

      // Send POST request to API
      const response = await fetch("https://localhost:44375/api/User/ResetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Response from API:", data);
        throw new Error(data.message || "Password reset failed.");
      }

      // Success
      console.log("Password reset successful:", data);
      setMessage("Password reset successful!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/"); // Redirect to home or login page
    } catch (error) {
      console.error("Error during password reset:", error);
      setMessage(error.message || "Password reset failed. Please try again.");
    }
  };

  return (
    <>
      <div className="px-44 max-sm:px-3">
        <div className="container mx-auto py-4 flex gap-2">
          <p
            className="text-gray-500 cursor-pointer hover:text-black"
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <p>Reset Password</p>
        </div>

        <h1 className="text-2xl font-normal mt-6">Reset Password</h1>
        <p className="mt-3">Enter your email and set a new password</p>

        <div className="w-1/3 max-sm:w-full">
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col">
            <span className="space-y-2 my-3 w-full">
              <label htmlFor="email" className="font-semibold">
                Your Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="in1 border border-gray-400 py-2"
                required
              />
            </span>
            <span className="space-y-2 my-3 w-full">
              <label htmlFor="password" className="font-semibold">
                New Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="in1 border border-gray-400 py-2"
                required
              />
            </span>
            <span className="space-y-2 my-3 w-full">
              <label htmlFor="confirmPassword" className="font-semibold">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="in1 border border-gray-400 py-2"
                required
              />
            </span>
            <button
              type="submit"
              className="mt-10 bg-[#393838] text-white px-14 py-3 rounded-md hover:bg-white border hover:border-[#393838] hover:text-[#393838] transition duration-300"
            >
              Submit
            </button>
          </form>
          {message && (
            <p className={`mt-4 ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Password;
