import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/AuthContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </UserProvider>
  </React.StrictMode>
);
