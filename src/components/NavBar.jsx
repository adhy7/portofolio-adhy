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
          // 👇 Will scroll smoothly to the top of the next section
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
          // 👇 Will scroll smoothly to the top of the next section
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
          // 👇 Will scroll smoothly to the top of the next section
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
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
  ];

  return (
    <div className="flex px-4 justify-between items-center w-full h-20 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature">Adhy</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            onClick={link.handleClickScroll}
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link.link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
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
