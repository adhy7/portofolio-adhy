import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsAndroid } from "react-icons/bs";

const SosicalLinks = () => {
  const links = [
    { id: 1, icon: <FaGithub size={20} />, label: "GitLab", href: "https://gitlab.com/adhy48625" },
    { id: 2, icon: <BsFillPersonFill size={20} />, label: "Resume", href: "cv.pdf", download: true },
    { id: 3, icon: <BsLinkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-adhy-daryawan/" },
    { id: 4, icon: <BsAndroid size={20} />, label: "PlayStore", href: "https://play.google.com/store/apps/dev?id=8422702762990340081" },
  ];

  return (
    <div className="hidden sm:flex flex-col gap-3 fixed left-4 top-1/2 -translate-y-1/2 z-30">
      {links.map((link) => (
        <div key={link.id} className="group relative">
          <a
            href={link.href}
            download={link.download}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-[#131b2e] border border-white/10 text-gray-300 hover:text-white hover:border-[#13b9fd]/60 hover:shadow-lg hover:shadow-[#13b9fd]/20 transition-all duration-300"
          >
            {link.icon}
          </a>
          <span className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap font-['JetBrains_Mono'] text-xs bg-[#131b2e] border border-white/10 text-gray-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {link.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SosicalLinks;
