import React from "react";
import SideNavbar from "./components/SideNavbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavouritePlaylist from "./pages/FavouritePlaylist";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import UpperNavbar from "./components/UpperNavbar";

const App = () => {
  return (
    <div className="bg-[#1D2123] min-h-screen text-white flex md:gap-10 flex-row-reverse md:flex-row">
      <SideNavbar />

      <div className="flex flex-col gap-3">
        <div>
          <UpperNavbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite-playlist" element={<FavouritePlaylist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
