import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import App2 from "./components/App2";
import App3 from "./components/App3";
import ReactDOM from "react-dom/client";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AboutSection" element={<App2 />} />
      <Route path="/Resume" element={<App3 />} />

    </Routes>
  </BrowserRouter>
);
