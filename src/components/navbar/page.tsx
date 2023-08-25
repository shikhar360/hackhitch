'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { ConnectKitButton } from "connectkit";
// import { useAccount } from "wagmi";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className=" z-50 w-full bg-transpaent backdrop-blur-md  font-bold   p-0 text-white  text-lg flex items-start justify-between transition-all duration-300 ease-linear fixed top-0 ">
      <div className=" sm:w-72 text-md sm:text-base cursor-pointer flex  items-center mt-3 sm:mt-1.5 px-3 justify-center rounded-md ">
      <Link href={"/"} className={`flex items-center justify-center `}>
           <img src="/img/a.png" alt="logo" className={`w-12`} loading="lazy" />
            <p className=" cursor-pointer transition-all duration-200 ease-linear  bg-transparent  py-1 px-4 rounded-md text-center   ">
            HackHitch
            </p>
          </Link>
      </div>

      <div
        className={`  py-2   flex items-end  justify-end sm:justify-between md:w-full flex-col sm:flex-row `}
      >
        <div
          className=" px-6 flex items-center justify-center cursor-pointer transition-all duration-300 ease-linear p-1 rounded-full sm:hidden "
          onClick={() => setIsActive((prev: boolean) => !prev)}
        >
          {!isActive ? (
            <img
              src="/img/menu.png"
              alt="menu"
              width={"38"}
              className={` duration-100 transition-all ease-linear`}
            />
          ) : (
            <img
              src="/img/close.png"
              alt="menu"
              width={"38"}
              className={` duration-100 transition-all ease-linear`}
            />
          )}
        </div>

        <div
          className={` ${
            isActive
              ? "flex flex-col gap-2 items-center justify-center "
              : " hidden sm:flex sm:items-center sm:justify-end  px-8 gap-2 ml-auto text-xs md:text-sm lg:text-base"
          }`}
        >
          <Link href={"/"}>
            <p className=" cursor-pointer transition-all duration-200 ease-linear  bg-transparent  py-1 px-4 rounded-md text-center   ">
              Home
            </p>
          </Link>


          <Link
            href={{
              pathname: "/hackers",
            }}
          >
            <p className=" cursor-pointer transition-all duration-200 ease-linear  bg-transparent  py-1 px-4 rounded-md text-center   ">
             Find Hacker
            </p>
          </Link>
        </div>

        {/* <div
          className={` ${
            isActive
              ? "flex flex-col gap-2 my-4 "
              : " hidden sm:flex sm:items-center sm:justify-center  gap-2 my-auto md:pr-4 pr-6"
          }`}
        >
          <Link href={"/BuyNFT"}>
            <p className=" cursor-pointer bg-[#c176ff] hover:bg-[#ffad15] text-black transition-all duration-200 ease-linear  bg-transparent  py-1 px-4  rounded-md text-center   ">
              Buy NFT
            </p>
          </Link>

          <ConnectKitButton />
        </div> */}
      </div>
    </nav>
  );
}