import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { GlobalStyle } from "./index.styled.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <App />
  </>
  // </React.StrictMode>
);
