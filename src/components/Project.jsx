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

const MediaRenderer = ({ src, className = "" }) => {
  if (!src) return null;

  // Extract file extension
  const extension = src.split(".").pop().toLowerCase();

  // Common image and video extensions
  const imageTypes = ["jpg", "jpeg", "png", "gif", "webp", "svg", "ico"];
  const videoTypes = ["mp4", "webm", "ogg", "mov"];

  if (imageTypes.includes(extension)) {
    return <img src={src} alt="" className={className} />;
  }

  if (videoTypes.includes(extension)) {
    return (
      <video src={src} className={className} loop autoPlay muted>
        Your browser does not support the video tag.
      </video>
    );
  }

  // If extension is unrecognized
  return <p>Unsupported media type: {extension}</p>;
};

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
      <div className=" text-gray-300">
        <h1 className="font-bold text-xl mb-4 text-left">{detail?.title}</h1>
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
        "  rounded-md px-0 py-4  lg:p-6 border-none  drop-shadow-2xl" +
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
                  className={` ${
                    showingDetails ? "hidden" : ""
                  } rounded-md text-xl px-4 py-4  my-4 text-center border-2  text-white font-semibold hover:bg-white hover:text-slate-900 md:duration-300 relative top-0  md:hover:top-2`}
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
            ? "text-white  mt-8 text-center h-auto opacity-100 rounded-lg p-4 bg-gradient-to-b from-black to-slate-900/50 pt-12"
            : "opacity-0 h-0 overflow-hidden") + ""
        }
      >
        <div className="  mx-auto">
          <div className=" grid grid-cols-3 gap-x-8">
            <div className="col-span-full flex  justify-between gap-4 px-8 border-b-2 border-purple-700 pb-4 mb-4">
              <h3 className=" font-bold text-4xl text-left">
                More Info on {project.title}
              </h3>
              <div>
                {project.buttons && (
                  <div className="flex  gap-4">
                    {project.buttons?.map((button, i) => (
                      <a
                        className="text-black bg-white py-4 px-6 rounded-xl hover:bg-transparent border-2 transition-all duration-300 hover:text-white rounded-tr-none font-bold text-2xl"
                        target="blank"
                        href={button.url}
                      >
                        {button.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className=" col-span-full md:col-span-1 border-2 flex flex-col gap-4 border-slate-900 bg-black p-2 rounded-lg border-dashed">
              {project?.media?.map((src, i) => (
                <MediaRenderer
                  key={i}
                  src={src}
                  className="border-2 rounded-lg"
                />
              ))}
              {project?.details?.map((detail) => (
                <>
                  {detail.image && (
                    <img
                      src={detail?.image}
                      className="border-2 rounded-lg"
                    ></img>
                  )}
                  {detail.vid && (
                    <video
                      src={detail.vid}
                      loop
                      autoPlay
                      muted
                      className="border-2 rounded-lg"
                    ></video>
                  )}
                </>
              ))}
            </div>
            <div className=" col-span-full md:col-span-2">
              {project?.details?.map((detail) => (
                <div key={detail.title}>{Detail(detail)}</div>
              ))}
              <div className="flex col-span-full md:col-span-2">
                <Link
                  to={project.title}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className="w-full"
                >
                  <button
                    onClick={() => setShowingDetails(!showingDetails)}
                    className="clear-both w-full rounded-md text-xl px-4 py-4  my-2 text-center border-2  text-white font-semibold hover:bg-white hover:text-slate-900 md:duration-300"
                  >
                    MINIMIZE ▲
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
