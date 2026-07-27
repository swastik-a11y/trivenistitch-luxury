import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

// Consolidated global styles: use variables/typography/globals
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
