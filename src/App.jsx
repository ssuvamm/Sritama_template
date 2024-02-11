import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Videos from "./pages/Videos";
import Lessons from "./pages/Lessons";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bio" element={<Bio />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/lessons" element={<Lessons />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
