import React from "react";
import { motion } from "framer-motion";

const ImageGallery = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="  h-screen w-screen md:bg-[url('/2up.jpg')] bg-[url('/2.jpg')] bg-center md:bg-right-top bg-fixed md:bg-cover ">
        <div className="flex flex-grow justify-center items-end h-screen">
          <div className="bg-black text-[#a99a66] py-[2%] px-[0.8%] absolute ">
            <h1 className="text-2xl font-bold">Lessons</h1>
            <p className="py-[10%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati accusantium culpa officia atque qui cupiditate quasi
              nesciunt fugiat repudiandae itaque dolore sequi sapiente
              accusamus, facilis aspernatur rerum voluptatibus ad pariatur!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, error repellat adipisci cumque voluptas corrupti
              dolores velit fugiat vel soluta officiis qui laborum! Ea est
              veniam voluptas illo minus sapiente. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quasi ullam animi non. Laudantium ut
              quisquam obcaecati aut, vero ipsa quis laborum dicta nostrum,
              dolor nobis veniam, doloribus minus quibusdam! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Illum minus provident quo
              ullam natus animi modi perferendis iure sit esse itaque ad
              facilis, tenetur deserunt dolores architecto fuga reiciendis et.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              debitis? Soluta magni unde doloribus? Aut sit quae laborum debitis
              nam vitae beatae ipsa reprehenderit modi dolorum, ex sed inventore
              aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              At deserunt blanditiis dicta distinctio officia. Natus, odio
              fugiat numquam deserunt quod iure earum, pariatur amet voluptates
              aliquam facilis sint nulla reprehenderit!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageGallery;
