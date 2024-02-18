import { Link } from "react-router-dom";
import Socials from "../Components/Socials";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col h-screen w-screen bg-[url('/2.jpg')] bg-center md:bg-right-top bg-fixed flex-grow md:bg-cover ">
        <h1 className="text-7xl font-bold pt-[10vh] flex items-center pl-[15%] fixed">
          Sritama's Artistry
        </h1>
      </div>
      <div className=" bottom-0">
        <Socials />
      </div>
      <div className=" bottom-0 py-[1%] bg-[#a99a66]">
        <h1 className="text-2xl font-bold pl-[0.5%]">Latest News</h1>
        <p className="text-xl pl-[0.5%]">
          Sritama Basu is currently offering music lessons. Please visit the
          'Lessons' tab for details.
        </p>
      </div>
    </div>
  );
};

export default Home;
