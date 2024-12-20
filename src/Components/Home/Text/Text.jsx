import React from "react";
import "./Text.css";
import fir from "../../../assets/frame2.jpg";
import sec from "../../../assets/sec-side.jpg";
import thrinone from "../../../assets/acttress.jpg";

const Text = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-3 px-2 mt-10">
        <div className="image-container">
          <img src={fir} alt="" className="zoom-image w-full h-auto" />
        </div>
        <div className="image-container">
          <img src={sec} alt="" className="zoom-image w-full h-auto" />
        </div>
      </div>

      <section className="flex flex-col lg:flex-row items-center px-6 lg:px-12 py-12 max-sm:py-6">
        {/* Left Image Section */}
        <div className="lg:w-1/3">
          <div className="relative">
            {/* Main Image */}
            <img
              src={thrinone}
              alt="Saree Models"
              className="h-96 w-full object-contain rounded-md" // Use object-contain for better aspect ratio
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="lg:w-2/3 mt-8 lg:mt-0 lg:ml-12 font-serif">
          <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left">
            {/* Add title here if needed */}
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            <span className="font-bold text-gray-900">Established in 2020</span>
            , Srivalli Collection began as a modest store in Surat, setting the
            foundation for a brand renowned in Indian ethnic fashion. In{" "}
            <strong>2023</strong>, Mr. Hitesh joined the family business,
            bringing fresh ideas and bold vision, driving a transformative phase
            of remarkable growth.
          </p>
          <p className="text-gray-600 mb-6 text-center">
            By <strong>2023</strong>, under Mr. Manglani's leadership, Srivalli
            Collection expanded its reach, with stores in key locations,
            including South Extension.
          </p>
          <p className="text-gray-600 mb-6 text-center">
            Today, Srivalli Collection is celebrated for its quality, elegance,
            and authenticity. Known for blending traditional craftsmanship with
            modern design, the brand captivates customers with timeless,
            trendsetting creations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Text;
