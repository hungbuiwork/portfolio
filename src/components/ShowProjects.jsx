import React, { useState } from "react";
import { Slide } from "../animations/Slide.tsx";

import allProjects from "../data/projectdata_all.jsx";
const Project = React.lazy(() => import("./Project"));

export const ShowProjects = (props) => {
  const numProjects = props?.amount || 4;
  const [visibleProjects, setVisibleProjects] = useState(numProjects);
  const projects = props.projects || [];

  const loadMoreProjects = () => {
    // Increase the number of visible projects by 4
    setVisibleProjects(
      (prevVisibleProjects) => prevVisibleProjects + numProjects
    );
  };

  return (
    <div>
      <div className=" flex justify-center">
        <div className="w-[min(90vw,1200px)] flex flex-col gap-12">
          {projects.slice(0, visibleProjects).map((project) => (
            <Slide x={0} y={200} key={project.title}>
              <Project project={project} className={props.className}></Project>
            </Slide>
          ))}

          {visibleProjects < projects.length && (
            <div className="flex justify-center ">
              <button
                onClick={loadMoreProjects}
                className="rounded-md justify-center w-full text-xl px-4 py-8 mx-4  mb-8 text-center border-2  text-white font-semibold hover:bg-white hover:text-slate-900 md:duration-300 flex items-center"
              >
                <span class="loading loading-bars loading-md"></span>&nbsp;VIEW
                MORE &nbsp;{" "}
                <span class="loading loading-bars loading-md"></span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
