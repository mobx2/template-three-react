import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
