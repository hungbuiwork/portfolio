import React from "react";
import Project from "../components/Project";
import allProjects from "../data/projectdata_all.jsx";
import { Reveal } from "../animations/Reveal.tsx";
import { Slide } from "../animations/Slide.tsx";
export const Projects = () => {
  return (
    <div id="projects">
      <div className="mx-auto text-center place-content-center">
        <h1 className="text-center text-6xl font-bold text-white underline decoration-purple-700 mt-16">
          Projects
        </h1>
        <Slide x = {0} y = {200}>
          <h2 className="text-gray-300 text-center  mx-[10%] text-xl mt-4 mb-8">
            Below, you'll find a few specific projects I've been involved in! My
            primary areas of concentration include frontend-oriented web
            development and game programming.
          </h2>
        </Slide>

        <div>
          {allProjects.map((project) => (
            <Slide>
              <Project
                project={project}
                color=" purple-gradient"
                key={project.title}
              ></Project>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};
