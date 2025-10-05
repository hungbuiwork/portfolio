import React, { Suspense } from "react";
import { Slide } from "../animations/Slide.tsx";
import Bento from "./Bento.jsx";
const Skills = React.lazy(() => import("./Skills"));
const Experience = React.lazy(() => import("./Experience"));
const Artworks = React.lazy(() => import("./Artworks"));
const Projects = React.lazy(() => import("./Projects"));
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const Home = (props) => {
  const mode = props.mode; //0: Full portfolio, 1: Software, 2: Game Dev

  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-t from-[#090b0f] to-[#0e1016]"
    >
      <div id="top" className=" z-50"></div>

      {/*Landing Section*/}
      <div id="home" className="relative bottom-6"></div>
      <div className=" px-2 flex flex-col justify-center h-[100%] bg-cover sporo">
        <div className=" flex justify-center">
          <div>
            <Slide>
              <h1 className="text-white md:border-2 rounded-md  w-full text-center text-8xl  relative z-10 font-bold  mb-3 text-shadow p-8">
                Hung Bui
              </h1>
            </Slide>
            <Slide>
              <div className="">
                <h2 className="text-white mx-auto text-center font-extrabold text-2xl md:text-2xl  drop-shadow-sm text-shadow-2">
                  Developing Software that makes an Impact
                </h2>
              </div>
            </Slide>
          </div>
        </div>
      </div>

      <div className=" h-24"></div>
      <Bento></Bento>

      <Suspense fallback={<div></div>}>
        <div className=" z-10">
          {/*Background Stuff*/}
          <Skills></Skills>

          {/*EXPERIENCE*/}
          <Experience></Experience>
          {/*Projects Section*/}
          <Projects mode={mode}></Projects>

          {/*About Section*/}
          <About mode={mode}></About>

          {/*Artwork*/}
          <Artworks></Artworks>

          {/*Contact Me*/}
          <Contact mode={mode}></Contact>
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
