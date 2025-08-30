import React from "react";
import { assets, topChartDummyData } from "../assets/assets";
import { IoHeartCircleOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:pr-6 lg:pr-16 ">
      {/*Left section */}
      <div className="bg-[#609EAF] bg-opacity-85 flex md:mr-5 flex-row justify-center items-center rounded-[20px] md:rounded-[32px]   relative w-[80vw] h-[250px] md:w-[40vw] lg:w-[50vw] md:h-[300px] lg:h-full">
        <div className="  flex justify-between z-40 absolute left-0 top-0 w-full h-full">
          <div className=" text-2xl md:text-xl flex flex-col gap-6 justify-center pl-8">
            <p className="text-gray-300 hidden md:flex  ">Curated Playlist</p>
            <p className="text-xl font-bold flex ">
              Find the Perfect Playlist for your Vibe
            </p>
            <p className="hidden md:flex">
              Tell us your mood and activity- <br />
              we'll curate music just for you.
            </p>
            <p
              className="
             gap-1 items-start md:items-center flex flex-col md:flex-row justify-center md:justify-start "
            >
              {" "}
              <img src={assets.likesBy} alt="" />
              <p className="flex items-center gap-1">
                {" "}
                <IoHeartCircleOutline />
                <span className="text-xs text-gray-200">33k Likes</span>
              </p>
            </p>
          </div>

          {/* Hero image positioned on top */}
          <img
            src={assets.heroImg}
            alt="hero"
            className="flex md:hidden lg:flex w-[200px] md:w-[250px] lg:w-[300px] object-contain  "
          />
        </div>
        <img
          src={assets.vector}
          alt="hero"
          className=" hidden lg:flex  object-scale-down absolute top-0 right-8 max-h-[300px] overflow-hidden  "
        />
      </div>

      {/*Right Section*/}
      <div className="flex flex-col justify-center  w-[80vw] h-[350px] md:w-[40vw] md:h-[300px] lg:w-[30vw] ">
        <p className="text-xl font-semibold text-center md:text-start">
          Top Charts
        </p>
        <div className="flex flex-col gap-3 py-5 w-full">
          {/*Top Chart Dummy Data */}
          {topChartDummyData.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center justify-between bg-slate-600 px-3 py-2 rounded-lg"
            >
              {/* Left part(image & text) */}
              <div className="flex flex-row items-center gap-3 ">
                <img
                  src={item.image}
                  alt="Top Chart1"
                  className="h-12 w-12 rounded-md"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold">{item.title}</p>
                  <p className=" text-gray-400 text-xs">{item.artistName}</p>
                  <p className="text-xs">{item.time}</p>
                </div>
              </div>

              <IoHeartCircleOutline className="text-2xl text-white cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
