import React from "react";

export default function Homepage() {

  
  return (
    <section className="   ">
      <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen w-full bg-[url('/img/slide.png')]  bg-cover bg-no-repeat  text-white relative ">
        <div className="flex flex-col items-start justify-start md:justify-center p-8  gap-4 bg-black/50  backdrop-blur-sm md:backdrop-blur-none md:bg-transparent w-11/12 mx-auto  mt-16 z-20 pt-16">
          <p className="text-5xl md:text-6xl px-3  font-bold font-mynerve">
            THE ONLY PLACE TO FIND REPUTATED HACKERS IN THE LENS COMMUNITY
          </p>
          <p className=" text-xl font-jose  leading-6 pt-8 md:pt-4 px-3 text-center sm:text-start">
           HackHitch is a newly devloped platform to find the reputated hackers in the lens community.
           Every hacker will have a reputation score in the lens community and you can find one according to your need and skills. 
          </p>
        </div>
        <img src="/img/help.png" loading="lazy" alt="heroimg" className={`my-auto select-none`} draggable="false" />
      </div>
    

        <div className="bg-[#05020d] min-h-screen text-white pb-28 ">
        <p className="text-4xl font-jose w-full text-center pt-10"> Built using </p>
        <img src="/img/lens.png" loading="lazy" alt="heroimg" className={`mx-auto mt-10 rounded-2xl w-40 select-none`} draggable="false" />
          </div>

    </section>
  );
}