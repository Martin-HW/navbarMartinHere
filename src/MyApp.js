import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const MyApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default MyApp;
