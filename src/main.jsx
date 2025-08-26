import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import '@fontsource/inter';           // For Inter
import '@fontsource/jetbrains-mono';  // For JetBrains Mono
import './styles.css';                // Import your tailwind CSS
import '@fontsource/inter/index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
