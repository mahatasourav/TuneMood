import React, { useState } from "react";
import home from "../assets/sidenavbar_assets/home.png";
import menuMobile from "../assets/sidenavbar_assets/menuMobile.png";
import playlist from "../assets/sidenavbar_assets/playlist.png";
import profile from "../assets/sidenavbar_assets/profile.png";
import { useNavigate, NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { BiSolidPlaylist } from "react-icons/bi";
import { TbLogin } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const SideNavbar = () => {
  const [viewList, setViewList] = useState(false);
  return (
    <div>
      <div className=" hidden md:flex flex-col pt-32 items-center ml-2 min-w-16 -z-10  ">
        <div className=" flex flex-col gap-8 px-4 justify-center items-center ">
          <NavLink to={"/"} className="hover:text-yellow-300">
            <IoMdHome className="size-8" />
          </NavLink>

          {/* Favourite Playlist */}
          <NavLink to={"/favourite-playlist"} className="hover:text-yellow-300">
            <BiSolidPlaylist className="size-8" />
          </NavLink>

          {/* User-Profile */}
          <NavLink to={"/user-profile"} className="hover:text-yellow-300">
            <TbLogin className="size-9" />
          </NavLink>
        </div>
      </div>

      {/* Mobile view --> */}
      <div className="md:hidden ">
        {viewList ? (
          <button
            className="flex justify-center text-center  ml-8 mt-8"
            onClick={() => setViewList(false)}
          >
            <ImCross size={32} />
          </button>
        ) : (
          <button
            onClick={() => setViewList(true)}
            className="flex justify-center mr-3 mt-6  "
          >
            <GiHamburgerMenu size={32} />
          </button>
        )}
        {viewList && (
          <div className="text-white  w-[100vw] flex flex-col min-h-screen justify-start items-center pt-40 gap-8  transition-all duration-300 ease-in-out">
            <NavLink
              to={"/"}
              className="flex gap-2 hover:text-yellow-300"
              onClick={() => setViewList(false)}
            >
              <IoMdHome className="size-10" /> <p className="text-3xl">Home</p>
            </NavLink>

            {/* Favourite Playlist */}
            <NavLink
              to={"/favourite-playlist"}
              className="flex gap-2 hover:text-yellow-300"
              onClick={() => setViewList(false)}
            >
              <BiSolidPlaylist className="size-10" />{" "}
              <p className="text-3xl">PlayList</p>
            </NavLink>

            {/* User-Profile */}
            <NavLink
              to={"/user-profile"}
              className="flex gap-2 hover:text-yellow-300"
              onClick={() => setViewList(false)}
            >
              <TbLogin className="size-10" /> <p className="text-3xl">Login</p>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNavbar;
