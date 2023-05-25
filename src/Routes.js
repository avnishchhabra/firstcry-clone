import { createBrowserRouter } from "react-router-dom";
import Carousal from "./components/Carousal/Carousal";
import CategoryNavbar from "./components/navbar/CategoryNavbar";
import Navbar from "./components/navbar/Navbar";

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
         <Navbar />
         <CategoryNavbar />
         <Carousal />
        </>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);