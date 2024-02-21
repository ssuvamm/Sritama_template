import { Link } from "react-router-dom";
import Socials from "../Components/Socials";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ y: "50%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div>
        <div className="h-screen w-screen md:bg-[url('/2up.jpg')] bg-[url('/2.jpg')] bg-center md:bg-right-top bg-fixed  md:bg-cover ">
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
    </motion.div>
  );
};

export default Home;
