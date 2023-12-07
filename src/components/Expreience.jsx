import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import github from "../assets/experience/github.png";
import tailwind from "../assets/experience/tailwind.png";
import flutter from "../assets/experience/flutter.png";
import reactImage from "../assets/experience/react.png";

const Expreience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "react",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: flutter,
      title: "graphql",
      style: "shadow-pink-500",
    },
    {
      id: 7,
      src: github,
      title: "Git",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      id="experience"
      className="bg-gradient-to-b from bg-gray-800 to-black w-full h-screen pt-60"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 pb-2 inline">
            Experience
          </p>
          <p className="pt-6">Teknologi yang saya gunakan.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-8 py-8 px-12 sm:px-8">
          {tech.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title=""}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expreience;
