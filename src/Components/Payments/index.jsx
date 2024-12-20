import React, { useState} from 'react'
import Paypage from './Paypage/Paypage'
import Creditcard from './Creditcard/Creditcard'
import Upi from './Upi/Upi';
import Scan from './Scan/Scan';
import { useLocation } from 'react-router-dom';

const Payments = () => {
    const location = useLocation();
    const totalPrice = location.state?.totalPrice || 0;

    const [showCardForm, setShowCardForm] = useState(false);
    const [showUPIOptions, setShowUPIOptions] = useState(false);
    const [showScanOption, setShowScanOption] = useState(false);
  
    // Function to show the payment options
    const handleBackToPaymentOptions = () => {
      setShowCardForm(false);
      setShowUPIOptions(false);
      setShowScanOption(false);
    };
  
    // Function to show the Credit Card Form
    const handleShowCardForm = () => {
      setShowCardForm(true);
      setShowUPIOptions(false);
      setShowScanOption(false); 
    };
  
    // Function to show UPI Options
    const handleShowUPIOptions = () => {
      setShowUPIOptions(true);
      setShowCardForm(false);
      setShowScanOption(false);
    };

    // Function to show Scan and Pay option
    const handleShowScanOption = () => {
        setShowScanOption(true);
        setShowCardForm(false);
        setShowUPIOptions(false);
      };

  return (
    <>
    <div className='px-44 text-3xl font-semibold my-8 max-sm:px-2'>
        Payment
    </div>

    <div className=" flex flex-col items-center bg-gray-100 py-8 max-sm:py-1 max-sm:px-2">
      <div className="w-full max-w-6xl bg-white rounded-md shadow-md my-10 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section - Payment Summary */}
          <div className="md:sticky md:top-6 self-start">
            <div className="flex items-center mb-4 cursor-pointer">
              {/* Static left section */}
              <h2 className="text-xl font-semibold">Choose a payment option</h2>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-500">Payable Now</span>
              <span className="text-2xl font-bold">₹{totalPrice}</span>
            </div>
            <div className="text-gray-500 mb-2">
              Transaction Id: r1Fcy2q89DsfQyYp3kZwkAJEE
            </div>
            <div className="border p-4 rounded-lg mb-4 max-sm:mt-10">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold max-sm:text-sm">
                    Enjoy Flat 100% on Kiwi upto Rs.200. TCA
                  </h3>
                  <p className="text-sm text-gray-500">₹200 Cashback | T&C</p>
                </div>
                <button className="bg-green-100 text-green-600 px-4 py-1 rounded-md">APPLY</button>
              </div>
            </div>
            <button className="text-green-600 underline">
              View More Offers & Rewards
            </button>
          </div>

          {/* Right Section - Conditional Rendering */}
          <div>
            {!showCardForm && !showUPIOptions && !showScanOption ? (
              // Payment Options Page
              <Paypage
                onCardSelect={handleShowCardForm}
                onUPISelect={handleShowUPIOptions}
                onScanSelect={handleShowScanOption} 
              />
            ) : showCardForm ? (
              // Credit Card Form
              <Creditcard onBack={handleBackToPaymentOptions} />
            ) : showUPIOptions ? (
              // UPI Options
              <Upi onBack={handleBackToPaymentOptions} />
            ) : (
                // Scan and Pay Option
              <Scan onBack={handleBackToPaymentOptions} />
            )}
          </div>
        </div>
      </div>
    </div>
    
      
    </>
  )
}

export default Payments
