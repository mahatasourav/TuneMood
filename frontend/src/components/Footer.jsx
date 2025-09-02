import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" mt-8 border-t border-gray-800 text-center pl-8 ">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white">TuneMood</h3>
            <p className="text-gray-400 text-sm">
              Find the perfect music for every moment. Let your mood guide your
              musical journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-[#609EAF] cursor-pointer">Home</li>
              <li className="hover:text-[#609EAF] cursor-pointer">Explore</li>
              <li className="hover:text-[#609EAF] cursor-pointer">Playlists</li>
              <li className="hover:text-[#609EAF] cursor-pointer">About Us</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">
              Connect With Us
            </h4>
            <div className="flex gap-4 justify-center">
              <IoLogoGithub className="text-2xl text-gray-400 hover:text-[#609EAF] cursor-pointer" />
              <IoLogoLinkedin className="text-2xl text-gray-400 hover:text-[#609EAF] cursor-pointer" />
              <FaTwitter className="text-2xl text-gray-400 hover:text-[#609EAF] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TuneMood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
