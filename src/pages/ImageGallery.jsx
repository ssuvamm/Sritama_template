import React from "react";
import { motion } from "framer-motion";

const ImageGallery = () => {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="lg:hidden flex  h-[70vh] "></div>
      <div className="hidden lg:flex h-[85vh] "></div>
      <div className="flex flex-grow justify-center items-end">
        <div className="bg-[#333333] md:rounded-lg text-[#CCCCCC] py-[2%] px-[0.8%] ">
          <h1 className="text-2xl font-bold"> Image Gallery</h1>
          <div className="flex justify-evenly flex-grow md:w-[90vw] md:flex-row flex-col">
            <div className="py-[1.5%] md:w-1/3 justify-center flex">
              <img className="px-3  aspect-auto " src="/3.jpg" alt="" />
            </div>
            <div className="py-[1.5%] px-[1%] md:w-2/3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis cum reiciendis excepturi quisquam veniam illo. Itaque,
                molestiae vero ducimus nisi in iure quasi, error esse fugit
                adipisci culpa delectus voluptates.
              </p>
            </div>
          </div>
          <div className="flex justify-evenly flex-col md:flex-row-reverse flex-grow md:w-[90vw]">
            <div className="py-[1.5%] md:w-1/3 flex justify-center">
              <img className="px-3 aspect-auto " src="/4.jpg" alt="" />
            </div>
            <div className="py-[1.5%] px-[1%] md:w-2/3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis cum reiciendis excepturi quisquam veniam illo. Itaque,
                molestiae vero ducimus nisi in iure quasi, error esse fugit
                adipisci culpa delectus voluptates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageGallery;
