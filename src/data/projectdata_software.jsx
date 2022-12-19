import React from "react";
import details from "./projectdata_software_details"

const projects = [
  {
    imgURL: require("../assets/thumbnails/website.gif"),
    roles: "",
    date: "DEC 2022",
    skills: ["React", "Tailwind CSS", "JS"],
    desc: "A portfolio website, where I showcase my projects, and art! Developed by myself from scratch over winter break. I learned a lot about react, and responsive design!",
    title: "This Website !",
    details: details.portfolio,
    buttons: [
        {
        label: "Source Code",
        url: "https://github.com/hungbuiwork/portfolio",
      },
    ],
  },
  {
    imgURL: require("../assets/thumbnails/JokeBrowser.gif"),
    roles: "",
    date: "NOV 2022",
    skills: ["Angular", "JS"],
    desc: "A joke browser I created that displays funny program jokes from JokeAPI, exploring an alternative form of interaction using HandTrackjs. Simply using your camera and hands, you can control the generation, viewing, and favoriting of jokes! Check it out!",
    title: "Joke Browser & Alternative Interaction",
    details: details.jokeBrowser,
    buttons: [
        {
        label: "Source Code",
        url: "https://github.com/hungbuiwork/JokeWebApp/blob/main/README.md",
      },
      {
        label: "Demo",
        url: "https://hungbuiwork.github.io/JokeWebApp/",
      },
    ],
  }
];
export default projects;
