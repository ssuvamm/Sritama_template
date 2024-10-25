'use client'
import { motion } from "framer-motion";

const Videos = () => {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div>
        <div className="flex h-[70vh]  lg:hidden "></div>
        <div className="hidden h-[10vh] lg:flex "></div>
        <div className="flex h-screen flex-grow items-end justify-center md:h-[120vh] lg:h-[140vh]">
          <div className="bg-[#333333] px-[0.8%] py-[2%] text-[#CCCCCC] md:rounded-lg  ">
            <h1 className="text-2xl font-bold"> Videos</h1>
            <div className="flex flex-grow flex-wrap justify-evenly md:w-[90vw]">
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
            <div className="flex flex-grow flex-wrap  justify-evenly md:w-[90vw]">
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
