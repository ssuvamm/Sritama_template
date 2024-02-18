import React from "react";

const Videos = () => {
  return (
    <div className="flex flex-col h-[160vh] md:h-[110vh] w-screen bg-[url('/2.jpg')] bg-center md:bg-right-top bg-fixed flex-grow md:bg-cover ">
      <div className="bg-black text-[#a99a66] py-[2%] px-[0.8%] absolute top-[50vh]">
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
  );
};

export default Videos;
