import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Stats from "./Stats.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/back" element={<App />} />
      <Route path="/:id" element={<Stats />} />
    </Routes>
  </BrowserRouter>
);
