import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    const addedPrice = JSON.parse(localStorage.getItem("total-price")) || [];
    setTotalPrice(addedPrice);
  }, []);

  const contextAddCard = (product) => {
    setCart(product);
    localStorage.setItem("cart", JSON.stringify(product));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };



  const delteSingleProduct = (id) => {
    const newProducts = cart.filter((item) => item.id !== id);
    setCart(newProducts);
    localStorage.setItem("cart", JSON.stringify(newProducts));
  };

  const CardValue = {
    contextAddCard,
    clearCart,
    carts: cart,
    totalPrice,
    delteSingleProduct,
  };
  return (
    <CartContext.Provider value={CardValue}>{children}</CartContext.Provider>
  );
};
