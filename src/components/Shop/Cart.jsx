import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { totalPriceClc } from "../../utils/totalPriceCalculation";

const Cart = ({ cart, clearCard }) => {
  const {total, shipping, tax, grandTotal} = totalPriceClc(cart)
  return (
    <div className="space-y-5 overflow-hidden pr-5">
      <h2 className="text-left font-bold text-xl">Order Summary</h2>
      <p>Selected Items: {cart.length} </p>
      <p>Total Price: ${total}</p>
      <p>Shipping Charge: ${shipping}</p>
      <p>Tax ${tax}</p>
      <p>
        <b>Grand Total: ${grandTotal}</b>
      </p>
      <button
        onClick={() => clearCard()}
        className="flex text center bg-red text-white w-full px-2 py-3 rounded-md "
      >
        <span>Clear Cart</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </span>
      </button>
      <Link to="/order" className="block mt-5 text-md overflow-hidden">
        <div className=" bg-orange40 rounded-md text-white flex items-center w-full px-2 py-3">
          <span>Review Order</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
