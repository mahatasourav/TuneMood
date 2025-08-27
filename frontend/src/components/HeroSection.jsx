import React from "react";
import { assets, topChartDummyData } from "../assets/assets";
import { IoHeartCircleOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="flex flex-row justify-between w-full items-start gap-4">
      {/*Left section */}
      <div className="bg-blue-400 bg-opacity-85 flex mr-5 flex-row rounded-3xl">
        <div className="py-10 px-5">
          <p className="text-gray-300">Curated Playlist</p>
          <h1 className="text-3xl font-bold pt-3 pb-5">
            Find the Perfect Playlist for your Vibe
          </h1>
          <p>
            Tell us your mood and activity- we'll curate music just for you.
          </p>
        </div>
        <div>
          <img src={assets.heroImg} alt="" />
        </div>
      </div>

      {/*Right Section*/}
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-semibold">Top Charts</p>
        <div className="flex flex-col gap-2 py-5 w-full">
          {/*Top Chart Dummy Data */}
          {topChartDummyData.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center justify-between bg-slate-600 px-3 py-2 w-[400px] rounded-lg"
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
