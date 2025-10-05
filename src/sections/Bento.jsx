import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ItchIoLogo from "../assets/logos/itchio-logo-textless-white.png";
import InfiniteCarousel from "../components/InfiniteCarousel";
import UCILogo from "../assets/logos/UCI.png";

const BentoCell = ({ children, className }) => {
  return (
    <div
      className={
        "h-full w-full shadow-md   rounded-lg duration-300 " + className
      }
    >
      {" "}
      {children}
    </div>
  );
};

const Bento = () => {
  return (
    <div className=" min-h-[100vh] flex justify-center sporo bg-cover">
      <div className="w-[min(90vw,1400px)] my-12 gap-3 grid grid-cols-12 grid-rows-7 ">
        <BentoCell className={"row-span-1 col-span-3 "}>
          <div className="flex justify-between h-full align-middle gap-2 ">
            <div className=" bg-blue-600 flex-1  p-4  rounded-md">
              <a
                href="https://www.linkedin.com/in/hung-bui-06ab67208/"
                target="_blank"
                className="text-white"
              >
                <FaLinkedin className="h-full w-full"></FaLinkedin>
              </a>
            </div>
            <div className=" bg-purple-600 flex-1  p-4  rounded-md">
              <a
                href="https://github.com/hungbuiwork/"
                target="_blank"
                className="text-white"
              >
                <FaGithub className="h-full w-full"></FaGithub>
              </a>
            </div>
            <div className=" bg-red-500 flex-1  p-4  flex items-center rounded-md">
              <a
                href="https://www.linkedin.com/in/hung-bui-06ab67208/"
                target="_blank"
                className="text-white "
              >
                <img src={ItchIoLogo} className=" aspect-square"></img>
              </a>
            </div>
          </div>
        </BentoCell>
        <BentoCell
          className={
            "row-span-2 col-span-3 bg-[#255799] border-blue-400 border-2 text-[#fecc07]  shadow-2xl shadow-blue-600 p-4 flex flex-col items-center justify-center"
          }
        >
          <h2 className="font-extrabold text-3xl">UC Irvine</h2>
          <p>2020 - 2024</p>
          <br></br>
          <img src={UCILogo} className="h-32"></img>
          <br />
          <p> B.S. in Computer Science</p>
          <p> B.S. in Game Design</p>
          <p>GPA 3.94 | Cum Laude</p>
        </BentoCell>
        <BentoCell
          className={
            "row-span-2 col-span-6 glass-bento p-4 flex flex-col justify-center gap-8 shadow-2xl shadow-emerald-400/50"
          }
        >
          <InfiniteCarousel className={"fade-edges py-2"}>
            <div className="flex gap-12">
              <Skill
                name="Python"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              />
              <Skill
                name="C#"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              />
              <Skill
                name="C++"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              />
              <Skill
                name="JavaScript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <Skill
                name="TypeScript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              />
              <Skill
                name="HTML5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
              <Skill
                name="React"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <Skill
                name="NextJS"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              />
              <Skill
                name="CSS"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />

              <Skill
                name="TailwindCSS"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              />
              <Skill
                name="Fastapi"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
              />
            </div>
          </InfiniteCarousel>
          <InfiniteCarousel reverse={true} className={"fade-edges py-2"}>
            <div className="flex gap-12">
              <Skill
                name="Unity"
                className=""
                src="https://img.icons8.com/?size=2x&id=39848&format=png"
              />
              <Skill
                name="Unreal Engine"
                className=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original-wordmark.svg"
              />

              <Skill
                name="Git"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
              />
              <Skill
                name="Jira"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg"
              />
              <Skill
                name="Trello"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg"
              />
              <Skill
                name="Canva"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
              />
              <Skill
                name="Figma"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              />
            </div>
          </InfiniteCarousel>
        </BentoCell>
        <BentoCell
          className={
            "row-span-1 col-span-3 flex  justify-center glass-bento shadow-2xl shadow-blue-400/70"
          }
        >
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-bold">⚙️ Engineer by craft</h3>
            <h3 className=" text-lg font-bold">𓂃🖌 Artist at heart</h3>
          </div>
        </BentoCell>
        <BentoCell
          className={
            "row-span-3 col-span-3 me bg-cover bg-center border-white border-2"
          }
        ></BentoCell>
        <BentoCell
          className={
            "row-span-3 col-span-6 flex flex-col justify-center px-14 glass-bento shadow-2xl shadow-purple-400 "
          }
        >
          <h2 className="text-4xl font-extrabold ">Hung Bui</h2>
          <h3 className="leading-loose text-2xl">Software Engineer</h3>
          <p className="text-xl ">
            Hi! I’m a software engineer passionate about building impactful
            products and crafting beautiful, user-focused experiences through
            creative problem-solving.
          </p>
        </BentoCell>
        <BentoCell className={"row-span-3 col-span-3"}>
          Where I've worked
        </BentoCell>
        <BentoCell className={"row-span-2 col-span-6"}>Projects</BentoCell>
        <BentoCell className={"row-span-2 col-span-6"}>
          Other stuff I've made
        </BentoCell>
      </div>
    </div>
  );
};

const Skill = ({ name, src, size = 80, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center m-2 hover:scale-110 transition-transform duration-500 ${
        className || ""
      }`}
      style={{
        width: typeof size === "number" ? `${size}px` : size,
        height: typeof size === "number" ? `${size}px` : size,
      }}
    >
      {/* Icon / Image */}
      {src ? (
        <img
          alt={name}
          src={src}
          className="h-full w-full object-contain"
          draggable="false"
        />
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <h1 className="text-sm font-semibold">{name}</h1>
        </div>
      )}

      {/* Label underneath */}
      <p className="mt-2 text-xs font-medium text-white text-center select-none">
        {name}
      </p>
    </div>
  );
};

export default Bento;
