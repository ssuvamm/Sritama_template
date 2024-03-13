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
    <nav className="navbar fixed top-0 z-50 flex w-full place-content-between bg-inherit py-[1%] text-2xl">
      <div className="hidden w-full place-content-between px-[6%] md:flex">
        <Link
          to="/"
          onClick={handleScrollToTop}
          className="text-[#F6C90E]  transition-all  delay-100 ease-in-out hover:text-[#6D6D6D]"
        >
          <h2>Home</h2>
        </Link>
        <Link
          className="ml-4  text-[#F6C90E] transition-all delay-100 ease-in-out hover:text-[#6D6D6D]"
          to="/bio"
          onClick={handleScrollToTop}
        >
          <h2>Bio</h2>
        </Link>
        <Link
          className="ml-4  text-[#F6C90E] transition-all delay-100 ease-in-out hover:text-[#6D6D6D]"
          to="/videos"
          onClick={handleScrollToTop}
        >
          <h2>Music Gallery</h2>
        </Link>
        <Link
          className="ml-4  text-[#F6C90E] transition-all delay-100 ease-in-out hover:text-[#6D6D6D]"
          to="/images"
          onClick={handleScrollToTop}
        >
          <h2>Image Gallery</h2>
        </Link>
        <Link
          className="ml-4  text-[#F6C90E] transition-all delay-100 ease-in-out hover:text-[#6D6D6D]"
          to="/contact"
          onClick={handleScrollToTop}
        >
          <h2>Contact</h2>
        </Link>
      </div>
      <div className="flex md:hidden">
        <button
          onClick={toggleMenu}
          className="z-50  ml-6 mt-4 text-[#F6C90E] transition-all delay-100 ease-in-out hover:text-[#6D6D6D] focus:outline-none"
        >
          ☰
        </button>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-gray-800 bg-opacity-50 text-center"
          >
            <div className="rounded-lg bg-white bg-opacity-60 p-4 ">
              <div>
                <Link
                  to="/"
                  onClick={handleMultipleFunctions}
                  className="block  text-[#F6C90E] transition-all delay-100 ease-in-out hover:text-[#6D6D6D]"
                >
                  Home
                </Link>
                <Link
                  to="/bio"
                  onClick={handleMultipleFunctions}
                  className="mt-2  block text-[#F6C90E] transition-all delay-100 ease-in-out hover:text-[#6D6D6D]"
                >
                  Bio
                </Link>
                <Link
                  to="/videos"
                  onClick={handleMultipleFunctions}
                  className="mt-2  block text-[#F6C90E] transition-all delay-100 ease-in-out hover:text-[#6D6D6D]"
                >
                  Music Gallery
                </Link>
                <Link
                  to="/images"
                  onClick={handleMultipleFunctions}
                  className="mt-2  block text-[#F6C90E] transition-all delay-100 ease-in-out hover:text-[#6D6D6D]"
                >
                  Image Gallery
                </Link>
                <Link
                  to="/contact"
                  onClick={handleMultipleFunctions}
                  className="mt-2  block text-[#F6C90E] transition-all delay-100 ease-in-out hover:text-[#6D6D6D]"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <Link
                onClick={toggleMenu}
                className="mt-[70%]  block rounded-lg bg-white bg-opacity-70 p-4  text-center text-[#F6C90E] transition-all delay-100 ease-in-out hover:text-[#6D6D6D]"
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
