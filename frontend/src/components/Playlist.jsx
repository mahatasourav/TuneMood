import React, { useState } from "react";
import { assets, MoodSelectData, newReleaseDummyData } from "../assets/assets";

const Playlist = () => {
  const [mood, setMood] = useState("");
  return (
    <div>
      <div className="  w-[87vw]  flex flex-col gap-6 md:mt-2 pb-4">
        <p className="text-center md:text-left md:text-xl pl-2">
          Select Playlist Accroding to your mood & activity
        </p>

        <div className="grid grid-rows-2 auto-cols-[140px] grid-flow-col gap-4 w-full overflow-x-auto scrollbar-hide">
          {MoodSelectData.map((item) => (
            <div
              key={item.id}
              onClick={() => setMood({ mood: item.mood, emoji: item.emoji })}
              className="flex gap-1 justify-center items-center border border-gray-500 rounded-2xl py-1 hover:bg-gray-500 hover:cursor-pointer duration-300 transition-all"
            >
              <p>{item.emoji}</p>
              <p>{item.mood}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Here playlist will be displayed --> */}
      <div className="  w-[87vw]  flex flex-col gap-6 md:mt-2 pb-4">
        <p className="text-center md:text-left md:text-xl pl-2">
          Songs for Your current Mood : {mood.emoji} {mood.mood}
        </p>
        <div className="grid grid-rows-2 auto-cols-[150px] grid-flow-col  gap-y-8 gap-x-6 w-full overflow-x-auto scrollbar-hide">
          {newReleaseDummyData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-0.5 cursor-pointer rounded-2xl hover:bg-slate-700 pb-2 px-2 pt-1 w-full h-[200px] duration-300 transition-all "
            >
              <img src={item.image} alt="" className="" />
              <p>{item.title}</p>
              <p className="text-xs">{item.artistName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
