import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar text-2xl bg-transparent fixed top-0 flex place-content-evenly py-[1%] w-full z-50">
      <div>
        <Link
          to="/"
          className="text-purple-950  hover:text-purple-400 transition-all delay-100 ease-in-out "
        >
          <h2>Home</h2>
        </Link>
      </div>
      <div>
        <Link
          className="text-purple-950   hover:text-purple-400 transition-all delay-100 ease-in-out "
          to="/bio"
        >
          <h2>Bio</h2>
        </Link>
      </div>
      <div>
        <Link
          className="text-purple-950   hover:text-purple-400 transition-all delay-100 ease-in-out "
          to="/videos"
        >
          <h2>Music Gallery</h2>
        </Link>
      </div>
      <div>
        <Link
          className="text-purple-950   hover:text-purple-400 transition-all delay-100 ease-in-out "
          to="/images"
        >
          <h2>Image Gallery</h2>
        </Link>
      </div>
      <div>
        <Link
          className="text-purple-950   hover:text-purple-400 transition-all delay-100 ease-in-out "
          to="/contact"
        >
          <h2>Contact</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
