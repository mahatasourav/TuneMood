import React from "react";
import { assets, newReleaseDummyData } from "../assets/assets";

const NewRelease = () => {
  return (
    <div className="flex flex-col w-auto">
      <p className="mb-5 font-bold text-lg">New Releases</p>
      <div className="flex gap-6 overflow-hidden ">
        {newReleaseDummyData.map((item) => (
          <div key={item.id} className="flex flex-col ">
            <img src={item.image} alt="music-image" className="h-20 w-20" />
            <p className="mt-2 text-gray-300 text-sm font-semibold">
              {item.title}
            </p>
            <p className="text-xs text-gray-500">{item.artistName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
