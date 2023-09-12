import React, { useState, useRef } from "react";
import Project from "./Project";
import gameProjects from "../data/projectdata_game.jsx";
import softwareProjects from "../data/projectdata_software.jsx";
import allProjects from "../data/projectdata_all.jsx";
import ResumeGames from "../assets/resumes/HungBuiResumeGames.pdf";
import ResumeSoftware from "../assets/resumes/HungBuiResumeSoftware.pdf";
import Carousel from "./Carousel";
import { digitalArt, threeDArt } from "../data/artdata_digital";
import { HashRouter } from "react-router-dom";
import { Skills } from "./Skills";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-t from-[#090b0f] to-[#0e1016]"
    >
      <div id="top"></div>
      {/*Landing Section*/}
      <div id="home" className="relative bottom-6"></div>
      <div className="mx-full px-2 flex flex-col justify-center h-[100%] bg-cover sporo">
        {false && (
          <div className=" absolute  z-0 right-[10%] bottom-[10%] w-[40vw] h-[40vw]  md:w-[30vw] md:h-[30vw] lg:w-[25vw] lg:h-[25vw] lg:right-[20%] me rounded-lg bg-cover  duration-300"></div>
        )}
        <div className="mx-auto mt-[10%] w-[80%]">
          <div>
            <p className="text-emerald-500  text-2xl md:text-3xl font-bold text-shadow-2 left text-shadow">
              Hey, I'm
            </p>
            <h1 className="text-white text-center text-[6rem] md:text-[10vw] relative z-10 font-bold  mb-3 place-self-center text-shadow">
              Hung Bui
            </h1>
            <div className="">
              <h2 className="text-emerald-400 text-right font-extrabold text-3xl md:text-3xl  drop-shadow-sm text-shadow-2">
                Software Engineer<br></br>Game Development
              </h2>
              <h2 className=" text-emerald-500 text-right text-xl md:text-2xl drop-shadow-sm text-shadow-2 mt-6">
                University of California, Irvine<br></br>
                SEP 2020 - JUN 2024
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/*Background Stuff*/}

      <Skills></Skills>

      {/*Projects Section*/}
      <div id="projects" className="relative bottom-4"></div>

      <div className="mx-auto text-center place-content-center">
        <h1 className="text-center text-6xl font-bold text-white underline decoration-purple-700 mt-16">
          Projects
        </h1>
        <h2 className="text-gray-300 text-center  mx-[10%] text-xl mt-4 mb-8">
          Here are some select projects I've worked on that showcase my skills.
        </h2>

        <div>
          {allProjects.map((project) => (
            <Project
              project={project}
              color=" purple-gradient"
              key={project.title}
            ></Project>
          ))}
          <h1 className="text-white font-bold text-center">
            More projects will be added to the website soon!
          </h1>
        </div>
      </div>

      {/*Artwork*/}
      <div id="art" className="relative bottom-32"></div>
      <hr className="border-gray-800"></hr>
      <div className="pb-16">
        <h1 className="text-white text-center font-bold text-5xl underline decoration-blue-500 pt-16">
          Artwork
        </h1>
        <h2 className="text-gray-400 text-center pt-2 pb-16 mx-[20%] text-xl">
          Though my{" "}
          <span className="text-white font-bold">
            primary passion is programming
          </span>
          , I've familiarized myself with 3D modeling software commonly used in
          game development. Here is some art I've created for past projects,
          displayed with an image carousel I created from scratch!
        </h2>

        <div className="px-[0%] md:px-[15%] lg:px=[[20%]">
          <div className="text-white font-bold text-center">
            <Carousel artwork={threeDArt}></Carousel>
          </div>
        </div>
      </div>

      {/*About Section*/}
      <div id="about" className="relative bottom-6"></div>
      <hr className="border-gray-800"></hr>
      <div className=" mx-2 mb-32 mt-16">
        <h1 className="text-white decoration-pink-500 underline font-extrabold text-6xl text-center mb-8 underline-offset-2">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="place-self-center text-white text-xl text-left ml-[10%] mr-[5%] w-[80%] md:w-[40%] md:max-w-[50%]">
            <div className="mx-auto w-48 h-48 me rounded-full bg-cover mb-6 hover:w-52 hover:h-52 hover:shadow-xl duration-300"></div>
            <p>
              <span className="text-2xl md:text-3xl font-extrabold text-pink-400">
                University of California, Irvine
              </span>
              <br></br>
              Computer Science (B.S.) & Computer Game Science (B.S.)<br></br>
              <br></br>
              GPA: 3.97<br></br>
              Sep 2020 - <span>Jun 2024</span>
              <br></br>
              <br></br>
            </p>
          </div>
          <p className="text-gray-400 mr-[5%] text-xl place-self-center mb-16 drop-shadow-2xl w-[80%] md:w-[90%]">
            I'm a 3rd year at University of California, Irvine where I am
            currently studying to earn two degrees in computer science and
            computer-game science. I have a passion to create -- whether it be
            by painting, programming, or even just by conceptualizing worlds and
            characters in my head. Throughout high school, I used traditional
            art as a means to convey stories. As I've grown older, I found
            programming as a way to turn abstract ideas into actuality, while
            also challenging me to problem-solve. I have a dual passion for both
            programming and artistry, and making games and doing front-end
            development is how I create with my love for both.
          </p>
        </div>
      </div>

      {/*Contact Me*/}
      <div id="contact" className="relative bottom-20"></div>
      <hr className="border-gray-800"></hr>
      <div className="bg-dark-1 pb-16 w-full">
        <h1 className="text-white text-center font-bold text-4xl underline decoration-emerald-500 py-6">
          <a href="mailto: hungbuiwork@gmail.com ">Contact Me</a>
        </h1>
        <p className="text-gray-300 mr-[5%] text-xl place-self-center mb-6 drop-shadow-2xl text-center  mx-[10%] lg:mx-[20% xl:mx-[25%]">
          I love collaboration, and am always on the hunt on projects to be a
          part of! I am also looking for opportunities/internships to apply my
          skills and learn in a professional setting! I would absolutely love to
          connect! <br></br>The best way to reach me is through my email:
        </p>
        <h1 className="text-white text-2xl text-center font-bold">
          <a href="mailto: hungbuiwork@gmail.com ">hungbuiwork@gmail.com</a>
        </h1>
        <div className="text-white place-self-center m-auto text-center w-64 py-3 text-2xl rounded-xl bg-purple-500 hover:text-gray-800 hover:bg-white duration-300 font-bold my-8 drop-shadow-2xl">
          <a href={ResumeGames} target="_blank">
            Resume(Game Dev)
          </a>
        </div>
        <div className="text-white place-self-center m-auto text-center w-64 py-3 text-2xl rounded-xl bg-blue-500 hover:text-gray-800 hover:bg-white duration-300 font-bold my-8 drop-shadow-2xl">
          <a href={ResumeSoftware} target="_blank">
            Resume(Software)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
