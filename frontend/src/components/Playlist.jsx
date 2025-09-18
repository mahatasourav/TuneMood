import React, { useContext, useEffect, useState } from "react";
import { assets, MoodSelectData, newReleaseDummyData } from "../assets/assets";
import { MdFavoriteBorder } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { data } from "react-router-dom";
import generalMusic from "../assets/generalMusic.png";

const Playlist = () => {
  const [mood, setMood] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [songs, setSongs] = useState([]); // to store recommended songs
  const { backendurl, token, setToken } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const handleMoodClick = async (item) => {
    setMood({ mood: item.mood, emoji: item.emoji });
    setLoading(true);
    try {
      const { data } = await axios.post(backendurl + "/api/ml/predict", {
        mood: item.mood,
      });

      if (data && data.recommendations) {
        setSongs(data.recommendations); // ✅ extract the array from recommendations
        console.log("Recommended Songs:", data.recommendations);
      }
    } catch (error) {
      console.log("ML API Error:", error);
      toast.error(error.message);
    } finally {
      setLoading(false); // <- here, in the finally block
    }
  };

  useEffect(() => {
    const defaultMood = MoodSelectData[0]; // pick the first mood from your MoodSelectData array
    handleMoodClick(defaultMood); // call your ML API with this mood
  }, []);

  return (
    <div className="flex flex-col gap-8 pl-3 md:pl-0">
      <div className="  w-[87vw]  flex flex-col gap-6 md:mt-2 pb-4">
        <p className="text-center md:text-left md:text-xl pl-2">
          Select Playlist Accroding to your mood & activity
        </p>

        <div className="grid grid-rows-2 auto-cols-[140px] grid-flow-col gap-4 w-full overflow-x-auto scrollbar-hide">
          {MoodSelectData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMoodClick(item)}
              className={`flex gap-1 justify-center items-center border border-gray-700 rounded-2xl py-1 hover:bg-gray-500 hover:cursor-pointer duration-300 transition-all ${
                mood.mood === item.mood ? "bg-gray-500 " : ""
              }`}
            >
              <p>{item.emoji}</p>
              <p>{item.mood}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Here playlist will be displayed --> */}
      <div className="  w-[87vw]  flex flex-col gap-6 md:mt-2 pb-4">
        <p className="text-center md:text-left md:text-xl pl-2">
          Songs for Your current Mood : {mood.emoji} {mood.mood}
        </p>
        <div className="grid grid-rows-2 auto-cols-[150px] grid-flow-col gap-y-8 gap-x-6 w-full overflow-x-auto scrollbar-hide">
          {loading ? (
            <p className="text-center col-span-full text-gray-500">
              Loading songs...
            </p>
          ) : songs.length > 0 ? (
            songs.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-0.5 cursor-pointer rounded-2xl hover:bg-slate-700 pb-4 px-2 pt-1.5 w-full h-[200px] duration-300 transition-all border border-gray-800"
              >
                <img src={generalMusic} alt="" className="h-32 w-30" />
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm">{item.song}</p>
                    <p className="text-xs">{item.artist}</p>
                  </div>
                  <MdFavoriteBorder className="h-6 w-8" />
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              Click a mood above to see recommended songs
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
