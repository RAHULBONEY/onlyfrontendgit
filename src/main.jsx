import React from "react"; // Make sure this is imported
import ReactDOM from "react-dom/client";
import App from "./App"; // Assuming App is your main component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
