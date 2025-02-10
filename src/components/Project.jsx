import React, { useState } from "react";
import { Link } from "react-scroll";
import { Reveal } from "../animations/Reveal.tsx";

function Skill(skill) {
  return (
    <div className="rounded-md px-2 m-1 text-center  bg bg-emerald-500/50 drop-shadow-2xl text-emerald-200">
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
              : "rounded-md object-cover w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] float-left mx-4 mb-2"
          }
        ></img>

        {detail.vid && (
          <video
            src={detail.vid}
            loop
            autoPlay
            muted
            className=" rounded-md object-cover w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] float-left mx-4 mb-2"
          ></video>
        )}
        <div className="text-left">{detail?.description}</div>
      </div>
    </div>
  );
}

const Project = (props) => {
  const project = props.project;
  const className = props.className;
  const [showingDetails, setShowingDetails] = useState(false);
  return (
    <div
      className={
        "mx-[10%] mb-[10%] rounded-md border-white p-6 backdrop-blur-sm drop-shadow-2xl" +
        " " +
        className
      }
      id={project.title}
    >
      <div className="flex flex-col md:flex-row justify-between">
        {project.imgURL && (
          <div className="shrink-0 grow-1 flex flex-col w-[100%] md:w-[30%] m-2 place-self-center duration-300  relative   border-2 border-transparent rounded-md hover:scale-105">
            <img
              src={project.imgURL}
              className="h-auto w-[320px] rounded-md place-self-center aspect-square object-cover shadow-inner"
            ></img>
          </div>
        )}

        {project.vidURL && (
          <video
            loop
            autoPlay
            muted
            className="h-auto w-[320px] rounded-md place-self-center aspect-square object-cover shadow-inner duration-300  mb-6 relative  hover:shadow-2xl hover:scale-105 border-2 border-transparent hover:border-white"
          >
            <source src={project.vidURL} type="video/mp4"></source>
          </video>
        )}
        <div className=" shrink-1 text-center md:text-left flex flex-col justify-evenly mx-8 place-self-center">
          <Reveal delay={0.25}>
            <div>
              <h1 className="text-white text-4xl font-bold">{project.title}</h1>
              {project.company && (
                <h2 className=" text-white/90 text-lg">
                  at <span className=" italic ">{project.company}</span>
                </h2>
              )}
              <div
                className={
                  "flex flex-wrap place-content-center md:place-content-start"
                }
              >
                {project.skills.map((skill, i) => (
                  <div key={i}>{Skill(skill)}</div>
                ))}
              </div>
              <p className={!project.date ? "hidden" : "text-gray-300"}>
                {project.date}
              </p>
              <p className={!project.roles ? "hidden" : "text-gray-300"}>
                Roles: {project.roles}
              </p>
            </div>
            <p className=" text-gray-300 text-left  mt-6">{project.desc}</p>
            {project.details && (
              <Link
                to={showingDetails ? project.title : project.title + "details"}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                <button
                  className={
                    "rounded-md text-xl px-4 py-4 mx-4  my-4 text-center border-2  text-white font-semibold hover:bg-white hover:text-slate-900 md:duration-300 relative top-0 " +
                    " md:hover:top-2"
                  }
                  onClick={() => setShowingDetails(!showingDetails)}
                >
                  {showingDetails ? "MINIMIZE ▲" : "MORE INFO ▼"}
                </button>
              </Link>
            )}
          </Reveal>
        </div>
      </div>

      <div
        id={project.title + "details"}
        className={
          (showingDetails
            ? "text-white text-center h-auto opacity-100 rounded-lg p-4 bg-gradient-to-b from-gray-900/[0.7] to-transparent"
            : "opacity-0 h-0 overflow-hidden") + ""
        }
      >
        <div className="mb-8">
          <h1 className=" font-extrabold text-2xl">{`"${project.title}"`}</h1>
          {project.company && (
            <h2 className=" text-white/90 text-lg">
              at <span className=" italic ">{project.company}</span>
            </h2>
          )}
          <h2
            className={!project.size ? "hidden" : ""}
          >{`Team size: ${project.size}`}</h2>
          <h2 className={project.size ? "hidden" : ""}>Solo</h2>
        </div>
        {project.buttons && (
          <div className="flex flex-wrap place-content-center mb-8">
            {project.buttons?.map((button, i) => Button(button))}
          </div>
        )}

        {project?.details?.map((detail) => (
          <div key={detail.title}>{Detail(detail)}</div>
        ))}
        <div className=" w-full clear-both">
          <Link
            to={project.title}
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            <button
              onClick={() => setShowingDetails(!showingDetails)}
              className="clear-both rounded-md text-xl px-4 py-4 mx-4  my-2 text-center border-2  text-white font-semibold hover:bg-white hover:text-slate-900 md:duration-300"
            >
              MINIMIZE ▲
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
