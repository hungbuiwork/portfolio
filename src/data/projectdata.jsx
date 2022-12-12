import React from "react";

const projects = [
  {
    imgURL: require("../assets/thumbnails/toonshader.gif"),
    roles: "",
    skills: ["Unity", "Shaderlab", "HSLS"],
    desc: "A toon-shader I've been developing that allows customizability of (color, size, smoothness, intensity) of (shadows, specular light, rim light). This customizability allows the user to blend between realistic/cartoony aesthetics. Currently does not support cast shadows, but I am working on it!",
    title: "Customizable Toon Shader",
    buttons: [
      { label: "Dev Process", url: require("../assets/pdfs/Toon_Shader.pdf") },
      {
        label: "Source Code",
        url: "https://github.com/hungbuiwork/Toon-Shader/blob/main/Assets/ToonShader%20Materials/HBToon.shader",
      },
    ],
  },
  {
    imgURL: require("../assets/thumbnails/musicalmadness.gif"),
    roles: "Project Lead, Programmer, 2D Artist",
    skills: ["Unity", "C#"],
    desc: "a top-down shooter/dungeon exploration videogame themed around music. Playing as a musician, your goal is to restore musical harmony! How? Navigate through the intricate, ever-changing dungeon, using musical weapons and abilities to fight the corrupted instruments, cleansing their souls!",
    title: "Musical Madness",
    buttons: [
      { label: "Play", url: "https://hungbui.itch.io/musicalmadness" },
      {
        label: "Source Code",
        url: "https://github.com/hungbuiwork/MusicalMadness",
      },
    ],
  },
  {
    imgURL: require("../assets/thumbnails/patientzero.jpeg"),
    roles: "Programmer, VFX",
    skills: ["Unity", "C#"],
    desc: "an accredited project of VR puzzle, Bio-Educational game aimed to create a stimulating and educational experience for the uncovering of epidemiology in a sci-fi setting.",
    title: "Hughes Media & Design Lab: Patient Zero",
    buttons: [
      { label: "Itch.io", url: "https://amily.itch.io/patient-zero" },
      {
        label: "Source Code",
        url: "https://github.com/hungbuiwork/art-bio199_patientzero",
      },
    ],
  },
  {
    imgURL: require("../assets/thumbnails/phantomhallowseve.png"),
    roles: "2D & Technical Artist",
    skills: ["Unity", "C#"],
    desc: "Cleo's got a new job at Phantom Hallows' Eve, the number-one destination for seasonal spooks and delights. The thought of working Halloween retail has her feeling pretty unenthusiastic, but perhaps there's more to this store than meets the eye... Explore the two parallel dimensions of Phantom Hallows' Eve, solve puzzles, and converse with spirits to lend them a hand in this cozy puzzle game.",
    title: "Phantom Hallow's Eve",
    buttons: [
      { label: "Play", url: "https://supriseorb.itch.io/phantom-hallows-eve" },
      {
        label: "Source Code",
        url: "https://github.com/hungbuiwork/Cozy-Autumn-Game-Jam-2022",
      },
    ],
  },
];
export default projects;
