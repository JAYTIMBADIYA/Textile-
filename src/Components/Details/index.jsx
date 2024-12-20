import React, { useEffect} from 'react'
import Product from './Product/Product'
import { useLocation } from 'react-router-dom';
import Information from './Information/Information';
import Releted from './Releted/Releted';

const Details = () => {
  const location = useLocation();
  const { product } = location.state;

  useEffect(() => {
    // Logic that can trigger if product changes
    window.scrollTo(0, 0); // Scroll to top on product change
  }, [product]);

  // If no product is found, handle it
  if (!product) {
    return <div>No product found</div>;
  }



  return (
    <div>
        <Product product={product}/>
        <Information />
        <Releted product={product}/>
      
    </div>
  )
}

export default Details
