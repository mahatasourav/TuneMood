import React from "react";
import home from "../assets/sidenavbar_assets/home.png";
import menuMobile from "../assets/sidenavbar_assets/menuMobile.png";
import playlist from "../assets/sidenavbar_assets/playlist.png";
import profile from "../assets/sidenavbar_assets/profile.png";
import { useNavigate, NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="flex flex-col mt-28 items-center">
      <div className="flex flex-col gap-8 px-4 justify-center items-center ">
        <NavLink to={"/"}>
          <img src={home} alt="" srcset="" />
        </NavLink>

        {/* Favourite Playlist */}
        <NavLink to={"/favourite-playlist"}>
          <img src={playlist} alt="" srcset="" />
        </NavLink>

        {/* User-Profile */}
        <NavLink to={"/user-profile"}>
          <img src={profile} alt="" srcset="" />
        </NavLink>
      </div>
    </div>
  );
};

export default SideNavbar;
