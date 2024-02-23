import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import ImageGallery from "./pages/ImageGallery";
import Footer from "./Components/Footer";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInitialLoad(true);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative font-montserrat">
      <Navbar />
      <AnimatePresence initial={isInitialLoad} mode="wait">
        <Routes location={location}>
          <Route key="home" path="/" element={<Home />}></Route>
          <Route key="bio" path="/bio" element={<Bio />}></Route>
          <Route key="videos" path="/videos" element={<Videos />}></Route>
          <Route key="images" path="/images" element={<ImageGallery />}></Route>
          <Route key="contact" path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
