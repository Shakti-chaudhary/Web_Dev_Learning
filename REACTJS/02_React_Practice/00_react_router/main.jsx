import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App2 from "./App2.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {console.clear()}
//     <App />
//   </React.StrictMode>
// );

// for app2 content

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {console.clear()}
    <BrowserRouter>
      <App2 />
    </BrowserRouter>
  </React.StrictMode>
);
