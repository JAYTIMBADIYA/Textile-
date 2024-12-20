import React, { useRef, useEffect } from 'react'
import Slider from './Slider/Slider'
import Images from './Images/Images'
import Seller from './Seller/Seller'
import SellerOne from './SellerOne/SellerOne'
import Saree from './Saree/Saree'
import Show from './Show/Show'
import Text from './Text/Text'

const Home = () => {
  const sellerRef = useRef(null);

  // Function to scroll to Seller
  useEffect(() => {
    window.scrollToSeller = () => {
      sellerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  }, []);

  return (
    <>
      <Slider />
      <Images />
      <div ref={sellerRef}>
        <Seller />
      </div>
      <div ref={sellerRef}>
        <SellerOne />
      </div>
      <Saree />
      <Show />
      <Text />
    </>
  )
}

export default Home
