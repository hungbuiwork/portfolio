import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import ItchIoLogo from "../assets/logos/itchio-logo-textless-white.png";
import Resume from "../assets/resumes/Bui_Hung.pdf";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 text-gray-300 z-10">
      <div className="flex">
        <p className="text-6xl font-bold">H</p>
        <p className="text-6xl font-bold relative right-5 hover:right-0 duration-200">
          B
        </p>
      </div>

      {/*menu*/}
      <ul className="hidden md:flex">
        <li className="top-nav">
          <a>Home</a>
        </li>
        <li className="top-nav">
          <a href="#about">About</a>
        </li>
        <li className="top-nav">
          <a href="#projects">Projects</a>
        </li>
        <li className="top-nav">
          <a>Art</a>
        </li>
        <li className="top-nav">
          <a href={Resume} target="_blank">
            Resume
          </a>
        </li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="h-[30px] w-[30px]"></FaBars>
        ) : (
          <FaTimes className="h-[30px] w-[30px]"></FaTimes>
        )}
      </div>

      {/*Mobile Menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center"
        }
      >
        <li className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 text-2xl">
          Home
        </li>
        <li className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 text-2xl">
          <a href="#about" onClick={handleClick} >About</a>
        </li>
        <li className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 text-2xl">
          <a href="#projects" onClick={handleClick} >Projects</a>
        </li>
        <li className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 text-2xl">
          Art
        </li>
        <li className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 text-2xl">
          <a href={Resume} target="_blank" onClick={handleClick} >
            Resume
          </a>
        </li>
      </ul>

      <div className={nav ? "hidden" : "flex fixed flex-col top-[35%] left-0"}>
        <ul>
          <li className="side-nav bg-red-500">
            <a
              href="https://hungbui.itch.io/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-50"
            >
              Itch.io <img src={ItchIoLogo} className="h-[30px] w-[30px]"></img>
            </a>
          </li>
          <li className="side-nav bg-purple-600">
            <a
              href="https://github.com/hungbuiwork/"
              target="blank"
              className="flex justify-between items-center w-full text-gray-50"
            >
              Github <FaGithub size={30}></FaGithub>
            </a>
          </li>
          <li className="side-nav bg-blue-600">
            <a
              href="https://www.linkedin.com/in/hung-bui-06ab67208/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-50"
            >
              LinkedIn <FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
