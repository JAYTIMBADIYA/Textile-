import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic validation
    if (!userName || !password) {
      setMessage("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("https://localhost:44375/api/User/UserLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }), // Replace with the required payload
      });

      const data = await response.json();
      console.log("Response from API:", data );

      if (!response.ok) {
        throw new Error(data.message || "Invalid credentials.");
      }

      // const data = await response.json();
      setMessage("Login Successful!"); 

      // Reset input fields after successful login
      setUserName("");
      setPassword("");

      // Handle successful login (e.g., save token, navigate)
      navigate("/"); // Replace with the route for the next page
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Invalid credentials. Please try again.");
    }

    // Handle the registration logic here
    // console.log({
    //   firstName,
    //   lastName,
    //   userName,
    //   password,
    //   isSubscribed,
    // });

    // // Optionally, reset the form
    // setFirstName("");
    // setLastName("");
    // setuserName("");
    // setPassword("");
    // setIsSubscribed(false);

    // navigate("/");
  };

  const handlePassword = () => {
    navigate("/forgotpassword");
  };

  const handleNewAccount = () => {
    navigate("/newaccount");
  };


  

  return (
    <>
      <div className="px-6 max-sm:px-3">
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
          <p>Login</p>
        </div>

        <h1 className="text-2xl font-normal mt-6">Login</h1>

        <div className="w-full max-md:w-full">
          <form
            onSubmit={handleSubmit}
            action=""
            className="mt-6 flex flex-col"
          >
            <div className="space-y-2 my-3 w-full">
              <label htmlFor="userName" className="font-semibold">
                UserName  <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="in1 border text-black border-gray-400 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className=" space-y-2 my-3 w-full">
              <label htmlFor="password" className="font-semibold">
                Your Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="in1 border text-black border-gray-400 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-x-2">
              <button
                type="submit"
                className="mt-4 bg-[#393838] text-white px-5 py-3 rounded-md hover:bg-white border hover:border-[#393838] hover:text-[#393838] transition duration-300"
              >
                Log in
              </button>

              <button
                onClick={handleNewAccount}
                className="mt-4 bg-white border border-black text-black px-1 py-3 rounded-md hover:bg-[#393838] hover:text-white transition duration-300"
              >
                Create Account
              </button>
            </div>
          </form>

          {/* Display success or error messages */}
        {message && (
          <p
            className={`mt-4 ${message === "Login Successful!" ? "text-green-600" : "text-red-600"}`}
          >
            {message}
          </p>
        )}

          <h3
            onClick={handlePassword}
            className="underline cursor-pointer"
          >
            Forgot Your Password?
          </h3>
        </div>
      </div>
    </>
  );
};

export default Account;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Account.css";

// const Account = () => {
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     // Basic validation
//     if (!userName || !password) {
//       setMessage("Please fill in all required fields.");
//       return;
//     }

//     // Log input values to the console
//     console.log("Username:", userName);
//     console.log("Password:", password);

//     try {
//       const response = await fetch("https://localhost:44375/api/User/UserLogin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userName, password }), // Replace with the required payload
//       });

//       const data = await response.json();
//       console.log("Response from API:", data);

//       if (!response.ok) {
//         throw new Error(data.message || "Invalid credentials.");
//       }

//       setMessage("Login Successful!");

//       // Reset input fields after successful login
//       setUserName("");
//       setPassword("");

//       // Handle successful login (e.g., save token, navigate)
//       navigate("/"); // Replace with the route for the next page
//     } catch (error) {
//       console.error("Error during login:", error);
//       setMessage("Invalid credentials. Please try again.");
//     }
//   };

//   const handlePassword = () => {
//     navigate("/forgotpassword");
//   };

//   const handleNewAccount = () => {
//     navigate("/newaccount");
//   };

//   return (
//     <>
//       <div className="px-6 max-sm:px-3">
//         <div className="container mx-auto py-4 flex gap-2">
//           <p
//             className="text-gray-500 cursor-pointer hover:text-black"
//             onClick={() => navigate("/")}
//           >
//             Home
//           </p>
//           <span>
//             <i className="fa-solid fa-chevron-right"></i>
//           </span>
//           <p>Login</p>
//         </div>

//         <h1 className="text-2xl font-normal mt-6">Login</h1>

//         <div className="w-full max-md:w-full">
//           <form onSubmit={handleSubmit} className="mt-6 flex flex-col">
//             <div className="space-y-2 my-3 w-full">
//               <label htmlFor="userName" className="font-semibold">
//                 UserName <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="userName"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//                 className="in1 border text-black border-gray-400 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="space-y-2 my-3 w-full">
//               <label htmlFor="password" className="font-semibold">
//                 Your Password <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="in1 border text-black border-gray-400 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="space-x-2">
//               <button
//                 type="submit"
//                 className="mt-4 bg-[#393838] text-white px-5 py-3 rounded-md hover:bg-white border hover:border-[#393838] hover:text-[#393838] transition duration-300"
//               >
//                 Log in
//               </button>

//               <button
//                 onClick={handleNewAccount}
//                 className="mt-4 bg-white border border-black text-black px-1 py-3 rounded-md hover:bg-[#393838] hover:text-white transition duration-300"
//               >
//                 Create Account
//               </button>
//             </div>
//           </form>

//           {/* Display success or error messages */}
//           {message && (
//             <p
//               className={`mt-4 ${message === "Login Successful!" ? "text-green-600" : "text-red-600"}`}
//             >
//               {message}
//             </p>
//           )}

//           <h3 onClick={handlePassword} className="underline cursor-pointer">
//             Forgot Your Password?
//           </h3>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Account;
