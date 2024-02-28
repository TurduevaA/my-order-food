import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./assets/context/ModalContext.jsx";
import { CardProvider } from "./assets/context/CardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </CardProvider>
  </React.StrictMode>
);
