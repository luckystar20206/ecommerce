import Main from "../../layout/Main";
import About from "../../components/About/About";
import Shop from "../../components/Shop/Shop";
import Hero from "../../components/Home/Hero";
import Auth from "../../components/auth/Auth";
import Login from "../../components/auth/Login";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Order from "../order/Order";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <PrivateRoute><Hero /></PrivateRoute>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <PrivateRoute><Shop /></PrivateRoute>,
          loader: () => fetch("products.json"),
        },
        {
          path: "/order",
          element: <Order/>
        },
        { path: "/register", element: <Auth /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);