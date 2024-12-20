import React from 'react'
import { FaChevronRight, FaCreditCard, FaUniversity } from "react-icons/fa";
import { MdOutlineLocalOffer, MdOutlinePayments } from "react-icons/md";

const Paypage = ({ onCardSelect, onUPISelect, onScanSelect   }) => {
  return (
    <div>
      <h2 className="text-xl max-sm:text-base font-semibold mb-4">SELECT A PAYMENT OPTION</h2>
      <div className="border p-4 rounded-lg flex justify-between items-center mb-4">
        <MdOutlineLocalOffer className="text-gray-600" size={28} />
        <div className="flex-1 mx-4 max-sm:mx-1">
          <h3 className="font-semibold max-sm:text-sm">Unlock offers & saved options!</h3>
        </div>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-md">PROCEED</button>
      </div>

      <div className="space-y-4">
        <div
          className="border p-4 rounded-lg flex justify-between items-center cursor-pointer"
          onClick={onCardSelect}
        >
          <FaCreditCard className="text-gray-600" size={24} />
          <span className="flex-1 mx-4">Cards (Credit/Debit)</span>
          <FaChevronRight className="text-gray-400" />
        </div>
        <div 
          className="border p-4 rounded-lg flex justify-between items-center cursor-pointer"
          onClick={onUPISelect}
          >
          <MdOutlinePayments className="text-blue-500" size={24} />
          <span className="flex-1 mx-4">UPI <span className="text-green-600">₹200 Cashback</span></span>
          <FaChevronRight className="text-gray-400" />
        </div>
        <div 
          className="border p-4 rounded-lg flex justify-between items-center cursor-pointer"
          onClick={onScanSelect}
        >
          <FaUniversity className="text-gray-600" size={24} />
          <span className="flex-1 mx-4">Scan and Pay</span>
          <FaChevronRight className="text-gray-400" />
        </div>
      </div>
    </div>
  )
}

export default Paypage
