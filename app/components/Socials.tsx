import Image from "next/image";
import Link from "next/link";

const Socials = () => {
    return (
      <div className="flex place-content-evenly items-center py-[1%] ">
        <div>
          <Link
            href="https://www.youtube.com/@SritamaBasu/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="h-8 w-8 hover:scale-125"
              src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
              alt=""
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div>
          <Link
            href="https://www.instagram.com/sritamabasu/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="h-8 w-8 hover:scale-125"
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt=""
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    );
  };
  
  export default Socials;