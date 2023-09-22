import React from "react";
import ResumeGames from "../assets/resumes/HungBuiResumeGames.pdf";
import ResumeSoftware from "../assets/resumes/ResumeSoftware.pdf";
import { Slide } from "../animations/Slide.tsx";
export const Contact = () => {
  return (
    <div id="contact" className="">
      <hr className="border-gray-800"></hr>
      <Slide x = {0} y = {200}>
        <div className="bg-dark-1 pb-16 m-4 rounded-lg bg-violet-800">
          <h1 className="text-white text-center font-bold text-4xl underline decoration-violet-500 py-6 ">
            <a href="mailto: hungbuiwork@gmail.com ">Contact Me</a>
          </h1>
          <p className="text-gray-300 mr-[5%] text-xl place-self-center mb-6 drop-shadow-2xl text-center  mx-[10%] lg:mx-[20% xl:mx-[25%]">
            I love collaboration, and am always on the hunt on projects to be a
            part of! I am also looking for opportunities/internships to apply my
            skills and learn in a professional setting! I would absolutely love
            to connect! <br></br>The best way to reach me is through my email:
          </p>
          <h1 className="text-white text-2xl text-center font-bold">
            <a href="mailto: hungbuiwork@gmail.com ">hungbuiwork@gmail.com</a>
          </h1>
          <div className="text-white place-self-center m-auto text-center w-64 py-3 text-2xl rounded-xl bg-violet-500 hover:text-gray-800 hover:bg-white duration-300 font-bold my-8 drop-shadow-2xl">
            <a href={ResumeSoftware} target="_blank">
              Resume
            </a>
          </div>
        </div>
      </Slide>
    </div>
  );
};
