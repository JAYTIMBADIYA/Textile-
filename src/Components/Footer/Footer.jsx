import React from "react";
import "./Footer.css";
import logo from "../../assets/Green_and_White_Minimalist_Fashion_Logi-removebg-preview.png";


const Footer = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-6 my-10 max-sm:my-4 mx-4">
        <div className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg p-2">
          <span className="text-3xl md:text-4xl move-down">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <h4 className="font-semibold mt-2 text-sm md:text-base">
            Safe Checkout
          </h4>
          <p className="font-extralight mt-3 text-xs md:text-sm">
            Secured Data and Information
          </p>
        </div>
        <div className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg p-2">
          <span className="text-3xl md:text-4xl move-down">
            <i className="fa-solid fa-headphones"></i>
          </span>
          <h4 className="font-semibold mt-2 text-sm md:text-base">
            Exceptional Customer Service
          </h4>
          <p className="font-extralight mt-3 text-xs md:text-sm">
            Customer service driven by customer-first ideology. Timings: 10.00
            A.M. - 6.00 P.M.
          </p>
        </div>
        <div className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg p-2">
          <span className="text-3xl md:text-4xl move-down">
            <i className="fa-solid fa-lock"></i>
          </span>
          <h4 className="font-semibold mt-2 text-sm md:text-base">
            Secure Payment
          </h4>
          <p className="font-extralight mt-3 text-xs md:text-sm">
            Pay from anywhere in India
          </p>
        </div>
        <div className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg p-2">
          <span className="text-3xl md:text-4xl move-down">
            <i className="fa-solid fa-right-left"></i>
          </span>
          <h4 className="font-semibold mt-2 text-sm md:text-base">
            Easy Returns
          </h4>
          <p className="font-extralight mt-3 text-xs md:text-sm">
            Return within 3 days as per policies
          </p>
        </div>
      </div>

      <div className="text-center py-14 max-sm:py-6 px-6 max-sm:px-2 bg-[#ebebeb]">
        <h1 className="text-2xl md:text-3xl font-bold">
          Sign up for our newsletter
        </h1>
        <div className="mt-10 max-sm:mt-5">
          <input
            className="py-3 ps-2 bg-transparent border border-black w-[70%] max-sm:w-[80%] max-md:w-[60%] md:w-[35%] h-10"
            type="text"
            placeholder="Your email address"
          />
          <button className="py-3 px-7 rounded-sm font-semibold max-sm:mt-4 max-sm:py-2 max-sm:px-3 border ms-2 border-black text-center bg-black text-white">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-7">
        <h1 className="text-center text-xl md:text-2xl font-semibold underline">
          Popular Searches
        </h1>

        <div className="px-6 md:px-32 max-sm:px-2">
          {/** Repeat this block for different categories */}
          <div className="py-5">
            <h1 className="underline font-semibold text-[15px]">
              STITCHED SUITS
            </h1>
            <p className="text-[13px] font-normal mt-2">
              Cotton suits | Stitched suits with dupatta | printed suits |
              Straight Pants Suits | Designer Suits | Salwar Suits | Anarkali
              Suits | Embroidered Suits | Summer Suits | cotton kurta with pants
              | suits with pants | Cotton kurta set | garara suit | daily wear
              suits | Short kurti with sharara | Printed cotton kurta | Kurti
              with plazzo | Unstitched suits | Chanderi Unstitched suit |
              Organza Unstitched suit | Semi stitched suits | Cotton dress
              material | Georgette semi stitched suits | Chinnon suits |
              Embroidery suit piece
            </p>
          </div>
          {/** Repeat for Kurta Set, Saree, and Lehenga as needed */}
        </div>
       
      </div>

      <footer>
        <div className="row">
          <div className="col">
            <img src={logo} alt="" className="logo" />
            <p>
            At Srivalli Fashion, we celebrate the art of saree-making. Each saree is a masterpiece that tells a story of heritage and beauty, designed to make every occasion unforgettable
            </p>
          </div>
          <div className="col">
            <h3>
              Office
              <div className="undorline">
                <span className="cvc"></span>
              </div>
            </h3>
            <p>ITPL Road</p>
            <p>Whitefield, Bangalore</p>
            <p>Karnataka, PIN 560066, India</p>
            <p className="email-id">shrivallifashionstore@gmail.com</p>
            <h4>+91 6354536891</h4>
          </div>
          <div className="col">
            <h3>
              Links
              <div className="undorline">
                <span className="cvc"></span>
              </div>
            </h3>
            <ul className="um">
              <li className="lm">
                <a className="am" href="a">Home</a>
              </li>
              <li className="lm">
                <a className="am" href="a">Services</a>
              </li>
              <li className="lm">
                <a className="am" href="a">About Us</a>
              </li>
              <li className="lm">
                <a className="am" href="a">Features</a>
              </li>
              <li className="lm">
                <a className="am" href="a">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              Newsletter
              <div className="undorline">
                <span className="cvc"></span>
              </div>
            </h3>
            <form action="">
              <i class="far fa-regular fa-envelope"></i>
              <input type="email" placeholder="Enter your email Id" required />
              <button type="submit">
                <i class="fas fa-solid fa-arrow-right"></i>
              </button>
            </form>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/share/TRn2NAQ1vyFNwQJg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/shrivalli_fashion_store?igsh=aHk4OWw1ZzkxbDZ5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="lashr"/>
        <p className="text-center text-[12px] py-0 text-gray-500">
          @All Rights Reserved
        </p>
      </footer>

      {/* <p className="text-center text-[12px] py-4 text-gray-500">
        @All Rights Reserved
      </p> */}

    </div>
  );
};

export default Footer;
