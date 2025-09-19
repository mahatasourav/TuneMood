import React, { useState } from "react";
// import home from "../assets/sidenavbar_assets/home.png";
// import menuMobile from "../assets/sidenavbar_assets/menuMobile.png";
// import playlist from "../assets/sidenavbar_assets/playlist.png";
// import profile from "../assets/sidenavbar_assets/profile.png";
import { useNavigate, NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { BiSolidPlaylist } from "react-icons/bi";
import { TbLogin } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const SideNavbar = () => {
  const [viewList, setViewList] = useState(false);

  const { token, setToken, userProfileData } = useContext(AppContext);
  return (
    userProfileData && (
      <div>
        <div className=" hidden md:flex flex-col pt-32 items-center ml-2 min-w-16 -z-10  ">
          <div className=" flex flex-col gap-8 px-4 justify-center items-center ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 transform scale-75 transition-all duration-200"
                  : "text-white hover:text-yellow-300 transform scale-100 transition-all duration-200"
              }
            >
              <IoMdHome className="text-3xl" />
            </NavLink>

            {/* Favourite Playlist */}
            <NavLink
              to={"/favourite-playlist"}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 transform scale-75 transition-all duration-200"
                  : "text-white hover:text-yellow-300 transform scale-100 transition-all duration-200"
              }
            >
              <BiSolidPlaylist className="text-3xl" />
            </NavLink>

            {/* User-Profile */}
            {!token ? (
              <NavLink
                to={"/auth"}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 transform scale-75 transition-all duration-200"
                    : "text-white hover:text-yellow-300 transform scale-100 transition-all duration-200"
                }
              >
                <TbLogin className="text-3xl" />
              </NavLink>
            ) : (
              <NavLink
                to={"/user-profile"}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 transform scale-75 transition-all duration-200"
                    : "text-white hover:text-yellow-300 transform scale-100 transition-all duration-200"
                }
              >
                <img src={userProfileData.image} alt="" srcset="" />
                <FaUser className="text-3xl" />
              </NavLink>
            )}
          </div>
        </div>

        {/* Mobile view --> */}

        <div className="md:hidden  ">
          {viewList ? (
            <button
              className="flex justify-center text-center  ml-8 mt-10  "
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
            <div>
              <p className="mt-[-140px]"></p>
              <div className="text-white  w-[100vw] flex flex-col h-[120vh] justify-start items-center pt-60 gap-8  transition-all duration-300 ease-in-out bg-[#1D2123] ">
                <NavLink
                  to={"/"}
                  className="flex gap-2 hover:text-yellow-300 "
                  onClick={() => setViewList(false)}
                >
                  <IoMdHome className="size-10" />{" "}
                  <p className="text-3xl">Home</p>
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
                {!token ? (
                  <NavLink
                    to={"/auth"}
                    className="flex gap-2 hover:text-yellow-300"
                    onClick={() => setViewList(false)}
                  >
                    <TbLogin className="size-10" />{" "}
                    <p className="text-3xl">Login</p>
                  </NavLink>
                ) : (
                  <NavLink
                    to={"/user-profile"}
                    className="flex gap-2 hover:text-yellow-300"
                    onClick={() => setViewList(false)}
                  >
                    <FaUser className="size-10" />{" "}
                    <p className="text-3xl">UserProfile</p>
                  </NavLink>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default SideNavbar;
