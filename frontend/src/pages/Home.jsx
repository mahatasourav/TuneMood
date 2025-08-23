import React from "react";
import UpperNavbar from "../components/UpperNavbar";
import HeroSection from "../components/HeroSection";
import Playlist from "../components/Playlist";

const Home = () => {
  return (
    <div className="flex flex-col gap-6 p-2">
      <UpperNavbar />
      <HeroSection />
      <Playlist />
    </div>
  );
};

export default Home;
