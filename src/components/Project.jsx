import React from "react";

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

const Project = (props) => {
  const project = props.project;
  const color = props.color;
  console.log(color);
  return (
    <div className={"m-[10%] rounded-md border-white flex flex-col md:flex-row justify-between p-6 drop-shadow-2xl " + color}>
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
  );
};

export default Project;
