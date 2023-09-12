import React from "react";
import allExperience from "../data/experiencedata_all.jsx";
import Project from "../components/Project.jsx";

export const Experience = () => {
  return (
    <div id = "experience">
      <hr className="border-gray-800"></hr>
      <h1 className="text-white text-center font-bold text-6xl underline decoration-violet-600 mt-8 ">
        Experience
      </h1>
      <h2 className="text-gray-300 text-center  mx-[10%] text-xl mt-4 mb-8">
        My experience working freelance, interning, and volunteering.
      </h2>


      <div>
          {allExperience.map((project) => (
            <Project
              project={project}
              color=" border-2 border-violet-400"
              key={project.title}
            ></Project>
          ))}

        </div>
    </div>
    
  );
};
