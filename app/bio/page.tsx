'use client'
import { motion } from "framer-motion";

const Bio = () => {
    return (
      <motion.div
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div>
          <div className=" md:h-[30vh] h-[55vh] "></div>
          <div className="bg-inherit  py-[2%] px-[0.8%] ">
            <h1 className="text-4xl font-bold px-[2%] pb-[2%] text-white">Bio</h1>
            <div className="py-[2%] px-[2%] bg-[#222222] bg-opacity-60 md:w-1/2 text-justify text-[#F6C90E]">
              <p className="">
                Sritama was a junior artist for 10 years at All India Radio.
                During her tenure, she engaged in various activities, including
                recitation and anchoring programs such as &apos;Sishu Mahal,&apos; &apos;Chhutir
                Ghanta,&apos; and &apos;Golpo Dadur Ashor.&apos; Additionally, she was involved
                in reading the news.
              </p>
              <p>
                Her training in vocal music commenced at the age of 12. Sritama
                learned Dhrupad at Dagar Ashram from Aloka Nandi, one of the Nandi
                sisters and a disciple of Ustad Moinuddin Dagar. Subsequently, she
                delved into Khayal under the guidance of Vidushi Suranjana Bose.
                Bose is a disciple of the late Meera Bandopadhyay, Prasun
                Bandopadhyay, and Padmabibhushan late Girija Devi. Sritama also
                got the guidance of Srimati Lopamudra Mitra for some years.
              </p>
            </div>
            <div className="flex justify-end py-[1%] my-[1%]">
              <div className="py-[2%] px-[2%] bg-[#222222] bg-opacity-60 md:w-1/2 text-justify text-[#F6C90E]">
                <p>
                  Having performed in various musical concerts in Kolkata, Sritama
                  and her friend Pratyaya Raha achieved success with their joint
                  production, &apos;Eita Tomar Gaan,&apos; which garnered acclaim for three
                  consecutive years. In 2021, Sritama recorded her first original
                  song, followed by a second recording in 2022. Despite currently
                  residing in the US, she remains actively involved in various
                  cultural activities there. Sritama&apos;s participation in Bangamela
                  2023 at Bay Area, California, is noteworthy.
                </p>
                <p>
                  As a versatile singer and performer, Sritama is equally
                  comfortable in various genres, including Contemporary, Tagore,
                  and folk songs. Beyond music, she is also engaged in recitation
                  and serves as a host/anchor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default Bio;