import React from "react";

const About = () => {
  return (
    <div id="about" name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          possimus animi ducimus quaerat. Cupiditate nam ad, eligendi quae, esse
          quibusdam nemo quo non laudantium commodi dolor voluptates magni eaque
          sequi.
        </p>
        <br />
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          reiciendis, sunt, ab quae rerum eaque beatae sint totam incidunt,
          culpa atque explicabo nobis. Quam tenetur quis porro! Tenetur, vel
          cupiditate?
        </p>
      </div>
    </div>
  );
};

export default About;
