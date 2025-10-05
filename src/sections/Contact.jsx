import React from "react";
import ResumeGames from "../assets/resumes/HungBuiResumeGames.pdf";
import ResumeSoftware from "../assets/resumes/HungBuiResumeSoftware.pdf";
import { Slide } from "../animations/Slide.tsx";
const Contact = (props) => {
  return (
    <div id="contact" className="">
      <hr className="border-gray-800"></hr>
      <div className="bg-dark-1 pb-16 m-4 rounded-lg bg-blue-500/10 border-blue-500 border-2">
        <h1 className="text-white text-center font-bold text-4xl underline decoration-blue-500 py-6 ">
          <a href="mailto: hungbuiwork@gmail.com ">I'd love to connect</a>
        </h1>
        <p className="text-gray-300 mr-[5%] text-xl place-self-center mb-6 drop-shadow-2xl text-center  mx-[10%] lg:mx-[20% xl:mx-[25%]">
          I love collaboration, and am always eager to hear about other's career
          journeys, and make new connections!The best way to reach me is through
          my <br></br>
          <a
            href="https://www.linkedin.com/in/hung-d-bui/"
            target="_blank"
            className="bg-blue-600 px-8 py-1 rounded-md font-bold text-2xl"
          >
            LinkedIn.
          </a>{" "}
          <br></br>
          Alternatively, you can email me.
        </p>
        <div className="flex justify-center"></div>
        <h1 className="text-white text-2xl text-center font-bold">
          <a href="mailto: hungbuiwork@gmail.com ">hungbuiwork@gmail.com</a>
        </h1>
      </div>
    </div>
  );
};
export default Contact;
