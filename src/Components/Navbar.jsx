import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { motion as m } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  function handleMultipleFunctions() {
    toggleMenu();
    handleScrollToTop();
  }

  return (
    <nav className="navbar text-2xl bg-inherit fixed top-0 flex place-content-between py-[1%] w-full z-50">
      <div className="hidden md:flex place-content-between w-full px-[6%]">
        <Link
          to="/"
          className="text-[#F6C90E]  hover:text-[#6D6D6D]  transition-all delay-100 ease-in-out"
        >
          <h2>Home</h2>
        </Link>
        <Link
          className="text-[#F6C90E]  hover:text-[#6D6D6D] transition-all delay-100 ease-in-out ml-4"
          to="/bio"
        >
          <h2>Bio</h2>
        </Link>
        <Link
          className="text-[#F6C90E]  hover:text-[#6D6D6D] transition-all delay-100 ease-in-out ml-4"
          to="/videos"
        >
          <h2>Music Gallery</h2>
        </Link>
        <Link
          className="text-[#F6C90E]  hover:text-[#6D6D6D] transition-all delay-100 ease-in-out ml-4"
          to="/images"
        >
          <h2>Image Gallery</h2>
        </Link>
        <Link
          className="text-[#F6C90E]  hover:text-[#6D6D6D] transition-all delay-100 ease-in-out ml-4"
          to="/contact"
        >
          <h2>Contact</h2>
        </Link>
      </div>
      <div className="md:hidden flex">
        <button
          onClick={toggleMenu}
          className="text-[#F6C90E]  hover:text-[#6D6D6D] transition-all delay-100 ease-in-out focus:outline-none z-50 ml-6 mt-4"
        >
          ☰
        </button>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center flex-col items-center text-center"
          >
            <div className="bg-white bg-opacity-60 p-4 rounded-lg ">
              <div>
                <Link
                  to="/"
                  onClick={handleMultipleFunctions}
                  className="text-[#F6C90E]  hover:text-[#6D6D6D] transition-all delay-100 ease-in-out block"
                >
                  Home
                </Link>
                <Link
                  to="/bio"
                  onClick={handleMultipleFunctions}
                  className="text-[#F6C90E]  hover:text-[#6D6D6D] transition-all delay-100 ease-in-out block mt-2"
                >
                  Bio
                </Link>
                <Link
                  to="/videos"
                  onClick={handleMultipleFunctions}
                  className="text-[#F6C90E]  hover:text-[#6D6D6D] transition-all delay-100 ease-in-out block mt-2"
                >
                  Music Gallery
                </Link>
                <Link
                  to="/images"
                  onClick={handleMultipleFunctions}
                  className="text-[#F6C90E]  hover:text-[#6D6D6D] transition-all delay-100 ease-in-out block mt-2"
                >
                  Image Gallery
                </Link>
                <Link
                  to="/contact"
                  onClick={handleMultipleFunctions}
                  className="text-[#F6C90E]  hover:text-[#6D6D6D] transition-all delay-100 ease-in-out block mt-2"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <Link
                onClick={toggleMenu}
                className="text-[#F6C90E]  hover:text-[#6D6D6D] transition-all delay-100 ease-in-out block  text-center mt-[70%] bg-white bg-opacity-70 p-4 rounded-lg"
              >
                X
              </Link>
            </div>
          </m.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
