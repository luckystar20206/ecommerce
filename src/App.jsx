import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Hero from "./components/Home/Hero";
import Auth from "./components/auth/Auth";
import Login from "./components/auth/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <Shop />,
          loader: () => fetch("products.json"),
        },
        { path: "/register", element: <Auth /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
