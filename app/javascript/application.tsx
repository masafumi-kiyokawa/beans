// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers/index.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
