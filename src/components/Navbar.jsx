import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import ItchIoLogo from "../assets/logos/itchio-logo-textless-white.png";
import Resume from "../assets/resumes/Bui_Hung.pdf";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-dark-2 bg-opacity-90 backdrop-blur-sm text-gray-300 z-50">
        <Link activeClass="active" className="flex nameLogo hover:cursor-pointer group" to="home" spy={true} smooth={true} offset={0} duration={500}>
        <p className="text-6xl font-bold">H</p>
          <p className="text-6xl font-bold relative right-5 group-hover:right-0 duration-200">
            B
          </p>
          </Link>

        {/*menu*/}
        <ul className="hidden md:flex">          
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500}>
            <li className="top-nav my-2">Skills</li>
          </Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500}>
            <li className="top-nav my-2">Projects</li>
          </Link>
          <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-80} duration={500}>
            <li className="top-nav my-2">Experience</li>
          </Link>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}>
            <li className="top-nav my-2">About</li>
          </Link>
        
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
            <li className=" py-2 px-4 text-white bg-violet-600/80 rounded-md m-auto hover:bg-white hover:rounded-tr-none hover:text-violet-600 duration-300">Contact Me</li>
          </Link>
        </ul>

        {/*Hamburger*/}
        <div onClick={handleClick} className="md:hidden z-50">
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
              : "absolute top-0 left-0 w-full h-screen bg-dark-2 flex flex-col justify-center items-center bg-opacity-[0.97]"
          }
        >
          <li className="my-4">
            <Link activeClass="active"  className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 px-4 text-2xl" to="skills" spy={true} smooth={true} offset={-90} duration={500}>
            Skills
            </Link>
          </li>

          <li className="my-4">
            <Link activeClass="active"  className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 px-4 text-2xl" to="projects" spy={true} smooth={true} offset={-80} duration={500}>
            Projects
            </Link>
          </li>
          <li className="my-4">
            <Link activeClass="active"  className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 px-4 text-2xl" to="experience" spy={true} smooth={true} offset={-80} duration={500}>
            Experience
            </Link>
          </li>
          <li className="my-4">
            <Link activeClass="active"  className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 px-4 text-2xl" to="about" spy={true} smooth={true} offset={-80} duration={500}>
            About
            </Link>
          </li>
          <li className="my-4">
            <Link activeClass="active"  className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 px-4 text-2xl" to="contact" spy={true} smooth={true} offset={-80} duration={500}>
            Contact Me
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={
          nav ? "hidden" : "flex fixed flex-col bottom-[10%] left-0 z-50"
        }
      >
        <ul>
          <li className="side-nav bg-red-500 rounded-tr-lg">
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
          <li className="side-nav bg-blue-600 rounded-br-lg">
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
