import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Newacco.css';

const Newacco = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!userName || !email || !password || !confirmPassword) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const formData = { userName, email, password, confirmPassword };
      const response = await fetch("https://localhost:44375/api/User/RegisterUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.log("Response from API:", data);
        // throw new Error(data.message || "Registration failed.");

        // Extract and display specific backend errors
        const errorMessages = data.errors
          ? Object.values(data.errors).flat().join(", ")
          : data.title || "Registration failed.";
        throw new Error(errorMessages);
      }

      console.log("Registration successful:", data);
      setMessage("Registration successful!");
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/"); // Navigate to home or login page after successful registration
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("Registration failed. Please try again.");
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
          <p>Create Account</p>
        </div>

        <h1 className="text-2xl font-normal mt-6">Create Account</h1>
        <p className="pt-4">Please register below to create an account</p>

        <div className="w-1/3 max-sm:w-full">
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col">
            <div className="space-y-2 my-3 w-full">
              <label htmlFor="userName" className="font-semibold">
                UserName <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="in1 border text-black border-gray-400 py-2"
                required
              />
            </div>

            <div className="space-y-2 my-3 w-full">
              <label htmlFor="email" className="font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="in1 border text-black border-gray-400 py-2"
                required
              />
            </div>

            <div className="space-y-2 my-3 w-full">
              <label htmlFor="password" className="font-semibold">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="in1 border text-black border-gray-400 py-2"
                required
              />
            </div>

            <div className="space-y-2 my-3 w-full">
              <label htmlFor="confirmPassword" className="font-semibold">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="in1 border text-black border-gray-400 py-2"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#393838] text-white px-14 py-3 rounded-md hover:bg-white border hover:border-[#393838] hover:text-[#393838] transition duration-300"
            >
              Create An Account
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

export default Newacco;

