// src/Components/CartContext.js

import React, { createContext, useState, useEffect, useContext } from "react";

// Create CartContext
export const CartContext = createContext();

// Create a custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(() => {
    // Load cart products from localStorage on initial render
    const storedProducts = localStorage.getItem("cartProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  // Update localStorage whenever cartProducts changes
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  // Add product to cart
  const addToCart = (product) => {
    setCartProducts((prevProducts) => {
      const productIndex = prevProducts.findIndex(
        (p) => p.name === product.name && p.selectedSize === product.selectedSize
      );
      if (productIndex !== -1) {
        // Update quantity if product already exists
        const updatedCart = [...prevProducts];
        updatedCart[productIndex].quantity += product.quantity;
        return updatedCart;
      } else {
        // Add new product to the cart
        return [...prevProducts, product];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (index) => {
    setCartProducts((prev) => prev.filter((_, i) => i !== index));
  };

  // Increase product quantity
  const increaseQuantity = (index) => {
    setCartProducts((prev) => {
      const updatedCart = [...prev];
      updatedCart[index].quantity += 1;
      return updatedCart;
    });
  };

  // Decrease product quantity
  const decreaseQuantity = (index) => {
    setCartProducts((prev) => {
      const updatedCart = [...prev];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      }
      return updatedCart;
    });
  };

  // Clear the cart
  const clearCart = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
