import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import {Provider} from "react-redux"
import {store} from "./Redux/Store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
