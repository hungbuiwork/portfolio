import React from "react";
import allExperience from "../data/experiencedata_all.jsx";
import Project from "../components/Project.jsx";
import { Slide } from "../animations/Slide.tsx";
import { ShowProjects } from "../components/ShowProjects.jsx";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="text-white text-center font-bold text-6xl underline decoration-blue-600 mt-8 ">
        Experience
      </h1>
      <ShowProjects
        projects={allExperience}
        amount={3}
        className="border-2 my-8 border-blue-500/25"
      ></ShowProjects>
    </div>
  );
};

export default Experience;
