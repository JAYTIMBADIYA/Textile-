import React, { useState } from 'react'
import { FaArrowLeft, FaTimes, FaChevronRight } from "react-icons/fa";
import upipe from '../../../assets/upipe.webp';
import Gpe from '../../../assets/gpe.png';
import ppe from '../../../assets/ppay.png';
import bhimpe from '../../../assets/bhimpe.png';
import credpe from '../../../assets/credpe.svg';
import paype from '../../../assets/paype.png';

const Upi = ({ onBack }) => {
    const [selectedUPI, setSelectedUPI] = useState(null); // Track the selected UPI option

  // Function to handle UPI selection
  const handleSelectUPI = (option) => {
    if (selectedUPI === option) {
      setSelectedUPI(null); // If already selected, collapse the option
    } else {
      setSelectedUPI(option); // Set the selected UPI option
    }
  };

  

  // Function to render the detailed view for the selected option
  const renderDetails = (option) => {
    return (
      <div className="border p-4 rounded-lg mt-2">
        <input
          type="text"
          placeholder={`Enter ${option} ID`}
          className="w-full border p-2 rounded-md"
        />
        <div className="flex items-center my-4">
          <input type="checkbox" className="mr-2" />
          <span>Save my details for faster payments</span>
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded-lg">VERIFY</button>
        <div className="flex justify-center mt-4">
           <span className='text-gray-500 text-[11px]'>100+ upi apps supported</span>
          <img className="w-3 object-contain mx-2 max-sm:w-3" src={Gpe} alt="Google Pay" />
          <img className="w-3 object-contain mx-2 max-sm:w-3" src={paype} alt="Paytm" />
          <img className="w-3 object-contain mx-2 max-sm:w-3" src={ppe} alt="PhonePe" />
          <img className="w-3 object-contain mx-2 max-sm:w-3" src={bhimpe} alt="BHIM" />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center mb-4 cursor-pointer" onClick={onBack}>
        <FaArrowLeft className="text-gray-600 mr-2" />
        <h2 className="text-xl font-semibold">UPI OPTIONS</h2>
      </div>
      <div className="space-y-4">
        {/* Pay by UPI ID */}
        <div className="one border p-4 rounded-lg">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => handleSelectUPI('Pay by UPI ID / UPI Number')}>
            <div className='flex gap-2'>
              <img className='w-9' src={upipe} alt="UPI" />
              <span className="flex-1 max-sm:text-sm">Pay by UPI ID / UPI Number</span>
            </div>
            {selectedUPI === 'Pay by UPI ID / UPI Number' ? <FaTimes className="text-gray-400" /> : <FaChevronRight className="text-gray-400" />}
          </div>
          {selectedUPI === 'Pay by UPI ID / UPI Number' && renderDetails('Pay by UPI ID / UPI Number')}
        </div>

        {/* Google Pay */}
        <div className="two border p-4 rounded-lg">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => handleSelectUPI('Google Pay')}>
            <div className='flex gap-2'>
              <img className='w-7' src={Gpe} alt="Google Pay" />
              <span className="flex-1 max-sm:text-sm">Google Pay</span>
            </div>
            {selectedUPI === 'Google Pay' ? <FaTimes className="text-gray-400" /> : <FaChevronRight className="text-gray-400" />}
          </div>
          {selectedUPI === 'Google Pay' && renderDetails('Google Pay')}
        </div>

        {/* PhonePe */}
        <div className="three border p-4 rounded-lg">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => handleSelectUPI('PhonePe')}>
            <div className='flex gap-2'>
              <img className='w-10' src={ppe} alt="PhonePe" />
              <span className="flex-1 max-sm:text-sm">PhonePe</span>
            </div>
            {selectedUPI === 'PhonePe' ? <FaTimes className="text-gray-400" /> : <FaChevronRight className="text-gray-400" />}
          </div>
          {selectedUPI === 'PhonePe' && renderDetails('PhonePe')}
        </div>

        {/* BHIM */}
        <div className="four border p-4 rounded-lg">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => handleSelectUPI('BHIM')}>
            <div className='flex gap-2'>
              <img className='w-6' src={bhimpe} alt="BHIM" />
              <span className="flex-1 max-sm:text-sm">BHIM</span>
            </div>
            {selectedUPI === 'BHIM' ? <FaTimes className="text-gray-400" /> : <FaChevronRight className="text-gray-400" />}
          </div>
          {selectedUPI === 'BHIM' && renderDetails('BHIM')}
        </div>

        {/* CRED UPI */}
        <div className="five border p-4 rounded-lg">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => handleSelectUPI('CRED UPI')}>
            <div className='flex gap-2'>
              <img className='w-7' src={credpe} alt="CRED UPI" />
              <span className="flex-1 max-sm:text-sm">CRED UPI</span>
            </div>
            <span className="text-blue-500 max-sm:text-sm">Upto ₹500 Cashback</span>
            {selectedUPI === 'CRED UPI' ? <FaTimes className="text-gray-400" /> : <FaChevronRight className="text-gray-400" />}
          </div>
          {selectedUPI === 'CRED UPI' && renderDetails('CRED UPI')}
        </div>

        {/* PAYTM */}
        <div className="six border p-4 rounded-lg">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => handleSelectUPI('PAYTM')}>
            <div className='flex gap-2'>
              <img className='w-8' src={paype} alt="PAYTM" />
              <span className="flex-1 max-sm:text-sm">PAYTM</span>
            </div>
            {selectedUPI === 'PAYTM' ? <FaTimes className="text-gray-400" /> : <FaChevronRight className="text-gray-400" />}
          </div>
          {selectedUPI === 'PAYTM' && renderDetails('PAYTM')}
        </div>
      </div>
    </div>
  )
}

export default Upi
