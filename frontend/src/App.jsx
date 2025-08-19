import React from "react";
import SideNavbar from "./components/SideNavbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavouritePlaylist from "./pages/FavouritePlaylist";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <div className="bg-[#1D2123] min-h-screen text-white flex gap-10">
      <SideNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite-playlist" element={<FavouritePlaylist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;
