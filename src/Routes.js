import { createBrowserRouter } from "react-router-dom";
import Carousal from "./components/Carousal/Carousal";
import CategoryNavbar from "./components/navbar/CategoryNavbar";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/Home/HomePage";

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
      path: "about",
      element: <div>About</div>,
    },
  ]);