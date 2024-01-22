import React, { useContext } from "react";
import "./Order.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { totalPriceClc } from "../../utils/totalPriceCalculation";

const Order = () => {
  const { carts, totalPrice, delteSingleProduct, clearCart } =
    useContext(CartContext);
    const {total, shipping, tax, grandTotal} = totalPriceClc(carts)
  return (
    <div className="h-screen grid place-items-center">
      <div className="order-container w-full">
        <h1>Order Review</h1>
        <table>
          <thead>
            <tr>
              <th>Images</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>DEL</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample items, replace with actual order items */}
            {carts?.map((cart) => {
              return (
                <tr key={cart.id} className="relative group-td">
                  <td>
                    <img src={cart?.img} className="w-16 rounded-full" alt="" />
                  </td>
                  <td>{cart?.name}</td>
                  <td>{cart?.quantity}</td>
                  <td>${cart?.price}</td>
                  <td
                    onClick={() => delteSingleProduct(cart.id)}
                    className=" text-white cursor-pointer rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 bg-red p-2 rounded-full hover:opacity-50"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-between">
          <div className="total flex gap-2 items-center">
            <strong>All Delete:</strong>{" "}
            <span onClick={() => clearCart()} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 bg-red p-2 rounded-full hover:opacity-50 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </span>
          </div>
          <div className="total">
            <strong>Total:</strong> $ {grandTotal}
          </div>
        </div>
        <div className="btn-container bg-orange w-1/2 mx-auto rounded-md hover:bg-orange40">
          <Link to={"#"} className="btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
