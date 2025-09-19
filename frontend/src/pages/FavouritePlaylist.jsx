import React, { useEffect, useRef, useState } from "react";
import { assets, songs } from "../assets/assets";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const FavouritePlaylist = () => {
  const { backendurl, token } = useContext(AppContext);
  const [favourites, setFavourites] = useState([]);

  const [openMenu, setOpenMenu] = useState(null);
  const [loading, setLoading] = useState(false);
  const menuRef = useRef(null);

  // Fetch favourites from backend
  const fetchFavourites = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        backendurl + "/api/user/get-favourites",
        {
          headers: { token },
        }
      );
      if (data) {
        setFavourites(data);
        console.log("All favourite data", data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load favourites");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchFavourites();
    }
  }, [token]);

  // CLose dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Upper Part */}
      <div
        className="flex flex-col sm:flex-row bg-gradient-to-b from-blue-900 via-purple-800 to-transparent items-center justify-around gap-6 p-6 mt-6   
"
      >
        {/* Left Portion */}
        <div className="flex flex-col  space-y-2 text-center sm:text-left mx-auto sm:mx-0">
          <h1 className="text-3xl font-bold">Tune Into Your Mood</h1>
          <p className="text-lg font-light opacity-90">
            From calm to crazy - your favourites have it all
          </p>
          <h3 className="text-md font-medium">Liked Songs: 8</h3>
          <button className="bg-purple-500 w-fit px-4 py-2 rounded-full hover:bg-purple-600 transition-all mx-auto sm:mx-0">
            Play Songs
          </button>
        </div>

        {/* Right Portion */}
        <div className="flex justify-center ">
          <img
            src={assets.favouriteSongs_icon}
            alt=""
            className="hidden sm:block sm:w-48 h-48 object-contain"
          />
        </div>
      </div>

      {/* Lower Part -- Song Lists */}
      <div className="bg-gradient-to-b from-transparent to-neutral-900 mt-6 p-4 ">
        <table className="table-fixed min-w-full text-left">
          <thead className="hidden sm:table-header-group sm:bg-transparent bg-slate-800 font-bold border-b border-gray-600">
            <tr>
              <th className="px-4 py-3 w-12">#</th>
              <th className="px-4 py-3 w-64">Title</th>
              <th className="px-4 py-3 w-45 ">Artist</th>
              <th className="px-4 py-3 w-40 ">Album</th>
              <th className="px-4 py-3 w-24 ">Duration</th>
              <th className="px-4 py-3 w-24 ">Mood</th>
              <th className="px-4 py-3 w-28 ">Added On</th>
            </tr>
          </thead>

          <tbody>
            {console.log("Favourites display", favourites)}
            {favourites.map((fav, index) => (
              <tr
                key={fav._id}
                className="hover:bg-slate-700 transition-colors relative"
              >
                <td className="px-4 py-2 ">{index + 1}</td>
                {/* Title(image + name) */}
                <td className="px-4 py-2 flex items-center gap-3">
                  {" "}
                  {/* <img
                    src={song.image}
                    alt="song-image"
                    className="w-10 h-10 rounded-md object-cover"
                  /> */}
                  <div className="flex flex-col">
                    <span className="text-white">{fav.title}</span>
                    {/* show artist below title only on mobile */}
                    <span className="text-xs text-gray-400 sm:hidden">
                      {fav.artist}
                    </span>
                    <span className="text-sm font-light opacity-75 sm:hidden">
                      duration
                    </span>
                  </div>
                </td>

                {/* Artist - hidden on mobile because already displayed */}
                <td className="px-4 py-2 hidden sm:table-cell">{fav.artist}</td>

                {/* Album, Mood, AddedOn -- hidden on mobile */}
                <td className="px-4 py-2 hidden sm:table-cell">album</td>
                <td className="px-4 py-2 hidden sm:table-cell">duration</td>
                <td className="px-4 py-2 hidden sm:table-cell">{fav.mood}</td>
                <td className="px-4 py-2 hidden sm:table-cell">
                  {fav.addedAt}
                </td>

                {/* Last Column: Delete or 3-dot Menu */}
                <td className="px-4 py-2 text-right">
                  {/* Desktop Delete Button */}
                  <button onClick={() => handleDelete(fav._id)}>
                    <RiDeleteBin6Line className="hidden sm:inline-block hover:text-red-500" />
                  </button>

                  {/* Mobile 3-dot Menu */}
                  <div className="relative sm:hidden" ref={menuRef}>
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === fav._id ? null : fav._id)
                      }
                      className="p-2 rounded-full hover:bg-slate-600"
                    >
                      <HiDotsVertical />
                    </button>

                    {/* Dropdown Menu */}
                    {openMenu === fav._id && (
                      <div className="absolute right-0 mt-2 bg-slate-800 rounded-lg shadow-lg p-3 text-sm w-40 z-10 text-left">
                        <p className="text-gray-300 mb-1">
                          <span className="font-bold">Album:</span> album
                        </p>
                        <p className="text-gray-300 mb-1">
                          <span className="font-bold">Mood:</span> {fav.mood}
                        </p>
                        <p className="text-gray-300 mb-2">
                          <span className="font-bold">Added:</span>{" "}
                          {fav.addedAt}
                        </p>
                        <button
                          onClick={() => console.log("delete", fav.title)}
                          className="flex items-center gap-2 text-red-400 hover:text-red-500"
                        >
                          <RiDeleteBin6Line /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavouritePlaylist;
