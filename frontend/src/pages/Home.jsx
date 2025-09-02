import React from "react";

import HeroSection from "../components/HeroSection";
import Playlist from "../components/Playlist";
import NewRelease from "../components/NewReleases";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-0 md:p-2 pl-2 w-full z-0">
      <HeroSection />
      <Playlist />
      <NewRelease />
    </div>
  );
};

export default Home;
