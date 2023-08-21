import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
