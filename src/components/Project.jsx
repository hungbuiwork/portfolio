import React, { useState } from "react";
import { Link } from "react-scroll";

function Skill(skill) {
  return (
    <div
      key={skill}
      className="rounded-md px-2 m-1 text-center  bg bg-emerald-500/50 drop-shadow-2xl text-emerald-200"
    >
      {skill}
    </div>
  );
}
function Button(button) {
  return (
    <a
      key={button.label}
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
    <div key={detail.title} className="mb-10 clear-both md:text-lg">
      <h1 className="font-bold text-xl mb-4">{detail?.title}</h1>
      <div className=" text-gray-300">
        <img
          src={detail?.image}
          className={
            !detail.image
              ? "hidden"
              : "rounded-md aspect-square object-cover w-[40%] md:w-[30%] lg:w-[20%] xl:w-[15%] float-left mx-4 mb-2"
          }
        ></img>
        <div className="text-left indent-8">{detail?.description}</div>
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
      className={"mx-[10%] mb-[10%] rounded-md border-white p-6 drop-shadow-2xl" + color}
      id={project.title}
    >
      <div className="flex flex-col md:flex-row justify-between">
        {project.imgURL && <div className="shrink-0 grow-1 flex flex-col w-[100%] md:w-[30%] m-2 place-self-center ">
          <img
            src={project.imgURL}
            className="h-auto w-[320px] rounded-md place-self-center aspect-square object-cover shadow-inner"
          ></img>
        </div>}
        <div className="shrink-1 flex flex-col justify-evenly mx-8 place-self-center">
          <div>
            <h1 className="text-white text-4xl font-bold">{project.title}</h1>
            <div className="flex flex-wrap place-content-center">
              {project.skills.map((skill) => Skill(skill))}
            </div>
            <p className={!project.date ? "hidden" : "text-gray-300"}>
              {project.date}
            </p>
            <p className={!project.roles ? "hidden" : "text-gray-300"}>
              Roles: {project.roles}
            </p>
          </div>
          <p className=" text-gray-300 mt-6">{project.desc}</p>
          {project.details && <Link to= {showingDetails? project.title :project.title + "details" } spy={true} smooth={true} offset={-90} duration={500}>
            <button
              className={
                "rounded-md text-2xl px-8 py-4 mx-4  my-4 text-center border-2  text-white font-semibold hover:bg-white hover:text-slate-900 duration-300 relative top-0 " +
                " hover:top-2"
              }
              onClick={() => setShowingDetails(!showingDetails)}
            >
              {showingDetails ? "MINIMIZE ▲" : "MORE INFO ▼"}
            </button>
          </Link>}
        </div>
      </div>

      <div
      id = {project.title + "details"}
        className={
          (showingDetails
            ? "text-white h-auto opacity-100 rounded-lg p-4 bg-gradient-to-b from-gray-900/[0.7] to-transparent duration-300"
            : "opacity-0 h-0 overflow-hidden duration-300") + ""
        }
      >
        <div className="mb-8">
          <h1 className=" font-extrabold text-2xl">{`Developing "${project.title}"`}</h1>
          <h2
            className={!project.size ? "hidden" : ""}
          >{`Team size: ${project.size}`}</h2>
          <h2 className={project.size ? "hidden" : ""}>Solo project</h2>
        </div>
        <div className="flex flex-wrap place-content-center mb-8">
          {project.buttons?.map((button) => Button(button))}
        </div>

        {project?.details?.map((detail) => Detail(detail))}
        <Link to= {project.title} spy={true} smooth={true} offset={-90} duration={500}>
        <button
          onClick={() => setShowingDetails(!showingDetails)}
          className="clear-both rounded-md text-2xl px-8 py-4 mx-4  my-2 text-center border-2  text-white font-semibold hover:bg-white hover:text-slate-900 duration-300"
        >
          MINIMIZE ▲
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
