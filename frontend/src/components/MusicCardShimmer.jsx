import React from "react";
import "../Style/Shimmer.css";
/* this is Shimmer UI made by me and chatgpt */
const MusicCardShimmer = () => {
  return (
    <div className="flex flex-col justify-between gap-2 rounded-lg p-3 w-full h-[200px] border border-gray-800 bg-[#1b1f21] hover:bg-gray-900/80 transition-all duration-300">
      {/* Album art */}
      <div className="w-full aspect-square max-h-[140px] rounded-lg overflow-hidden">
        <div className="custom-shimmer w-full h-full"></div>
      </div>

      {/* Song info */}
      <div className="flex items-center justify-between w-full mt-auto">
        <div className="flex flex-col gap-2 flex-1 mr-3">
          {/* Song title */}
          <div className="custom-shimmer w-4/5 h-4 rounded-md"></div>
          {/* Artist */}
          <div className="custom-shimmer w-3/5 h-3 rounded-md"></div>
        </div>

        {/* Favorite button */}
        <div className="flex-shrink-0">
          <div className="custom-shimmer w-8 h-8 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MusicCardShimmer;
