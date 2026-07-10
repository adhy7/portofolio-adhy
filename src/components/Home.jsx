import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const handleClickScroll = () => {
  const element = document.getElementById("portofolio");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Home = () => {
  return (
    <div
      id="home"
      name="home"
      className="relative w-full bg-[#0b1220] text-white overflow-hidden py-20"
    >
      <div className="pointer-events-none absolute top-1/3 right-0 w-[420px] h-[420px] bg-[#13b9fd]/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#7c5cfc]/20 rounded-full blur-[110px]" />

      <div className="relative max-w-screen-xl  mx-auto flex flex-col items-center md:flex-row md:gap-12">
        <div className="flex flex-col justify-center max-w-2xl">
        <p className="font-['JetBrains_Mono'] text-[#13b9fd] mb-3">
          Hello, I'm
        </p>

        <h1 className="font-['Sora'] font-extrabold text-4xl sm:text-6xl leading-tight text-white">
          Muhammad Adhy Daryawan
        </h1>

        <h2 className="mt-2 font-['Sora'] font-bold text-2xl sm:text-4xl bg-gradient-to-r from-[#13b9fd] to-[#7c5cfc] bg-clip-text text-transparent">
          Software Developer
        </h2>

        <p className="flex items-center mt-4 text-gray-500 font-['JetBrains_Mono']">
          <MdEmail size={32} />
          <span className="ml-2">Adhy48625@gmail.com</span>
        </p>

        <div className="mt-8">
          <button
            onClick={handleClickScroll}
            className="group flex items-center rounded-md bg-gradient-to-r from-[#0468d7] to-[#13b9fd] px-6 py-3 text-white shadow-lg shadow-[#13b9fd]/20 transition-all duration-300 hover:brightness-110"
          >
            View Portfolio
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              <MdOutlineKeyboardArrowRight size={22} />
            </span>
          </button>
        </div>
      </div>

        <div className="mt-10 md:mt-0">
          <div className="w-[220px] sm:w-[420px]">
            <div className="rounded-[1.8rem] overflow-hidden">
              <img src={heroImage} alt="Foto profil Adhy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
