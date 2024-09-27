
import { motion } from "framer-motion";

const ImageGallery = () => {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="flex h-[70vh]  lg:hidden "></div>
      <div className="hidden h-[85vh] lg:flex "></div>
      <div className="flex flex-grow items-end justify-center">
        <div className="bg-[#333333] px-[0.8%] py-[2%] text-[#CCCCCC] md:rounded-lg ">
          <h1 className="text-2xl font-bold"> Image Gallery</h1>
          <div className="flex flex-grow flex-col justify-evenly md:w-[90vw] md:flex-row">
            <div className="flex justify-center py-[1.5%] md:w-1/3">
              <img className="aspect-auto  px-3 " src="/3.jpg" alt="" />
            </div>
            <div className="px-[1%] py-[1.5%] md:w-2/3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis cum reiciendis excepturi quisquam veniam illo. Itaque,
                molestiae vero ducimus nisi in iure quasi, error esse fugit
                adipisci culpa delectus voluptates.
              </p>
            </div>
          </div>
          <div className="flex flex-grow flex-col justify-evenly md:w-[90vw] md:flex-row-reverse">
            <div className="flex justify-center py-[1.5%] md:w-1/3">
              <img className="aspect-auto px-3 " src="/4.jpg" alt="" />
            </div>
            <div className="px-[1%] py-[1.5%] md:w-2/3">
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
