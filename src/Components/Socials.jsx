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
          <img className="w-8 h-8 hover:scale-125" src="/youtube.svg" alt="" />
        </Link>
      </div>
      <div>
        <Link
          to="https://www.instagram.com/sritamabasu/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-8 h-8 hover:scale-125" src="/insta.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
