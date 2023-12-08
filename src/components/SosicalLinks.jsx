import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const SosicalLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          GitLab <FaGithub size={30}></FaGithub>
        </>
      ),
      href: "https://gitlab.com/adhy48625",
    },
    {
      id: 2,
      child: (
        <>
          Resume <BsFillPersonFill size={30}></BsFillPersonFill>
        </>
      ),
      href: "cv.pdf",
      style: "rounded-br-md",
      download: true,
    },
    {
      id: 3,
      child: (
        <>
          linkedin <BsLinkedin size={30}></BsLinkedin>
        </>
      ),
      href: "https://www.linkedin.com/in/muhammad-adhy-daryawan/",
    },
  ];
  return (
    <div id="Experience" className="flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex  justify-between bg-gray-500 items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 " +
              "" +
              link.style
            }
          >
            <a           
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              <>
                {link.child}
              </>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SosicalLinks;
