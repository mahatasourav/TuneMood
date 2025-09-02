import React from "react";
import { assets, newReleaseDummyData } from "../assets/assets";

const NewRelease = () => {
  return (
    <div className="flex flex-col w-auto pl-3 md:pl-0">
      <p className="mb-5 font-bold text-lg">New Releases</p>
      <div className="  w-[87vw]  flex flex-col gap-6 md:mt-2 pb-4">
        <div className="grid grid-rows-1 auto-cols-[150px] grid-flow-col  gap-y-8 gap-x-6 w-full overflow-x-auto scrollbar-hide">
          {newReleaseDummyData.slice(4, 13).map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-0.5 cursor-pointer rounded-2xl hover:bg-slate-700 pb-2 px-2 pt-1.5 w-full h-[200px] duration-300 transition-all "
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

export default NewRelease;
