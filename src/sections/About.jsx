import React from "react";
import { Link } from "react-scroll";
import { Slide } from "../animations/Slide.tsx";

export const About = () => {
  return (
    <div id="about" className=" mx-20">
      <hr className="border-gray-800"></hr>
      <div className=" mr-2  mt-16">
        <h1 className="text-white decoration-rose-500 underline font-extrabold text-6xl text-center mb-8 underline-offset-2">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row">
          <Slide x = {0} y = {200}>
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
                  Awards
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
                experiences and a writing well-structured code and visually
                appealing user interfaces.
              </p>
            </Slide>
            <Slide>
              <h1 className=" text-2xl text-white mt-8">What's the goal?</h1>
              <p className=" indent-8">
                At first, my primary interest lay solely in game development.
                However, I have since shifted my focus to web development with
                the goal of becoming a full-stack developer. My main motivation
                is to gain a deeper understanding of the industry through
                firsthand experience and to comprehend the intricacies of
                software production within larger teams.
              </p>
            </Slide>
            <Slide>
              <h1 className=" text-2xl text-white mt-8">
                What are my interests outside of work?
              </h1>
              <p className=" indent-8">
                Outside of programming, I love to create digital art and paint.
                I also have a deep love for music, and am actually in an
                acapella called "Vermillion Vocalists"! Lastly, I love
                collecting/trading plant species.
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
