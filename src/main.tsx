import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Consolidated global styles: use globals/variables/typography
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
