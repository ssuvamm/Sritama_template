import { Link } from "react-router-dom";
import Socials from "../Components/Socials";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div>
        <h1 className="text-7xl font-bold lg:pt-[10vh] pt-[45vh] flex items-center lg:pl-[15%] fixed lg:text-black text-white">
          Sritama Basu
        </h1>
        <div className=" bg-inherit h-screen"></div>
        <div className=" bottom-0 bg-inherit">
          <Socials />
        </div>
        <div className=" bottom-0 py-[1%] bg-[#333333] text-[#CCCCCC]">
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
