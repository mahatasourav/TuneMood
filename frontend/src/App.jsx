import React from "react";
import SideNavbar from "./components/SideNavbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavouritePlaylist from "./pages/FavouritePlaylist";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import UpperNavbar from "./components/UpperNavbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#1D2123] min-h-screen text-white flex md:gap-10 flex-row-reverse md:flex-row">
      <div className="fixed  top-3  z-50 ">
        <SideNavbar />
      </div>

      <div className="flex flex-col md:ml-28  ">
        <div className="pl-8 sticky top-0 bg-[#1D2123] z-40 ">
          <UpperNavbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite-playlist" element={<FavouritePlaylist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
