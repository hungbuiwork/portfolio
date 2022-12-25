const projects = {
  toonShader: {
    imgURL: require("../assets/thumbnails/toonshader.gif"),
    roles: "",
    date: "NOV 2022 - DEC 2022",
    skills: ["Unity", "Shaderlab", "HSLS"],
    desc: "A toon-shader I've been developing that allows customizability of (color, size, smoothness, intensity) of (shadows, specular light, rim light). This customizability allows the user to blend between realistic/cartoony aesthetics. I hope to use this shader in future projects!",
    title: "Customizable Toon Shader",
    details: [
      {
        image: require("../assets/thumbnails/toonShader_scene.jpeg"),
        title: "Background",
        description:
          "The end of fall quarter 2023 is nearing, and the final for my Introduction to Computer Science is very open-ended. So, I decided for my project that I wanted to expand on what I learned about vertex and fragment shading! I have a love for cartoon styled graphics, and make games, so why not make a shader which does just that?",
      },
      {
        image: require("../assets/thumbnails/toonShader_house.jpeg"),
        title: "Development",
        description:
          'I implemented diffuse shading, specular light, rim light, outlines, and shadowmapping. I took a very iterative approach, sitting down and taking time to REALLY understand the techniques behind how these affects are attained. I go into much more detail in the "Development Process" pdf above!',
      },
      {
        title: "What I learned",
        description:
          "I now have a much better understanding of vertice shaders, fragment shaders, the linear algebra behind shading techniques, how colors blend, world-space vs screen-space and more. ",
      },
    ],
    buttons: [
      { label: "Dev Process", url: require("../assets/pdfs/Toon_Shader.pdf") },
      {
        label: "Source Code",
        url: "https://github.com/hungbuiwork/Toon-Shader/blob/main/Assets/ToonShader%20Materials/HBToon.shader",
      },
    ],
  },

  musicalMadness: {
    imgURL: require("../assets/thumbnails/musicalmadness.gif"),
    date: "MARCH 2022 - APRIL 2022",
    roles: "Project Lead, Programmer, 2D Art",
    size: 6,
    skills: ["Unity", "C#"],
    desc: "A top-down shooter/dungeon exploration videogame themed around music, that I pitched at UCI's videogame development club. I programmed the procedurally generated dungeon and enemy AI scripts to be maintainable, modular, and reusable. I was a middleground between programming, art, and sound in the creation of this fun, aesthetic, and cohesive experience!",
    title: "Musical Madness",
    details: [
      {
        image: require("../assets/thumbnails/musicalMadness_drum.gif"),
        description:
          "After being part of several videogame projects in the past, I figured that I developed enough skills and understanding of the game development workflow. So, at the beginning of the spring quarter of 2022, my roommate and I ventured on a journey to pitch our own game to the Video Game Development Club. Inspired by other dungeon crawlers such as Binding of Isaac, I wanted the game to be thrilling, aesthetic, and to keep the gameplay fun and interesting! Also, I wanted to explore procedural generation, which has always intrigued me. So, I along with my roommate took on the challenge of leading the production of Musical Madness!",
        title: "Background",
      },
      {
        image: require("../assets/thumbnails/musicalMadness_map.jpeg"),
        description:
          "One gigantic emphasis of this project was to create maintainable, efficient, well-structured code. I had just taken a courses on good software design and data structured & algorithms, so it seemed to be the perfect time to apply what I learned! When working through on how our procedural generation was going to work, my roommate and I took a very careful and iterative approach, diagramming, writing pseudocode, and really taking time to understand what caused bugs and how to fix them. We later optimized our dungeon-building algorithm(storage-wise) by making heavy use of bitwise operations.",
        title: "Procedural Generation, Enemy AI, and Script Architecture",
      },
      {
        image: require("../assets/thumbnails/musicalMadness_architecture.jpeg"),
        description:
          "When it came to the overall script architecture, we figured that the player and enemies could be implemented sharing some scripts, such as stats, combat, and weapons scripts and only really differ in their input(keyboard vs AI) and their movement. Doing this allowed us to keep the code modular and reuse a lot of parts. When a new weapon was created, ANY entity could use it! This proved very useful when implementing the boss, which simply inherited from other enemy brains and used the same weapons. I further made optimizations to only spawn and update enemies in the current or adjacent room. This boosted performance a huge amount! I was the sole developer for the enemy's AI, and I created a system in which a scriptable object(the enemy's brain) which consisted of a bunch of set values, could produce very different behaviors(like the way violin enemies strafe, and the drum enemies charged before rolling toward you). This reduced the amount of code needed, and also helped when rapidly creating enemies with different behaviors.",
      },
      {
        description:
          "Leading the project proved to be challenging. I facilitated meetings where we discussed design, game-feel, assigned tasks, and reported progress. I took extra time outside of normal meetings to meet up with the sound team to help tackle challenges! In the end, we created a game that felt very fun, cohesive, and chaotic.",
        title: "Leading the Project",
      },
      {
        description:
          "I learned so much working on this project, even if it wasn't for the longest time. In terms of leadership, I think I could have improved by having much more efficient meetings, and being more realistic with the scope of the game. Furthermore, I learned a lot about good code design, creating UML diagrams to communicate to other programmers, much more about C#, Unity's scriptable objects, and more. I am so proud of what we created.",
        title: "What I learned",
      },
    ],
    buttons: [
      { label: "Play", url: "https://hungbui.itch.io/musicalmadness" },
      {
        label: "Source Code",
        url: "https://github.com/hungbuiwork/MusicalMadness",
      },
    ],
  },

  phantomHallowsEve: {
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

  patientZero: {
    imgURL: require("../assets/thumbnails/patientzero.jpeg"),
    size: 19,
    date: "SEP 2021 - APRIL 2022",
    roles: "Programmer, VFX",
    skills: ["Unity", "C#"],
    desc: '"an accredited project of VR puzzle, Bio-Educational game aimed to create a stimulating and educational experience for the uncovering of epidemiology in a sci-fi setting."  I fixed bugs pertaining to UI, and implemented the UI for tooltips and pause menu.',
    title: "Hughes Media & Design Lab: Patient Zero",
    details: [
      {
        image: require("../assets/thumbnails/patientZero_tooltip.gif"),
        title: "Background",
        description:
          "It was the fall quarter of 2021, my second year at UCI. I saw that Hughes Media & Design Lab was working on a VR research-based project which simulated a lab in which the player must find out what the disease is. After an interview, I was lucky enough to be able to join the team!",
      },
      {
        title: "What I implemented",
        description:
          "- A tooltip/hints 3D UI that pops up when the user picks up a tool. I tried to match the design with the aesthetics of the game. A small optimization I did was to reuse the same object, and simply hide it somewhere off the map when not in use.",
      },
      {
        description:
          "- I also implemented the game's post-processing to make the world feel more atmospheric and moody. This was especially important as the game is in VR.",
      },
      {
        description:
          "- A pause menu 3D UI that pops up when the pause button is pressed.",
      },
      {
        title: "Challenges/Takeaways",
        description:
          "With my knowledge of C# at the time, I found working on this project quite challenging. It was a continuation of a project that had been in development for quite some time, and the existing codebase was sometimes hard to work with, as there seemed to be not much thought behind the architecture of the scripts. So, I focused mainly on implementing new UI features, and doing minor bug fixes. Though the codebase was difficult to work with, I took notes of how this could be improved, and in the spring of 2022 created Musical Madness, with an emphasis on good code documentation, task communication, and code architecture!",
      },
    ],
    buttons: [
      { label: "Hughes Lab & Media", url: "https://hughesmedia.bio.uci.edu" },
      { label: "Itch.io", url: "https://amily.itch.io/patient-zero" },
      {
        label: "Source Code",
        url: "https://github.com/hungbuiwork/art-bio199_patientzero",
      },
    ],
  },

  jokeBrowser: {
    imgURL: require("../assets/thumbnails/JokeBrowser.gif"),
    roles: "",
    date: "NOV 2022",
    skills: ["Angular", "JS"],
    desc: "A joke browser I created that displays funny program jokes from JokeAPI, exploring an alternative form of interaction using HandTrackjs. Simply using your camera and hands, you can control the generation, viewing, and favoriting of jokes! Check it out!",
    title: "Joke Browser & Alternative Interaction",
    details: [
      {
        image: require("../assets/thumbnails/jokeBrowser_ui.jpeg"),
        title: "A little bit more",
        description:
          'This was one my last projects in my User Interaction course! It was a very open-ended project, so I built a little web app to browse through jokes! I created a service in angular to look up these jokes from JokeAPI, and use it in conjunction with HandTrackJS to make a web application where someone can just sit back, turn on their camera, and browser through ~programming~ jokes. My focus for this project was to create a reasonably aesthetic, intuitive interface, with hand controls that were also intuitive. The web app was definitely made for non-mobile browsers, but feel free to try it out as the app is usable in the "Demo" button above!',
      },
    ],
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
  },

  thisWebsite: {
    imgURL: require("../assets/thumbnails/website-art.gif"),
    roles: "",
    date: "DEC 2022",
    skills: ["React", "Tailwind CSS", "JS"],
    desc: "A portfolio website, where I showcase my projects, and art! Developed by myself from scratch over winter break. I learned a lot about react, and responsive design!",
    title: "This Website !",
    details: [
      {
        image: require("../assets/thumbnails/website.gif"),
        title: "Why?",
        description:
          "I am programming this from scratch. No templates -- just the ReactJS framework, the TailwindCSS framework, and my two hands. I had some extra time this winter break so I decided to redo my portfolio again. My first portfolio was on Adobe Portfolio. My second was plain HTML, and CSS. Though the customizability of plain HTML and CSS was nice, adding new stuff was just repetitive, ugly, and became increasingly harder to read. I wanted to create components that I could customize, and reuse. Currently, I am writing this sentence in a file, fully separate from any HTML, and it feels nice.",
      },
      {
        title: "What I am learning",
        description:
          "This is currently a work in progress, but I'm learning a lot of things as I work through this. This is my first project using the React framework and Tailwind. I am experimenting a lot with how I want my website to be laid out, and how to implement responsiveness that looks nice on several different devices. So far, I really like react, and love how fast I can iterate with Tailwind(though, I do plan to clean the CSS up in the future)...",
      },
    ],
    buttons: [
      {
        label: "Source Code",
        url: "https://github.com/hungbuiwork/portfolio",
      },
    ],
  },
};
export default projects;
