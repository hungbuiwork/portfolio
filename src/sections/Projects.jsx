import React from "react";
import {
  allProjects,
  gameProjects,
  softProjects,
} from "../data/projectdata_all.jsx";
import { Slide } from "../animations/Slide.tsx";
import { ShowProjects } from "../components/ShowProjects.jsx";
export const Projects = (props) => {
  let projects = [];
  if (props.mode === 1) {
    projects = softProjects;
  } else if (props.mode === 0) {
    projects = allProjects;
  } else if (props.mode === 2) {
    projects = gameProjects;
  }
  return (
    <div id="projects">
      <div className="mx-auto text-center place-content-center">
        <h1 className="text-center text-6xl font-bold text-white underline decoration-purple-700 mt-16">
          Projects
        </h1>
        <div className=" flex justify-center">
        <Slide x={0} y={200}>
          <h2 className="text-gray-300 text-center  mx-[10%] text-xl mt-4 mb-8">
            Below, you'll find a few specific projects I've been involved in! My
            primary areas of concentration include full-stack web development
            and game programming.
          </h2>
        </Slide>
        </div>
        <ShowProjects projects={projects}></ShowProjects>
      </div>
    </div>
  );
};
