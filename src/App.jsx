import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";

const App = () => (
  <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
    </BrowserRouter> */}

    <div className="flex items-center text-center justify-center h-screen ">
      <img
        className="w-80 h-80 "
        src="https://gifdb.com/images/high/buffering-animated-text-icon-loading-u1h739who8u5mtw3.gif"
        alt=""
      />
    </div>
  </>
);

export default App;
