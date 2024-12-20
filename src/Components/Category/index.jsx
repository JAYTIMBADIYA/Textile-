import React from 'react'
import { useLocation } from "react-router-dom";
import Title from './Title/Title'

const Category = () => {
    const location = useLocation();
  const { state } = location;
  const categoryIndex = state ? state.categoryIndex : 0; // Default to 0 if no index is provided

  // Logic to determine the product slice based on categoryIndex
  const productsPerCategory = 8;
  const startIndex = categoryIndex * productsPerCategory;
  const endIndex = startIndex + productsPerCategory;
  return (
    <>
    <Title startIndex={startIndex} endIndex={endIndex}/>
      
    </>
  )
}

export default Category
