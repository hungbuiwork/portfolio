import React from "react";
import { Link } from "react-scroll";
import { Slide } from "../animations/Slide.tsx";

export const About = (props) => {
  return (
    <div id="about" className=" mx-20">
      <hr className="border-gray-800"></hr>
      <div className=" mr-2  mt-16">
        <h1 className="text-white decoration-rose-500 underline font-extrabold text-6xl text-center mb-8 underline-offset-2">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row">
          <Slide x={0} y={200}>
            <div className=" text-white text-xl text-left ml-[10%] mr-[5%] w-[80%] md:w-[40%] md:max-w-[50%]">
              <div className="mx-auto w-48 h-48 me rounded-full bg-cover mb-6 hover:w-52 hover:h-52 hover:shadow-xl duration-300"></div>
              <p>
                <span className="text-2xl md:text-3xl font-extrabold text-rose-500">
                  University of California, Irvine
                </span>
                <br></br>
                Computer Science (B.S.) & Computer Game Science (B.S.)<br></br>
                <br></br>
                <span className=" font-bold  text-rose-500">GPA: 3.97</span>
                <br></br>
                Sep 2020 - <span>Jun 2024</span>
                <br></br>
                <br></br>
                <span className=" underline decoration-rose-600 decoration-4">
                  Merits & Awards
                </span>
                <br></br>
                <p className=" text-sm mt-3">
                  UCI Summer Academy Logo Design Competition 2023(2nd of 40+
                  entries)<br></br>
                  <br></br>
                  Phi Beta Kappa Honor’s Society Book Award 2021<br></br>
                  <br></br>
                </p>
              </p>
            </div>
          </Slide>
          <div className="text-gray-400 mr-[5%] text-xl place-self-center mb-16 drop-shadow-2xl w-[80%] md:w-[90%]">
            <Slide>
              <h1 className=" text-2xl text-white">Who am I?</h1>
              <p className=" indent-8">
                I am a fourth-year student at the University of California,
                Irvine. I'm passionate about creation, whether through art,
                programming, or other means. I channel this passion into
                font-end development and game development. I am a
                detail-oriented programmer, with several collaborative
                experiences, with a focus on writing well-structured code and
                visually appealing user interfaces.
              </p>
              <h1 className=" text-2xl text-white mt-8">What's the goal?</h1>
              {props.mode == 1 && (
                <p className=" indent-8">
                  Initially, I harbored a strong interest in game development.
                  However, I have since broadened my focus to encompass web
                  development, aspiring to become a full-stack developer. I am
                  deeply passionate about exploring new technologies and
                  venturing beyond my comfort zone. My primary objective is to
                  immerse myself in the industry, gaining firsthand experience
                  and understanding the intricacies of software production
                  within expansive teams.
                </p>
              )}
              {props.mode == 2 && (
                <p className=" indent-8">
                  I have a deep love for game development, and the production
                  process of a game. As someone who is skilled in both artistic
                  creations and programming, technical art has been the subfield
                  of game development that I am most passionate about, where I
                  can apply my skills the best. My primary objective is to
                  immerse myself in the industry, gaining firsthand experience
                  and understanding the intricacies of game development within
                  expansive teams.
                </p>
              )}
              {props.mode == 0 && (
                <p>
                  I harbor a deep love for both software and game development
                  and the production process behind it. As someone skilled in
                  both visual design and programming, front-end and full-stack
                  development as ell as technical art within game development
                  are two fields of work that resonates most with my passions,
                  offering me the ideal platform to apply my skills. I am deeply
                  passionate about exploring new technologies and stepping out
                  of my comfort zone. My primary objective is to immerse myself
                  in the industry, gaining firsthand experience and
                  understanding the intricacies of software or game development
                  within expansive teams.
                </p>
              )}

              <h1 className=" text-2xl text-white mt-8">Working with me, you'll notice </h1>
              <p> - My passion for exploring & learning new things
              </p>
              <p> - Strong interdisciplinary skills & versatility
              </p>
              <p> - Quality in design & implementation of code
              </p>

              <h1 className=" text-2xl text-white mt-8">
                What are my interests outside of work?
              </h1>
              <p className=" indent-8">
                Outside of programming, I love to create digital art and paint.
                I also have a deep love for singing, and have competing in my
                collegiate acapella group. I also love growing and collecting
                tropical plant species. I love to incorporate these things I
                love: art, music, plants into what I create on my free time,
                such as in my procedural plant generator in the projects
                section, as well as the website/social media design in my
                acapella group!
              </p>
            </Slide>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li className=" w-auto mt-5 center inline-block list-none  hover:rounded-tr-none text-center py-2 px-4 text-white bg-rose-600/80 rounded-md m-auto hover:bg-white hover:text-rose-600 duration-300">
                To my contact page
              </li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
