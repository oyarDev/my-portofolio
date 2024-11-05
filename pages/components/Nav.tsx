import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface Props {
  openNav: () => void; // The prop passed to open the mobile navigation
}

const Nav = ({ openNav }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-[10000] w-full transition-all duration-500 ease-in-out backdrop-filter ${
        isScrolled
          ? "backdrop-blur-md bg-[#141c27cc] shadow-lg h-[8vh]" // Blur effect, semi-transparent with shadow
          : "bg-transparent h-[12vh]"
      }`}
    >
      <div className="flex items-center justify-between w-[80%] mx-auto h-full transition-all duration-500 ease-in-out">
        {/* Logo with scale and fade animation */}
        <h1
          className={`flex-[0.6] cursor-pointer text-[25px] text-white font-bold transform transition-all duration-500 ${
            isScrolled ? "scale-90 opacity-80" : "scale-100 opacity-100"
          }`}
        >
          WEB<span className="text-yellow-300">DEV</span>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {["Home", "SERVICE", "ABOUT", "PROJECT", "BLOG", "CONTACT"].map(
            (item, index) => (
              <div
                key={index}
                className={`nav-link text-white font-medium transition-all duration-500 transform ${
                  isScrolled ? "opacity-80 scale-95" : "opacity-100 scale-100"
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* Mobile menu icon */}
        <div onClick={openNav} className="md:hidden">
          <Bars3Icon className="w-[2rem] h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
