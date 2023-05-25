import { createBrowserRouter } from "react-router-dom";
import Carousal from "./components/Carousal/Carousal";
import CategoryNavbar from "./components/navbar/CategoryNavbar";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Signup from "./pages/Signup/Signup";

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
         <Navbar />
         <CategoryNavbar />
         <Carousal />
         <HomePage />
        </>
      ),
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "cart",
      element: <>
       <Navbar />
       <Cart />
      </>,
    },
    {
      path: "product",
      element: <>
        <Navbar />
         <CategoryNavbar />
         <Product />
      </>
    },
  ]);