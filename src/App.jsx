import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { router } from "./components/Route/Router";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
