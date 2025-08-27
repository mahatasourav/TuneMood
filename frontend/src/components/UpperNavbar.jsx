import React from "react";
import { assets } from "../assets/assets";

const UpperNavbar = () => {
  return (
    <div className="flex  justify-between items-center  w-full px-5  mt-5 mb-5">
      {/* Search Section  */}
      <div className="flex relative w-48 md:w-64">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-full center bg-transparent border border-gray-200 text-center"
        />
        <button className="text-gray-300">Search</button>
      </div>
      <div className="flex items-center">
        <img src={assets.logo} alt="logo" className="h-5 w-auto" />
        <img src={assets.TuneMood} alt="TuneMood Logo" className="h-5 w-auto" />
      </div>
    </div>
  );
};

export default UpperNavbar;
