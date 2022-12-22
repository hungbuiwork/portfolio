import React, { useState } from "react";

function Skill(skill) {
  return (
    <div className="rounded-md px-2 m-1 text-center border-2 bg-emerald-500 text-white font-semibold">
      {skill}
    </div>
  );
}
function Button(button) {
  return (
    <a
      href={button.url}
      target="_blank"
      className="rounded-md text-2xl px-8 py-4 mx-4  my-2 text-center border-2  text-white font-semibold hover:bg-white hover:text-slate-900 duration-300"
    >
      {button.label}
    </a>
  );
}

function Detail(detail) {
  return (
    <div className="mb-10 clear-both md:text-lg">
      <h1 className="font-bold text-xl mb-4">{detail?.title}</h1>
      <div className=" text-gray-300">
        <img
          src={detail?.image}
          className={
            !detail.image
              ? "hidden"
              : "rounded-md aspect-square object-cover w-[40%] md:w-[30%] float-left mx-4 mb-2"
          }
        ></img>
        <div className="text-left">{detail?.description}</div>
      </div>
    </div>
  );
}

const Project = (props) => {
  const project = props.project;
  const color = props.color;
  const [showingDetails, setShowingDetails] = useState(false);
  return (
    <div
      className={"m-[10%] rounded-md border-white p-6 drop-shadow-2xl" + color}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="shrink-0 grow-1 flex flex-col w-[100%] md:w-[30%] m-2 place-self-center ">
          <img
            src={project.imgURL}
            className="h-auto w-[320px] rounded-md place-self-center aspect-square object-cover shadow-inner"
          ></img>
          <div className="flex flex-wrap place-content-center">
            {project.skills.map((skill) => Skill(skill))}
          </div>
        </div>
        <div className="shrink-1 flex flex-col justify-evenly mx-8 place-self-center">
          <div>
            <h1 className="text-white text-4xl font-bold">{project.title}</h1>
            <p className={!project.date ? "hidden" : "text-gray-300"}>
              {project.date}
            </p>
            <p className={!project.roles ? "hidden" : "text-gray-400"}>
              Roles: {project.roles}
            </p>
          </div>
          <p className=" text-gray-300 mt-6">{project.desc}</p>

          <div className="flex flex-wrap place-content-center">
            {project.buttons?.map((button) => Button(button))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowingDetails(!showingDetails)}
        className={
          !project.details
            ? "hidden"
            : "text-white hover:text-2xl text-xl font-bold px-10 pt-6 duration-200"
        }
      >
        {showingDetails ? "▲" : "▼ Click for more details ▼"}
      </button>

      <div
        className={
          (showingDetails
            ? "text-white h-auto opacity-100 rounded-lg p-4 bg-gradient-to-b from-gray-900/[0.7] to-transparent"
            : "opacity-0 h-0 overflow-hidden") + ""
        }
      >
        <div className="mb-8">
          <h1 className=" font-extrabold text-2xl">{`Developing "${project.title}"`}</h1>
          <h2
            className={!project.size ? "hidden" : ""}
          >{`Team size: ${project.size}`}</h2>
                    <h2
            className={project.size ? "hidden" : ""}
          >Solo project</h2>
        </div>
        {project?.details?.map((detail) => Detail(detail))}
        <button
          onClick={() => setShowingDetails(!showingDetails)}
          className="clear-both text-white font-bold p-6"
        >
          ▲ Minimize this project ▲
        </button>
      </div>
    </div>
  );
};

export default Project;
