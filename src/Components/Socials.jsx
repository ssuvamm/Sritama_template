
import { Link } from "react-router-dom";
import "../App.css";

const Socials = () => {
  return (
    <div className="flex place-content-evenly items-center py-[1%] ">
      <div>
        <Link
          to="https://www.youtube.com/@SritamaBasu/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-8 w-8 hover:scale-125"
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
            className="h-8 w-8 hover:scale-125"
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
