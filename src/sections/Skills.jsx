import React from "react";
import { Skill } from "../components/Skill";
import { Slide } from "../animations/Slide.tsx";

const Skills = () => {
  return (
    <div id="skills" className="mb-20">
      <h1 className="text-white text-center font-bold text-6xl underline decoration-violet-600 mt-8 ">
        Skills
      </h1>
      <h2 className="text-gray-300 text-center mx-[10%] text-lg mt-4 mb-8">
        These are some skills I've cultivated throughout my experiences in
        software. <br></br>
        <span className="badge badge-success"></span> = more experienced in
      </h2>
      <div className="flex justify-center">
        <Slide x={0} y={200} className="m-auto">
          <div className="skills  flex justify-evenly sm:text-sm md:text-xl">
            <div className="flex flex-col">
              <h1 className=" leading-loose">Languages</h1>
              <div className="flex flex-wrap justify-center">
                <Skill
                  name="Python"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  mark="T"
                ></Skill>
                <Skill
                  name="C#"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  mark="T"
                ></Skill>
                <Skill
                  name="HTML5"
                  mark="T"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                ></Skill>
                <Skill
                  name="CSS"
                  mark="T"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                ></Skill>
                <Skill
                  name="Javascript"
                  mark="T"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                ></Skill>
                <Skill
                  name="Typescript"
                  mark="T"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                ></Skill>
                <Skill
                  name="C++"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  mark=""
                ></Skill>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className=" leading-loose">Frameworks</h1>
              <div className="flex flex-wrap j justify-center mx-4">
                <Skill
                  name="React"
                  mark="T"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                ></Skill>
                <Skill
                  name="NextJS"
                  mark="T"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                ></Skill>

                <Skill
                  name="AngularJS"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                ></Skill>
                <Skill
                  name="TailwindCSS"
                  mark="T"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                ></Skill>
                <Skill
                  name="Fastapi"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
                ></Skill>
              </div>
              <h1 className=" leading-loose">Game Engines</h1>
              <div className="flex flex-wrap j justify-center mx-4">
                <Skill
                  name="Unity"
                  mark="T"
                  className="bg-white"
                  src="https://img.icons8.com/?size=2x&id=39848&format=png"
                ></Skill>
                <Skill
                  name="Unreal Engine"
                  className="bg-white"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original-wordmark.svg"
                ></Skill>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className=" leading-loose">Other</h1>
              <div className="flex flex-wrap j justify-center mx-4">
                <Skill
                  name="Git"
                  mark="T"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
                ></Skill>
                <Skill
                  name="Canva"
                  mark="T"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
                ></Skill>
                <Skill
                  name="Jira"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg"
                ></Skill>
                <Skill
                  name="Trello"
                  mark="T"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg"
                ></Skill>
                <Skill
                  name="Figma"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                ></Skill>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Skills;
