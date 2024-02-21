import React from "react";
import { motion } from "framer-motion";

const Videos = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className=" w-screen md:bg-[url('/2up.jpg')] bg-[url('/2.jpg')] bg-center md:bg-right-top bg-fixed md:bg-cover ">
        <div className="md:hidden flex flex-grow h-[60vh] w-screen"></div>
        <div className="flex flex-grow justify-center items-end lg:h-[140vh] md:h-[120vh] h-screen">
          <div className="bg-black text-[#a99a66] py-[2%] px-[0.8%] absolute ">
            <h1 className="text-2xl font-bold"> Videos</h1>
            <div className="flex justify-evenly flex-grow w-screen flex-wrap">
              <div className="py-[1.5%]">
                <iframe src="https://www.youtube.com/embed/W-xfKXI225w?si=Wq0giPCYVTN1kUr0"></iframe>
              </div>
              <div className="py-[1.5%]">
                <iframe src="https://www.youtube.com/embed/RKG8LmzC3Tk?si=x_W1FSkaNxU8gBDu"></iframe>
              </div>
              <div className="py-[1.5%]">
                <iframe src="https://www.youtube.com/embed/nWuaWCYV48M?si=duus4z0R3s6fx8RR"></iframe>
              </div>
            </div>
            <div className="flex justify-evenly flex-grow w-screen flex-wrap">
              <div className="py-[1.5%]">
                <iframe src="https://www.youtube.com/embed/T6agE9zhG0g?si=HFgXT76GjfxheG1b"></iframe>
              </div>
              <div className="py-[1.5%]">
                <iframe src="https://www.youtube.com/embed/yTFGV_03h64?si=u2GQISEaaVYzN1wR"></iframe>
              </div>
              <div className="py-[1.5%]">
                <iframe src="https://www.youtube.com/embed/-k91_M_pz9E?si=xbZx6GAJuBu_eNSF"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Videos;
