import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/Green_and_White_Minimalist_Fashion_Logi-removebg-preview.png";
import {
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Account from "../Account/Account";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSareesMenuOpen, setSareesMenuOpen] = useState(false);
  const [isSuitMenuOpen, setSuitMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent"); // Default background color

  const handleAccount = () => {
    setAccountOpen(true); // Open the Account sidebar on click
  };

  const closeAccount = () => {
    setAccountOpen(false); // Close the Account sidebar
  };

  const handlePageAccount = () => {
    window.location.href = "/createaccount";
  }

  const handleNewPageAccount = () => {
    window.location.href = "/newaccount"
  }

  const handleAddToCart = () => {
    window.location.href = "/cart";
  };

  const handleHome = () => {
    window.location.href = "/";
  };

  const handleLike = () => {
    window.location.href = "/like";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSareesMenu = () => {
    setSareesMenuOpen(!isSareesMenuOpen);
  };

  const toggleSuitMenu = () => {
    setSuitMenuOpen(!isSuitMenuOpen);
  };

  // Change navbar background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-white"); // Change to white background when scrolling
      } else {
        setBgColor("bg-transparent"); // Transparent background when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
    };
  }, []);

  return (
    <>
      <div>
        <div className={`px-5 flex justify-between items-center sticky top-0 z-50 ${bgColor} transition-all duration-30`}>
          <div className="flex space-x-3">
            <div className="sm:hidden cursor-pointer flex items-center" onClick={toggleMenu}>
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6 text-black" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-black" />
              )}
            </div> 

            {/* Show search icon only on small screens */}
            <div className="sm:block md:hidden max-md:mt-4 text-lg">
              <i className="serchIcon fa-solid fa-magnifying-glass"></i>
            </div>

            <div onClick={handleHome} className="cursor-pointer">
              <img className="w-40 max-sm:w-20" src={logo} alt="Logo" />
            </div>
          </div>

          <div className="hidden sm:flex">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-1 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex space-x-6 max-sm:space-x-3 items-center">
            <div className="cursor-pointer" onClick={handleAccount}>
              <UserIcon className="h-6 w-6 max-sm:w-5 max-sm:h-5 text-black hover:text-blue-500" />
            </div>

            <div className="cursor-pointer" onClick={handleLike}>
              <HeartIcon className="h-6 w-6 max-sm:w-5 max-sm:h-5 text-black hover:text-red-500" />
            </div>

            <div className="cursor-pointer" onClick={handleAddToCart}>
              <ShoppingCartIcon className="h-6 w-6 max-sm:w-5 max-sm:h-5 text-black hover:text-green-500" />
            </div>
          </div>
        </div>

        <hr />

        {/* Sidebar for Account component */}
        {accountOpen && (
          <div
            className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end`}
            onClick={closeAccount}
          >
            <div
              className="bg-white w-1/2 lg:w-1/3 max-sm:w-[83%] h-full shadow-lg transition-transform transform translate-x-0 duration-300"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing the sidebar
            >
              <Account />
            </div>
          </div>
        )}

        <div
          className={`fixed top-0 left-0 h-screen bg-white shadow-lg z-50 transition-transform transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } sm:hidden`}
          style={{ width: "250px" }}
        >
          <div className="p-5">
            <div className="flex justify-between">
              <span className="font-semibold">MENU</span>
              <XMarkIcon className="h-6 w-6 text-gray-500 cursor-pointer" onClick={toggleMenu} />
            </div>

            <ul className="flex flex-col space-y-2 text-gray-600 cursor-pointer mt-4">
              <li className="text-gray-700">New Arrivals</li>
              <hr />
              <li className="text-gray-700">Online Exclusive</li>
              <hr />

              <li onClick={toggleSareesMenu} className="relative group z-20">
                <div className="flex justify-between">
                  <span className="text-gray-700">Sarees</span>
                  <span><i class="fa-solid fa-chevron-down"></i></span>
                </div>
                
                {isSareesMenuOpen && (
                  <ul className="pl-4 mt-1  space-y-1 z-30">
                    <li className="text-xs py-1">Woven Sarees</li>
                    <hr />
                    <li className="text-xs py-1">Embroidery Sarees</li>
                    <hr />
                    <li className="text-xs py-1">Printed Sarees</li>
                    <hr />
                    <li className="text-xs py-1">Plain Sarees</li>
                    <hr />
                    <li className="text-xs py-1">Silk Sarees</li>
                  </ul>
                )}
              </li>
              <hr />

              <li onClick={toggleSuitMenu} className="relative group z-20">
                <div className="flex justify-between">
                  <span className="text-gray-700">Suits</span>
                  <span><i class="fa-solid fa-chevron-down"></i></span>
                </div>
                
                {isSuitMenuOpen && (
                  <ul className="pl-4 mt-2 space-y-1 z-30">
                    <li className="text-xs py-1">Stitched Suits Dupatta</li>
                    <hr />
                    <li className="text-xs py-1">Unstitched Suits</li>
                  </ul>
                )}
              </li>
              <hr />

              <li className="text-gray-700">Lehenga</li>
              <hr />
              <li className="text-gray-700">Dresses</li>
              <hr />
              <li className="text-gray-700">Fragrances</li>
              <hr />
              <li className="text-gray-700">Collection</li>
              <hr />

              <li className="space-x-2" onClick={handlePageAccount}>
                <span><i class="fa-solid fa-user"></i></span>
                <span className="text-gray-700">Sign In</span>
              </li>
              <hr />

              <li className="space-x-2" onClick={handleNewPageAccount}>
                <span><i class="fa-solid fa-user-plus"></i></span>
                <span>Create an Account</span>
              </li>
              <hr />

              <li className="space-x-2" onClick={handleLike}>
                <span><i class="fa-regular fa-heart"></i></span>
                <span>My Wish List</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main navigation menu for larger screens */}
        <div className="hidden sm:flex justify-center py-4">
  <ul className="flex space-x-8 text-gray-700">
    {[
      "New Arrivals",
      "Online Exclusive",
      "Sarees",
      "Suits",
      "Lehenga",
      "Dresses",
      "Fragrances",
      "Collection",
    ].map((item, index) => (
      <li
        key={index}
        className="relative group cursor-pointer z-20"
        onMouseEnter={() => {
          if (item === "Sarees") setSareesMenuOpen(true);
          if (item === "Suits") setSuitMenuOpen(true);
        }}
        onMouseLeave={() => {
          if (item === "Sarees") setSareesMenuOpen(false);
          if (item === "Suits") setSuitMenuOpen(false);
        }}
      >
        <span className="text-gray-700">{item}</span>

        {/* Underline animation */}
        <div className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300 transform group-hover:translate-x-0"></div>

        {/* Dropdown menus for Sarees and Suits */}
        {item === "Sarees" && isSareesMenuOpen && (
          <ul className="absolute w-40 top-5 left-0 mt-2 bg-white shadow-md p-2 space-y-1 z-30">
            <li className="text-xs py-1 hover:bg-blue-100">Woven Sarees</li>
            <li className="text-xs py-1 hover:bg-blue-100">Embroidery Sarees</li>
            <li className="text-xs py-1 hover:bg-blue-100">Printed Sarees</li>
            <li className="text-xs py-1 hover:bg-blue-100">Plain Sarees</li>
            <li className="text-xs py-1 hover:bg-blue-100">Silk Sarees</li>
          </ul>
        )}

        {item === "Suits" && isSuitMenuOpen && (
          <ul className="absolute w-40 top-5 left-0 mt-2 bg-white shadow-md p-2 space-y-3 z-30">
            <li className="text-xs py-1 hover:bg-blue-100">Stitched Suits Dupatta</li>
            <li className="text-xs py-1 hover:bg-blue-100">Unstitched Suits</li>
          </ul>
        )}
      </li>
    ))}
  </ul>
</div>

        <hr />
      </div>
    </>
  );
};

export default Navbar;




// ====================================================================================


// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <div className="relative bg-white border-b border-gray-200 shadow-md">
//       {/* Top navigation */}
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="text-2xl font-semibold">ACME</div>
//         <div className="hidden md:flex space-x-8">
//           <a href="#" className="text-gray-700 hover:text-black">Featured</a>
//           <button
//             className="text-gray-700 hover:text-black"
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             Make up
//           </button>
//           <a href="#" className="text-gray-700 hover:text-black">Skincare</a>
//           <a href="#" className="text-gray-700 hover:text-black">Body</a>
//           <a href="#" className="text-gray-700 hover:text-black">Hair</a>
//           <a href="#" className="text-gray-700 hover:text-black">Accessories</a>
//         </div>
//         <div className="flex items-center space-x-4">
//           <button className="text-gray-700 hover:text-black">
//             <i className="fas fa-user"></i>
//           </button>
//           <button className="text-gray-700 hover:text-black">
//             <i className="fas fa-search"></i>
//           </button>
//           <button className="relative text-gray-700 hover:text-black">
//             <i className="fas fa-shopping-cart"></i>
//             <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">3</span>
//           </button>
//         </div>
//       </div>

//       {/* Dropdown menu */}
//       {isDropdownOpen && (
//         <div className="absolute left-0 right-0 bg-white border border-gray-300 shadow-lg z-10">
//           <div className="container mx-auto px-6 py-8 grid grid-cols-3 gap-4">
//             <div className="space-y-2">
//               <a href="#" className="text-gray-600 hover:text-black">Face</a>
//               <a href="#" className="text-gray-600 hover:text-black">Eyebrows</a>
//               <a href="#" className="text-gray-600 hover:text-black">Eyes</a>
//             </div>
//             <div className="space-y-2">
//               <a href="#" className="text-gray-600 hover:text-black">Lips</a>
//               <a href="#" className="text-gray-600 hover:text-black">Nails</a>
//               <a href="#" className="text-gray-600 hover:text-black">Palettes</a>
//               <a href="#" className="text-gray-600 hover:text-black">Makeup removers</a>
//             </div>
//             <div className="space-y-2">
//               <a href="#" className="text-gray-600 hover:text-black font-semibold">News</a>
//               <a href="#" className="text-gray-600 hover:text-black font-semibold">Offers</a>
//               <a href="#" className="text-gray-600 hover:text-black font-semibold">Sets</a>
//               <div className="bg-gray-200 h-24 w-full flex items-center justify-center">
//                 <i className="fas fa-image text-gray-400 text-2xl"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;



  