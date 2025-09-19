import React, { Suspense } from "react";
import { Slide } from "../animations/Slide.tsx";
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
      {/* <div id="home" className="relative bottom-6"></div>
      <div className="mx-full px-2 flex flex-col justify-center h-[100%] bg-cover sporo">
        {false && (
          <div className=" absolute  z-0 right-[10%] bottom-[10%] w-[40vw] h-[40vw]  md:w-[30vw] md:h-[30vw] lg:w-[25vw] lg:h-[25vw] lg:right-[20%] me rounded-lg bg-cover  duration-300"></div>
        )}
        <div className="mx-auto mt-[10%] w-[80%]">
          <div>
            <Slide>
              <h1 className="text-white text-center text-[6rem] md:text-[10vw] relative z-10 font-bold  mb-3 place-self-center text-shadow p-4">
                Hung Bui
              </h1>
            </Slide>

            {mode == 0 && (
              <Slide>
                <div className="">
                  <h2 className="text-emerald-400 text-right font-extrabold text-3xl md:text-3xl  drop-shadow-sm text-shadow-2">
                    Software Engineering
                  </h2>
                  <h2 className="text-emerald-400 text-right font-extrabold text-3xl md:text-3xl  drop-shadow-sm text-shadow-2">
                    Game Development
                  </h2>
                </div>
              </Slide>
            )}
            {mode == 1 && (
              <Slide>
                <div className="">
                  <h2 className="text-emerald-400 text-right font-extrabold text-3xl md:text-3xl  drop-shadow-sm text-shadow-2">
                    Software Engineering
                  </h2>
                  <h2 className="text-emerald-400 text-right font-extrabold text-3xl md:text-3xl  drop-shadow-sm text-shadow-2">
                    Full Stack Development
                  </h2>
                  <h2 className="text-emerald-400 text-right font-extrabold text-3xl md:text-3xl  drop-shadow-sm text-shadow-2">
                    UI
                  </h2>
                </div>
              </Slide>
            )}
            {mode == 2 && (
              <Slide>
                <div className="">
                  <h2 className="text-emerald-400 text-right font-extrabold text-3xl md:text-3xl  drop-shadow-sm text-shadow-2">
                    Game Development
                  </h2>
                  <h2 className="text-emerald-400 text-right font-extrabold text-3xl md:text-3xl  drop-shadow-sm text-shadow-2">
                    Gameplay Engineering
                  </h2>
                  <h2 className="text-emerald-400 text-right font-extrabold text-3xl md:text-3xl  drop-shadow-sm text-shadow-2">
                    Technical Art
                  </h2>
                </div>
              </Slide>
            )}
          </div>
        </div>
      </div> */}
      <div className=" h-24"></div>

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
