import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import Gpe from '../../../assets/gpe.png';
import ppe from '../../../assets/ppay.png';
import bhimpe from '../../../assets/bhimpe.png';
import paype from '../../../assets/paype.png';
import scanner from '../../../assets/scaner.avif'
import Qr from '../../../assets/qr.jpg'

const Scan = ({onBack}) => {
  return (
    <>
    <div >
      {/* Header */}
      <div className="flex items-center mb-4 cursor-pointer" onClick={onBack}>
        <FaArrowLeft className="text-gray-600 mr-2" />
        <h2 className="text-xl font-semibold">Scan and Pay</h2>
      </div>
      
      {/* QR Section */}
      <div className="flex flex-col  border p-6 max-sm:p-2 rounded-lg shadow-lg bg-white">
        {/* Bharat QR Logo */}
        <div className="mb-2 flex">
          <img
            src={scanner}
            alt="Bharat QR"
            className="w-11 mb-4"
          />
          <h3 className="text-md max-sm:text-sm mt-2 text-gray-600 font-semibold">SCAN TO PAY</h3>
        </div>
        
        {/* QR Code Image */}
        <div className="mb-4 flex justify-center">
          <img
            src={Qr}
            alt="QR Code"
            className="w-36 h-36 max-sm:w-40 max-sm:h-40"
          />
        </div>
        
        {/* Generate QR Button */}
        <button className="bg-gray-100 border border-gray-300 text-gray-600 px-4 py-2 rounded-lg mb-2">
          GENERATE QR
        </button>
        
        {/* Instruction Text */}
        <p className="text-gray-500 text-sm text-center">
          Generate and Scan QR code using apps enabled with Bharat QR
        </p>
      </div>
      
      {/* Supported UPI Apps */}
      <div className="flex justify-center mt-8 space-x-4">
        <img src={Gpe} alt="Google Pay" className="w-5 object-contain"/>
        <img src={paype} alt="PhonePe" className="w-5 object-contain"/>
        <img src={ppe} alt="Paytm" className="w-5 object-contain"/>
        <img src={bhimpe} alt="BHIM" className="w-5 object-contain"/>
      </div>

      {/* Footer Text */}
      <div className="text-center text-sm text-gray-400 mt-4">
        100+ UPI Apps supported
      </div>
    </div>
      
    </>
  )
}

export default Scan
