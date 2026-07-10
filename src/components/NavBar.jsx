import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      handleClickScroll: () => {
        const element = document.getElementById("home");
        if (element) {
          setNav(false);
          element.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    {
      id: 2,
      link: "about",
      handleClickScroll: () => {
        const element = document.getElementById("about");
        if (element) {
          setNav(false);
          element.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    {
      id: 3,
      link: "portofolio",
      handleClickScroll: () => {
        const element = document.getElementById("portofolio");
        if (element) {
          setNav(false);
          element.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    {
      id: 4,
      link: "experience",
      handleClickScroll: () => {
        const element = document.getElementById("experience");
        if (element) {
          setNav(false);
          element.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
  ];

  return (
    <div className="fixed w-full h-20 z-40 px-6 flex justify-between items-center bg-[#0b1220]/70 backdrop-blur-md border-b border-white/5">
      <div>
        <h1 className="font-['JetBrains_Mono'] text-2xl text-white">
          adhy<span className="text-[#13b9fd]">.dev</span>
        </h1>
      </div>

      <ul className="hidden md:flex gap-2">
        {links.map((link) => (
          <li
            onClick={link.handleClickScroll}
            key={link.id}
            className="group relative px-4 py-2 cursor-pointer capitalize text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            {link.link}
            <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left bg-gradient-to-r from-[#13b9fd] to-[#7c5cfc] transition-transform duration-300" />
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 text-gray-300 hover:text-white md:hidden"
        aria-label="Toggle menu" 
      >
        {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center gap-2 fixed top-0 left-0 w-full h-screen bg-[#0b1220]/95 backdrop-blur-md text-gray-200">
          {links.map((link) => (
            <li
              onClick={link.handleClickScroll}
              key={link.id}
              className="px-4 cursor-pointer capitalize py-5 text-3xl font-['Sora'] font-semibold hover:text-[#13b9fd] transition-colors"
            >
              {link.link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
