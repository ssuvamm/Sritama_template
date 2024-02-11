import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import ImageGallery from "./pages/ImageGallery";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bio" element={<Bio />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/images" element={<ImageGallery />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
