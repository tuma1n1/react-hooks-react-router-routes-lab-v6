import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

ReactDOM.render(
    <RouterProvider router={router} />, 
    document.getElementById("root") 
);

