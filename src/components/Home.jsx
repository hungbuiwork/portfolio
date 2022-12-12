import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Project from "./Project";
import projects from "../data/projectdata.jsx";
import Artwork from "./Artwork";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-t from-gray-900 to-gray-800">
      {/*Landing Section*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[100%]">
        <div className="place-self-center w-[80%]">
          <p className="text-emerald-500  text-4xl">Hey, I'm</p>
          <h1 className="text-white text-8xl font-bold text-center m-8">
            Hung Bui
          </h1>
          <h2 className=" text-3xl text-end text-gray-400">
            Software, Game Dev, Digital Art
          </h2>
        </div>
      </div>

      {/*About Section*/}
      <div  id="about" className="relative bottom-6"></div>
      <div className=" mx-20 mb-32 mt-16">
        <h1 className="text-white decoration-pink-500 underline font-extrabold text-6xl text-center mb-8 underline-offset-2">About Me</h1>
        <p className="text-gray-200 text-xl mb-16 drop-shadow-2xl">
          I'm a 3rd year at University of California, Irvine where I am
          currently studying to earn two degrees in computer science and
          computer-game science. To start off, I am someone who loves to create
          -- whether it be by painting, programming, or even just by
          conceptualizing worlds and characters in my head. Throughout high
          school, I used traditional art as a means to convey stories. As I've
          grown older, I found programming as a way to turn abstract ideas into
          actuality, while also challenging me to problem-solve.I have a dual
          passion for both programming and the arts, and making games is my way
          to create with my love for both.
        </p>

        <h1 className="text-white text-center font-bold text-4xl underline decoration-pink-600">
          My Skills
        </h1>
        <div className="skills flex flex-row justify-evenly border-white  bg-gray-900 rounded-md mt-4">
          <div className="flex flex-col">
            <h1>Languages</h1>
            <p>Python ★</p>
            <p>C++ ★</p>
            <p>C# ★</p>
            <p>HSLS</p>
          </div>
          <div className="flex flex-col">
            <h1>Web Dev</h1>
            <p>React ★</p>
            <p>Tailwind ★</p>
            <p>HTML,CSS, JS ★</p>
            <p>Angular</p>
            <p>SQL</p>
          </div>
          <div>
            <h1>Game Dev</h1>
            <p>Unity ★</p>
            <p>Unreal</p>
            <p>Shaderlab</p>
          </div>
          <div className="flex flex-col"></div>
        </div>
      </div>

      {/*Projects Section*/}
      <div  id="projects" className="relative bottom-4"></div>
      <div
        className="mx-auto flex flex-wrap bg-gray-900 text-center place-content-center"
      >
        <h1 className="text-6xl font-bold text-white underline decoration-purple-700 mt-16">
          Projects
        </h1>
        <div>
          {projects.map((project) => (
            <Project project={project}></Project>
          ))}
        </div>
      </div>

      {/*Artwork*/}
      <div className="p-[30%]">
        <Artwork></Artwork>
      </div>
    </div>
  );
};

export default Home;
