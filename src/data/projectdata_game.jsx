import React from "react";
import details from "./projectdata_game_details"


const projects = [
  {
    imgURL: require("../assets/thumbnails/toonshader.gif"),
    roles: "",
    date: "NOV 2022 - DEC 2022",
    skills: ["Unity", "Shaderlab", "HSLS"],
    desc: "A toon-shader I've been developing that allows customizability of (color, size, smoothness, intensity) of (shadows, specular light, rim light). This customizability allows the user to blend between realistic/cartoony aesthetics. I hope to use this shader in future projects!",
    title: "Customizable Toon Shader",
    details: details.toonShader,
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
    date: "MARCH 2022 - APRIL 2022",
    roles: "Project Lead, Programmer, 2D Artist",
    size: 6,
    skills: ["Unity", "C#"],
    desc: "A top-down shooter/dungeon exploration videogame themed around music, that I pitched at UCI's videogame development club. I programmed the procedurally generated dungeon and enemy AI scripts to be maintainable, modular, and reusable. I was a middleground between programming, art, and sound in the creation of this fun, aesthetic, and cohesive experience!",
    title: "Musical Madness",
    details: details.musicalMadness,
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
    date: "SEP 2021 - APRIL 2022",
    roles: "Programmer, VFX",
    skills: ["Unity", "C#"],
    desc: '"an accredited project of VR puzzle, Bio-Educational game aimed to create a stimulating and educational experience for the uncovering of epidemiology in a sci-fi setting."  I fixed bugs pertaining to UI, and implemented the UI for tooltips and pause menu.',
    title: "Hughes Media & Design Lab: Patient Zero",
    details: details.patientZero,
    buttons: [
      { label: "Itch.io", url: "https://amily.itch.io/patient-zero" },
      {
        label: "Source Code",
        url: "https://github.com/hungbuiwork/art-bio199_patientzero",
      },
    ],
  },
  {
    imgURL: require("../assets/thumbnails/phantomhallowseve.gif"),
    roles: "2D & Technical Artist",
    date: "SEP 2022",
    skills: ["Unity", "C#", "Asesprite"],
    desc: "A cozy and spooky puzzle game! For the 2022 Cozy Autumn 2-week Game Jam, I collaborated with a team of 8, creating 2D sprite art, lighting, postprocessing effects, and 2D VFX in Unity.",
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
