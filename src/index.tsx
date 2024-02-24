import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import { store } from "./store/store";
import App from "./app/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*<Provider store={store}>*/}
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
    {/*</Provider>*/}
  </React.StrictMode>
);
