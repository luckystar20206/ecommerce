import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import "./Shop.css";
import { useContext, useEffect, useRef, useState } from "react";
import Cart from "./Cart";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Shop = () => {
  const { user } = useContext(AuthContext);
  const { contextAddCard, clearCart, carts } = useContext(CartContext);
  const products = useLoaderData();
  const [cardProduct, setCardProduct] = useState(carts);
  const [toggleCart, setToggleCart] = useState(false);
  const addToCard = (callBackProduct) => {
    let newCart = [];
    const productExist = cardProduct.find(
      (product) => product.id === callBackProduct.id
    );
    if (!productExist) {
      callBackProduct.quantity = 1;
      newCart = [...cardProduct, callBackProduct];
    } else {
      const rest = addToCard.filter(
        (product) => product.id !== callBackProduct.id
      );
      productExist.quantity = productExist.quantity + 1;
      setCardProduct(...rest, productExist);
    }
    contextAddCard(newCart);
    setCardProduct(newCart);
  };
  const clearCard = () => {
    setCardProduct([]);
    clearCart();
  };

  // DropDown hidden when click outside
  const popupRef = useRef(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsPopupVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    if (!isPopupVisible) {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopupVisible]);
  // ref={popupRef} use in current DropDown div
  // Dropdown program End

  return (
    <div className="mt-[200px] flex flex-col-reverse sm:flex-row gap-6 mx-auto p-5">
      {user.emailVerified ? (
        <>
          <div className="w-full md:w-3/4 lg:w-4/5">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addToCard={addToCard}
                />
              ))}
            </div>
          </div>
          <div
            ref={popupRef}
            className="sidebar sm:w-full md:w-1/4 lg:w-1/5 p-5 overflow-hidden rounded "
          >
            <div
              onClick={() => setIsPopupVisible(!isPopupVisible)}
              className="cursor-pointer fixed left-2 top-[180px] bg-orange p-2 rounded-lg block sm:hidden text-white"
            >
              {cardProduct.length >= 1 && (
                <span className="card-icon flex items-center justify-center text-sm">
                  {cardProduct.length}
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <div
              className={
                isPopupVisible
                  ? "block bg-orange p-5 rounded-lg fixed w-[80%]"
                  : "fixed p-5 bg-orange rounded-lg hidden sm:block -z-50"
              }
            >
              <Cart cart={cardProduct} clearCard={clearCard} />
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-orange">Please verify your Email!</h1>
      )}
    </div>
  );
};

export default Shop;
