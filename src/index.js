import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";
import App from "./Valentines-Card";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

