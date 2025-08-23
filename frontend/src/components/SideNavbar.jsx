import React from "react";
import home from "../assets/sidenavbar_assets/home.png";
import menuMobile from "../assets/sidenavbar_assets/menuMobile.png";
import playlist from "../assets/sidenavbar_assets/playlist.png";
import profile from "../assets/sidenavbar_assets/profile.png";
import { useNavigate, NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { BiSolidPlaylist } from "react-icons/bi";
import { TbLogin } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
const SideNavbar = () => {
  return (
    <div className="flex flex-col mt-32 items-center ml-3">
      <div className="flex flex-col gap-8 px-4 justify-center items-center ">
        <NavLink to={"/"}>
          <IoMdHome className="size-6" />
        </NavLink>

        {/* Favourite Playlist */}
        <NavLink to={"/favourite-playlist"}>
          <BiSolidPlaylist className="size-6" />
        </NavLink>

        {/* User-Profile */}
        <NavLink to={"/user-profile"}>
          <TbLogin className="size-6" />
        </NavLink>
      </div>
    </div>
  );
};

export default SideNavbar;
