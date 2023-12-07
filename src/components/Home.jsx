import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      id="home"
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl pb-4 sm:text-7xl font-bold text-white">
            I'm Front End Developer
          </h2>
          <h3 className="text-base pb-4 font-bold text-white">
            Adhy48625@gmail.com
          </h3>
          <div>
            <button
              onClick={handleClickScroll}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portofolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

const handleClickScroll = () => {
  const element = document.getElementById("portofolio");
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};
export default Home;
