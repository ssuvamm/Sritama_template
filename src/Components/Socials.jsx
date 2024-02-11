import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Socials = () => {
  return (
    <div className="py-[1%] flex items-center place-content-evenly bg-[#a99a66]">
      <h1 className="text-xl font-bold"> Sritama's Socials</h1>
      <div>
        <Link
          to="https://www.youtube.com/@SritamaBasu/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-8 h-8 hover:scale-125"
            src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link
          to="https://www.instagram.com/sritamabasu/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-8 h-8 hover:scale-125"
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
