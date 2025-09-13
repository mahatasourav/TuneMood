import React from "react";
import { assets } from "../assets/assets";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const user = {
    profile_pic: "",
    userName: "Ana",
    gmail: "ana@gmail.com",
    gender: "female",
  };

  const moodData = [
    {
      mood: "Happy",
      value: 40,
    },
    { mood: "Sad", value: 50 },
    { mood: "Chill", value: 15 },
    { mood: "Energetic", value: 20 },
    { mood: "Motivated", value: 30 },
    { mood: "Positive", value: 25 },
    { mood: "Adventurous", value: 35 },
  ];
  const { token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* User Details Section */}
      <div className="flex flex-col sm:flex-row justify-around items-center gap-8 bg-gradient-to-br from-slate-700/80 via-slate-800/90 to-slate-900/90 backdrop-blur-md p-6 mt-6 sm:p-10 rounded-2xl shadow-lg  max-w-5xl mx-auto w-full">
        {/* Profile Pic and Name */}
        <div className="flex flex-col items-center  flex-1">
          <img
            src={assets.user_profile}
            alt="Profile Pic"
            className="w-30 h-30 sm:w-32 sm:h-32 rounded-full ring-4 ring-blue-500/40 shadow-lg"
          />
          <p className="font-bold text-lg sm:text-xl text-white mt-2 ">
            {user.userName}
          </p>
        </div>

        {/* User Details */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1 space-y-2">
          <p className="font-medium text-gray-200 text-base sm:text-lg">
            {" "}
            <span className=" text-gray-200 font-bold">Gmail:</span>{" "}
            {user.gmail}
          </p>
          <p className="font-medium text-gray-200 text-base sm:text-lg">
            <span className=" text-gray-200 font-bold">Gender:</span>{" "}
            {user.gender}
          </p>
        </div>

        {/* Action Button */}
        <div className="flex flex-col gap-3 w-full sm:w-auto flex-1 items-center ">
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-700 px-6 py-2 text-white rounded-md ">
            <img src={assets.edit_icon} alt="" className="w-5 h-4" />
            Edit
          </button>

          <button
            onClick={logout}
            className="bg-red-700 px-6 py-2 rounded-md hover:bg-red-500"
          >
            Logout
          </button>
        </div>
      </div>

      {/* User Mood Insights Section */}
      <div className="bg-gradient-to-br from-slate-800/90 via-slate-900 to-black shadow-xl shadow-black/30 p-6 rounded-2xl  mt-6 w-full max-w-5xl mx-auto ">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center tracking-wide">
          Your Mood Insights
        </h2>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={moodData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            barCategoryGap={moodData.length < 8 ? "40%" : "20%"}
          >
            {/* Gradient */}
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.7} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="mood"
              tick={{ fill: "white", fontSize: 12 }}
              interval={0}
              minTickGap={10}
              angle={-25}
              textAnchor="end"
              height={60}
            />
            <YAxis tick={{ fill: "white", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #3B82F6",
                borderRadius: "0.75rem",
                color: "#fff",
                fontWeight: "500",
              }}
            />
            <Bar
              dataKey="value"
              fill="url(#barGradient)"
              radius={[8, 8, 0, 0]}
              barSize={
                moodData.length < 6 ? 50 : moodData.length < 10 ? 35 : 20
              }
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserProfile;
