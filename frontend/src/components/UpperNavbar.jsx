import React from "react";
import { assets } from "../assets/assets";

const UpperNavbar = () => {
  return (
    <div className="flex flex-row-reverse md:flex-row justify-between items-center  px-6  mt-5 mb-5 max-h-[30px]">
      {/* Search Section  */}
      <div className="flex relative ">
        <div className="relative w-full max-w-sm mx-auto">
          {/* Input field */}
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-full text-left focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-black "
          />
          {/* Search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>
        </div>

        {/* <button className="text-gray-300">Search</button> */}
      </div>

      <div className="flex items-center gap-2">
        <img src={assets.logo} alt="logo" className="h-8 md:h-6 w-auto" />
        <img
          src={assets.TuneMood}
          alt="TuneMood Logo"
          className="h-5 w-auto hidden md:flex"
        />
      </div>
    </div>
  );
};

export default UpperNavbar;
