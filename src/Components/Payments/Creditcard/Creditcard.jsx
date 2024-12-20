import React from 'react'
import { FaArrowLeft } from "react-icons/fa"; 

const Creditcard = ({ onBack }) => {
  return (
    <>
    <div>
      <div className="flex items-center mb-4 cursor-pointer" onClick={onBack}>
        <FaArrowLeft className="text-gray-600 mr-2" />
        <h2 className="text-xl font-semibold">CARDS (CREDIT/DEBIT)</h2>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Card Number</label>
          <input
            type="text"
            placeholder="Enter Card Number"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Expiry</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">CVV</label>
            <input
              type="text"
              placeholder="Enter CVV"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Name on Card</label>
          <input
            type="text"
            placeholder="Enter name as on card"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button className="bg-green-100 text-green-600 w-full px-4 py-2 rounded-lg hover:bg-green-400 hover:text-white transition duration-300">PROCEED</button>
      </form>
    </div>
      
    </>
  )
}

export default Creditcard
