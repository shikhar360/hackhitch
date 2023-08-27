import React from "react";
import FAQSection from "./Faqsection";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Homepage() {
  return (
    <section className="   ">
      <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen w-full bg-[url('/img/slide.png')]  bg-cover bg-no-repeat  text-white relative ">
        <div className="flex flex-col items-start justify-start md:justify-center p-8  gap-4 bg-black/50  backdrop-blur-sm md:backdrop-blur-none md:bg-transparent w-11/12 mx-auto  mt-16 z-20 pt-16">
          <p className="text-5xl md:text-6xl px-3  font-bold font-mynerve">
            THE ONLY PLACE TO FIND REPUTATED HACKERS IN THE LENS COMMUNITY
          </p>
          <p className=" text-xl font-jose  leading-6 pt-8 md:pt-4 px-3 text-center sm:text-start">
            HackHitch is a newly devloped platform to find the reputated hackers
            in the lens community. Every hacker will have a reputation score in
            the lens community and you can find one according to your need and
            skills.
            
          </p>
         
        </div>
        <img
          src="/img/help.png"
          loading="lazy"
          alt="heroimg"
          className={`my-auto select-none`}
          draggable="false"
        />
      </div>

      <div className="bg-[#05020d]  text-white pb-28 ">
        <p className="text-4xl font-jose w-full text-center pt-10">
          {" "}
          Built using{" "}
        </p>
        <div className={`w-full flex items-center justify-evenly `}>
          <img
            src="/img/rainbow.png"
            loading="lazy"
            alt="heroimg"
            className={`mx-auto mt-10 rounded-2xl h-40 w-44 select-none`}
            draggable="false"
          />
          <img
            src="/img/lens.png"
            loading="lazy"
            alt="heroimg"
            className={`mx-auto mt-10 rounded-2xl h-40 w-44 select-none`}
            draggable="false"
          />
          <img
            src="/img/wagmi.jpeg"
            loading="lazy"
            alt="heroimg"
            className={`mx-auto mt-10 rounded-2xl h-40 w-44 select-none`}
            draggable="false"
          />
        </div>
      </div>

      <div className=" flex  items-center justify-center  w-full sm:p-14 p-8">
        <div className="grid w-[80%] sm:grid-cols-3 grid-cols-2 items-center gap-5 bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 p-6 text-black rounded-lg">
          <div className="flex flex-col  justify-start w-full  hover:shadow-xl shadow-black transition-all duration-150 rounded-xl py-2 px-4 text-center items-center ease-linear p-2  hover:bg-white/20 pb-6">
            <p className="text-lg mb-3"> Reputated Hackers</p>
            <p className="text-xs ">
              Ever got in a condition where you and your partner was still stuck
              on a bug which has a one liner solution ?? with the help of
              HackHitch you can find partner which is reputated and can done the
              work in no time
            </p>
          </div>
          <div className="flex flex-col  justify-start w-full hover:shadow-xl shadow-black transition-all duration-150 rounded-xl py-2 px-4 text-center items-center ease-linear p-2  hover:bg-white/20 pb-6 ">
            <p className="text-lg mb-3"> Easy to setup</p>
            <p className="text-xs ">
              With HackHitch you can easily set up your account within no time
              and can start finding best crime partner.
            </p>
          </div>

          <div className="flex flex-col  justify-start w-full  hover:shadow-xl shadow-black hover:bg-white/20 pb-6 transition-all duration-150 rounded-xl py-2 px-4 text-center items-center ease-linear p-2 ">
            <p className="text-lg mb-3"> Fast Response </p>
            <p className="text-xs ">
              The HackHitch system is built to be fast and efficient which can
              lead to faster results and have great impact on the built which
              can be crucial in certain conditions
            </p>
          </div>

          <div className="flex flex-col  justify-start w-full  hover:shadow-xl shadow-black transition-all duration-150 rounded-xl py-2 px-4 text-center items-center ease-linear p-2  hover:bg-white/20 pb-6 ">
            <p className="text-lg mb-3"> Faster Submissions</p>
            <p className="text-xs ">
              You can also get help from the cretain fellows who can help in
              submitting the projects fast so you dont have to worry about the
              content and other stuffs
            </p>
          </div>

          <div className="flex flex-col  justify-start w-full  hover:shadow-xl shadow-black transition-all duration-150 rounded-xl py-2 px-4 text-center items-center ease-linear p-2   hover:bg-white/20 pb-6">
            <p className="text-lg mb-3"> Backed by Lens</p>
            <p className="text-xs ">
              HackHitch is supported and built using the lens&apos;s api which makes
              it trustful in getting the perfect partner and also a wide variety
              of people to help you when you got stuck in anything.
            </p>
          </div>

          <div className="flex flex-col  justify-start w-full  hover:shadow-xl shadow-black transition-all duration-150 rounded-xl py-2 px-4 text-center items-center ease-linear p-2  hover:bg-white/20 pb-6 ">
            <p className="text-lg mb-3">Huge Community Support</p>
            <p className="text-xs ">
              The infra of HackHitch is built on lens protocol which plays an
              important role in getting the community support and you can get
              out of a difficult situation very fast.
            </p>
          </div>
        </div>
      </div>
     <FAQSection/>
    </section>
  );
}
