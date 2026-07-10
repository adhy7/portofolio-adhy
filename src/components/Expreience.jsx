import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import github from "../assets/experience/github.png";
import tailwind from "../assets/experience/tailwind.png";
import flutter from "../assets/experience/flutter.png";
import reactImage from "../assets/experience/react.png";
import sql from "../assets/experience/sql.png";
import net from "../assets/experience/net.png";




const Expreience = () => {
  const tech = [
    { id: 1, src: html, title: "HTML", glow: "hover:shadow-orange-500/30" },
    { id: 2, src: css, title: "CSS", glow: "hover:shadow-blue-500/30" },
    { id: 3, src: javascript, title: "JavaScript", glow: "hover:shadow-yellow-400/30" },
    { id: 4, src: reactImage, title: "React", glow: "hover:shadow-cyan-400/30" },
    { id: 5, src: tailwind, title: "Tailwind", glow: "hover:shadow-sky-500/30" },
    { id: 6, src: flutter, title: "Flutter", glow: "hover:shadow-[#13b9fd]/40" },
    { id: 7, src: github, title: "Git", glow: "hover:shadow-gray-400/30" },
    { id: 8,src: sql,title: "SQL Server",glow: "hover:shadow-[#CC2927]/30",},
    {id: 9,src: net,title: ".NET",glow: "hover:shadow-[#512BD4]/30",},
  ];

  return (
    <div id="experience" className="relative w-full bg-[#0b1220] text-white py-20 ">
      <div className="relative max-w-screen-xl mx-auto flex flex-col ">
        <div>
          <p className="font-['JetBrains_Mono'] text-sm text-[#13b9fd] tracking-widest mb-2">
            // 03
          </p>
          <p className="font-['Sora'] text-4xl font-bold">Experience</p>
          <p className="pt-4 text-gray-400">Teknologi yang saya gunakan.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 py-10">
          {tech.map(({ id, src, title, glow }) => (
            <div
              key={id}
              className={`flex flex-col items-center gap-3 py-6 rounded-xl bg-[#131b2e] border border-white/5 shadow-lg shadow-black/20 hover:-translate-y-1 transition-all duration-300 ${glow}`}
            >
              <img src={src} alt={title} className="w-14 h-14 object-contain" />
              <p className="font-['JetBrains_Mono'] text-sm text-gray-300">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expreience;
