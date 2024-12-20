import React, { useState } from 'react';

const Information = () => {
  const [activeTab, setActiveTab] = useState('first'); // Track which tab is active

  const handleTabClicK = (tab) => {
    setActiveTab(tab); // Update the active tab
  };

  return (
    <div className='mt-11 max-sm:mt-5'>
      <div className='flex flex-row space-x-4 justify-center max-sm:justify-between max-md:mx-4 pb-5'>
        <h3
          className={`font-bold cursor-pointer relative max-sm:text-sm ${
            activeTab === 'first' ? 'text-black' : 'text-gray-700'
          }`}
          onClick={() => handleTabClicK('first')}
        >
          Product Details
          {activeTab === 'first' && (
            <span className='absolute left-0 right-0 top-6 h-1 bg-black mt-1'></span>
          )}
        </h3>
        <h3
          className={`font-bold cursor-pointer relative max-sm:text-sm  ${
            activeTab === 'second' ? 'text-black' : 'text-gray-700'
          }`}
          onClick={() => handleTabClicK('second')}
        >
          Shipping & Returns
          {activeTab === 'second' && (
            <span className='absolute left-0 right-0 top-6 h-1 bg-black mt-1'></span>
          )}
        </h3>
      </div>
      <hr />
      <div className='px-4'>
        {activeTab === 'first' && (
          <div className='first mt-5 py-11 max-sm:py-5'>
            <h1 className='font-bold'>Specifications:</h1>
            <p>
              <span className='font-bold'>Kurta Fabric:</span> Cotton
            </p>
            <p>
              <span className='font-bold'>Bottom Fabric:</span> Cotton
            </p>
            <p>
              <span className='font-bold'>Dupatta Fabric:</span> Cotton
            </p>
            <p>
              <span className='font-bold'>Pattern:</span> Printed
            </p>
            <p>
              <span className='font-bold'>Style:</span> Unstitched Suit Material
            </p>
            <p className='mt-5'>
              <span className='font-bold'>Occasion:</span> Everyday Wear
            </p>
            <p>
              <span className='font-bold'>Size & Fit:</span>
            </p>
            <p>
              <span className='font-bold'>Kurta Fabric Length:</span> 2.5 meters
            </p>
            <p>
              <span className='font-bold'>Bottom Fabric Length:</span> 2.5 meters
            </p>
            <p>
              <span className='font-bold'>Dupatta Fabric Length:</span> 2.25 meters
            </p>
            <p className='mt-5'>
              <span className='font-bold'>Fabric Care:</span>
            </p>
            <p className='mt-5'>Dry clean</p>
          </div>
        )}

        {activeTab === 'second' && (
          <div className='second mt-4 py-11'>
            <div>
              <h1 className='font-bold underline'>Signature Style Products Return Policy:</h1>
              <p className='mt-3'>Products cannot be returned or exchanged.</p>
            </div>
            <div className='mt-4'>
              <h1 className='font-bold underline'>Jewellery & Accessories Return Policy:</h1>
              <p className='mt-3'>Products cannot be returned or exchanged.</p>
            </div>
            <div className='mt-4'>
              <h1 className='font-bold underline'>Made to Order Category Products Policy:</h1>
              <p className='mt-3'>Exchange and returns are not applicable in custom made products.</p>
            </div>
            <div className='mt-10'>
              <h1 className='font-bold underline'>Other Category Products Policy:</h1>
              <p className='mt-3'>
                Products can only be returned and exchanged within 3 days from the date of delivery. Returns are applicable only in case of damaged product or delivery of incorrect size (size other than that ordered)/style/color with proper opening video.
              </p>
            </div>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Information;
