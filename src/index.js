import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./landing.css";
import "./plugins.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Success from "./templates/Success";
import NoPage from "./templates/NoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        render={({ location }) => {
          console.log("GTAG Fired On Route Change")
          window.gtag("config", "AW-11454303460", {
            page_path: location.pathname + location.search,
          });
          window.gtag("config", "G-SGWJH10LNL", {
            page_path: location.pathname + location.search,
          });
        }}
        element={<Outlet />}
      >
        <Route index element={<App />} />
        <Route path="success" element={<Success />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
