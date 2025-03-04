import "../src/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import routes from "./Routes"
import {RouterProvider} from "react-router-dom" 

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<StrictMode>  
  <RouterProvider router={routes}/>
</StrictMode>)