import React from "react";

const Bio = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-[url('/2.jpg')] bg-center md:bg-right-top bg-fixed flex-grow md:bg-cover ">
      <div></div>
      <div className="bg-inherit  py-[2%] px-[0.8%] absolute top-[50vh]">
        <h1 className="text-2xl font-bold px-[2%] pb-[2%]">Bio</h1>
        <div className="flex text-xl">
          <div className="px-[2%]">
            <p>
              Sritama was a junior artist for 10 years at All India Radio.
              During her tenure, she engaged in various activities, including
              recitation and anchoring programs such as 'Sishu Mahal,' 'Chhutir
              Ghanta,' and 'Golpo Dadur Ashor.' Additionally, she was involved
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
          <div className="pt-[15%]">
            <p>
              Having performed in various musical concerts in Kolkata, Sritama
              and her friend Pratyaya Raha achieved success with their joint
              production, 'Eita Tomar Gaan,' which garnered acclaim for three
              consecutive years. In 2021, Sritama recorded her first original
              song, followed by a second recording in 2022. Despite currently
              residing in the US, she remains actively involved in various
              cultural activities there. Sritama's participation in Bangamela
              2023 at Bay Area, California, is noteworthy.
            </p>
            <p>
              As a versatile singer and performer, Sritama is equally
              comfortable in various genres, including Contemporary, Tagore, and
              folk songs. Beyond music, she is also engaged in recitation and
              serves as a host/anchor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;