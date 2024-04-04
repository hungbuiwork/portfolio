const projects = {

  procedurallyGeneratedTrees:{
    vidURL:require("../assets/thumbnails/Proceduraltree.mp4"),
    roles: "",
    data: "May 2023",
    skills: ["Unity", "C#"],
    desc: "Customizable, procedurally generated trees generated from simple rules using Lindenburg Systems. Implemented from scratch in Unity and C#.",
    title: "Procedural Tree Generator",
    details: [
      {
        title: "Read the Dev Process",
        description: "I strongly recommend reading the Dev Process above! It goes into detail about my workflow throughout the project.",
      },
      {
        image: require("../assets/thumbnails/proceduraltree2.png"),
        title: "Development",
        description:
          'For a while, I have had a huge affinity for procedural generation. A lot of research went into understanding how L-systems work, which is a commonly used to strategy to visualize procedural plant development, fractals, etc. After researching, I implemented a developer-friendly L-System generator and L-System renderer which I hope to soon publish to the Asset Store. I go into much more detail in the "Development Process" pdf above!',
      },
      {
        vid: require("../assets/thumbnails/Proceduraltreedemo.mp4"),
        title: "What I learned",
        description:
          "I'm very proud of this projects because I was able to implement this without really looking at any tutorials or code; I purely built this off of research. I became much more familiar with Unity's tools and much more comfortable implementing C#. I refined my probem-solving skills by creating a solution for rendering foliage and animation. ",
      },
    ],
    buttons: [
      { label: "Dev Process", url: require("../assets/pdfs/ProceduralTrees.pdf") },
      {
        label: "Source Code",
        url: "https://github.com/hungbuiwork/ProceduralTrees/blob/main/Assets/Scripts/LSystemRenderer.cs",
      },
    ],
  },

  toonShader: {
    vidURL: require("../assets/thumbnails/toonshader.mp4"),
    roles: "",
    date: "NOV 2022 - DEC 2022",
    skills: ["Unity", "Shaderlab", "HSLS"],
    desc: "A toon-shader I've been developing that allows customizability of (color, size, smoothness, intensity) of (shadows, specular light, rim light). This customizability allows the user to blend between realistic/cartoony aesthetics. I hope to use this shader in future projects!",
    title: "Customizable Toon Shader",
    details: [
      {
        title: "Read the Dev Process",
        description: "I strongly recommend reading the Dev Process above! It goes into detail about my workflow throughout the project.",
      },
      {
        image: require("../assets/thumbnails/toonShader_scene.jpeg"),
        title: "Background",
        description:
          "The end of fall quarter 2023 is nearing, and the final for my Introduction to Computer Graphics is very open-ended -- we were asked to create something in any field of graphics! So, I decided for my project that I wanted to expand on what I learned about vertex and fragment shading! I have a love for cartoon styled graphics, and make games, so why not make a shader which does just that?",
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
    vidURL: require("../assets/thumbnails/musicalmadness.m4v"),
    date: "MARCH 2022 - APRIL 2022",
    roles: "Project Lead, Programmer, 2D Art",
    size: 6,
    skills: ["Unity", "C#"],
    desc: "A music-themed top-down shooter/dungeon exploration video game that I created with UCI's Video Game Development Club. For this project, I developed the procedurally generated dungeon and enemy AI scripts with a focus on maintainability, modularity, and reusability. I played a pivotal role bridging the gap between programming, art, and sound to ensure the creation of an enjoyable, visually appealing, and cohesive gaming experience!",
    title: "Musical Madness",
    details: [
      {
        vid: require("../assets/thumbnails/musicalmadness2.mp4"),
        description:
          "After being part of several videogame projects in the past, I figured that I developed enough skills and understanding of the game development workflow. So, at the beginning of the spring quarter of 2022, my roommate and I ventured on a journey to pitch our own game to the Video Game Development Club. Inspired by other dungeon crawlers such as Binding of Isaac, I wanted the game to be thrilling, aesthetic, and to keep the gameplay fun and interesting! Also, I wanted to explore procedural generation, which has always intrigued me. So, I along with my roommate took on the challenge of leading the production of Musical Madness!",
        title: "Background",
      },
      {
        image: require("../assets/thumbnails/musicalMadness_map.jpeg"),
        description: "This project focused on creating efficient, well-structured code. After completing relevant courses on software design and algorithms, we applied our knowledge. When designing our procedural generation system, my roommate and I took a careful, iterative approach. We used diagrams, pseudocode, and troubleshooting to understand and address bugs. Later, we improved our dungeon-building algorithm's memory efficiency by using bitwise operations extensively.",
        title: "Procedural Generation, Enemy AI, and Script Architecture",
      },
      {
        image: require("../assets/thumbnails/musicalMadness_architecture.jpeg"),
        description: "When it came to designing the overall script architecture, we decided to streamline the implementation of both players and enemies by sharing certain scripts, such as those responsible for managing statistics, combat mechanics, and weapons. The key distinction between them lay in their input methods (keyboard for players, AI for enemies) and their movement patterns. This approach enabled us to maintain a modular codebase and efficiently reuse various components. An exciting benefit of this design was that any entity could seamlessly utilize newly created weapons. This flexibility proved invaluable when implementing the boss character, as it simply inherited behaviors from other enemy types and employed the same arsenal. Furthermore, I implemented optimizations to enhance performance by limiting enemy spawning and updates to the current room or adjacent ones. This optimization significantly improved our game's performance. As the sole developer responsible for the enemy AI, I devised a system that utilized scriptable objects known as 'enemy brains.' These objects comprised a set of predefined values, which in turn generated diverse behaviors. This approach not only reduced the amount of code required but also facilitated the rapid creation of enemies with distinct behaviors. For instance, it allowed us to easily differentiate the strafing behavior of violin enemies from the charging and rolling tactics of drum enemies."
        
        
        
        
        
        
      },
      {
        description:
          "Leading the project proved to be challenging. I facilitated meetings where we discussed design, game-feel, assigned tasks, and reported progress. I took extra time outside of normal meetings to meet up with the sound team to help tackle challenges!  Ultimately, we developed a game that was enjoyable, cohesive, and full of fun chaos.",
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
    size: 19,
    date: "SEP 2021 - APRIL 2022",
    roles: "Programmer, VFX",
    skills: ["Unity", "C#"],
    desc:"As a Game Programmer for \"Patient Zero,\" an accredited VR bio-educational puzzle game, I collaborate with a skilled team of programmers, artists, writers, and game designers. Our aim is to offer players a captivating sci-fi experience while teaching epidemiology principles. My tasks include fixing UI bugs and implementing essential elements like tooltips and pause menus to enhance the player's experience." ,
    title: "Game UI Programmer",
    company: "Hughes Media & Design Lab",

    details: [
      {
        image: require("../assets/thumbnails/patientzero.jpeg"),
        title: "Background",
        description:
          "It was the fall quarter of 2021, my second year at UCI. I saw that Hughes Media & Design Lab was working on a VR research-based project which simulated a lab in which the player must find out what the disease is. After an interview, I was lucky enough to be able to join the team!",
      },
      {
        title: "What I implemented",
        vid: require("../assets/thumbnails/patientZero_tooltip.mp4"),
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
      { label: "The Game", url: "https://amily.itch.io/patient-zero" },
    ],
  },

  jokeBrowser: {
    imgURL: require("../assets/thumbnails/JokeBrowser.gif"),
    roles: "",
    date: "NOV 2022",
    skills: ["AngularJS", "Javascript"],
    desc: "A joke browser I created that displays funny program jokes from JokeAPI, exploring an alternative form of interaction using HandTrackjs. Simply using your camera and hands, you can control the generation, viewing, and favoriting of jokes! Check it out!",
    title: "Joke Browser & Alternative Interaction",
    details: [
      {
        image: require("../assets/thumbnails/jokeBrowser_ui.jpeg"),
        title: "A bit more",
        description:'This project marked one of my final assignments in the User Interaction course. It was a highly flexible task, so I decided to develop a web application for browsing jokes. I designed this app using Angular, incorporating a service to fetch jokes from JokeAPI and integrating HandTrackJS for an interactive experience. Users could simply relax, activate their camera, and explore programming jokes. My primary goal was to craft an aesthetically pleasing and user-friendly interface, along with intuitive hand controls. Although the web app is more suitable for non-mobile browsers, you can still give it a try by clicking the "Demo" button above!',
      }
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

  zotDev: {
    imgURL: require("../assets/thumbnails/zotdev_thumbnail.png"),
    roles: "Gameplay Programmer & UI Programmer",
    date: "MAR 2023 - JUN 2023",
    skills: ["Unity", "C#"],
    desc: "Arriving as a freshman college student, you are excited to start the program of your dreams entering the Game Development Major and the Video Game Development Club.",
    title: "Zot Dev",
    details: [
      {
        image: require("../assets/thumbnails/zotdev_sleep.png"),
        title: "To Do",
        description:'in progress...',
      }
    ],
    buttons: [
      {
        label: "Source Code",
        url: "https://github.com/Dg155/UCIGameDevTycoon",
      },
      {
        label: "Play",
        url: "https://dg155.itch.io/zot-dev",
      },
    ],
  },

  thisWebsite: {
    vidURL: require("../assets/thumbnails/website-art.mp4"),
    roles: "",
    date: "DEC 2022",
    skills: ["React", "TailwindCSS", "Javascript"],
    desc: "A portfolio website, where I showcase my projects, and art! Developed by myself from scratch over winter break. I learned a lot about react, and responsive design!",
    title: "This Website !",
    details: [
      {
        image: require("../assets/thumbnails/website.gif"),
        title: "Why am I doing this?",
        description:
          "I am programming this from scratch. No templates -- just the ReactJS framework, the TailwindCSS framework, and my two hands. I had some extra time this winter break so I decided to redo my portfolio again. My first portfolio was on Adobe Portfolio. My second was plain HTML, and CSS. Though the customizability of plain HTML and CSS was nice, adding new stuff was just repetitive, ugly, and became increasingly harder to read. I wanted to create components that I could customize, and reuse.",
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

  capstoneArchive: {
    date: "SEP 2023 - JAN 2024",
    skills: ["ReactJS", "TailwindCSS", "Typescript", "Jira"],
    roles: ["Scrum Master", "Full-Stack Developer"],
    size: 5,
    title: "UCI Capstone Archive v1",
    desc: "New archival system for UCI Capstone Projects built from scratch, with upload, display, and search features, geared towards attracting to UCI's Capstone program.  UCI faculty assigned us this project and is to be worked on by future students to implement into the official UCI website.",
    vidURL: require('../assets/thumbnails/capstoneArchive.mp4'),
    company: "UCI Informatics Dpt.",
    details: [
      {
        title: "Backlog Creation & Planning",
        description: "Starting the project from scratch involved having in-depth discussions with stakeholders to grasp their expectations. I took the lead in discussions with faculty members, noting down their requirements and preferences. Before each meeting, I prepared a set of relevant questions, covering use cases, user stories, and trade-offs between project thoroughness and ease of use. These discussions were then compiled into a comprehensive requirements document, serving as a practical guide for implementation."
       },
       {
        title: "Use cases",
        description: "Adopting a software engineering mindset involved placing myself in the shoes of potential users. Deliberations revolved around crucial decisions, such as prioritizing the display of company name or project image. Understanding the needs of industry partners, faculty members,  and students, I delved into questions regarding the amount of information preferred in each project. This perspective played a pivotal role in shaping the user-centric aspects of the project."
       },
       {
       title: "Project Leading",
       description: "Navigating the challenges of project leadership provided invaluable learning experiences. Assessing evolving requirements, organizing them into a backlog, and strategically assigning tasks based on skills and availability were crucial responsibilities. Extensive planning was employed to mitigate merge conflicts and task overlap, emphasizing the importance of robust communication. Despite the complexities, the team successfully implemented numerous features within a single quarter.",
       },
       {
        title: "Implementation",
        description: "Contributing to the project's development, I personally implemented key features such as the responsive project search page, project component, routing, individual project page, upload form CSS, and the suggested projects tab for searching adjacent projects. Breaking down the front-end and back-end into organized components facilitated a cohesive and efficient coding process."
       },
       {
        title: "Learning Points",
        description: "Overall, I found it important to learn various aspects. Regarding the agile process, I found it important to plan early, ask a lot of clarifying questions, assess your team's skills, and approximate the time of tasks. Concerning the software design process, I found it important to make use of user stories, plan out the structure of the code before implementing, and talk to multiple stakeholders, as some had differing opinions. In terms of implementation, I found it important to break code down into components and document what you write.",
       }
    ],
    buttons: [
      {
        label: "Live Demo",
        url: "https://hungbuiwork.github.io/capstone-archive/",
      },
      {
        label: "Requirements Document",
        url: "https://docs.google.com/document/d/10vIFHweKmLg4ncYmA97udMbRj0zmnqgtXvflhPrLlLE/edit?usp=sharing",
      }
    ]
  },

  wartorn: {
    date: "SEP 2023 - CURRENT",
    skills: ["Unreal", "VFX", "Agile"],
    roles: ["Art Lead", "Lighting Artist", "VFX & Shader Artist"],
    title: "Wartorn",
    size: 19,
    desc: "A 3D narrative game where players take on the role of a young girl navigating the aftermath of a war attack. Through the use of lighting, visual effects, and dialogue, the game skillfully tells a story that explores themes of early maturing.",
    details: [
      {
        title: "IN PROGRESS, check back again later for a full report as well as the DEMO link!",
       },
    ],

  },

  whatCares: {
    date: "JULY 2023 - CURRENT",
    skills: ["React", "TailwindCSS"],
    desc: "I am currently developing an informative website for WhatCares, which stands for World Health Access Team, a nonprofit organization comprising medical professionals actively conducting medical missions worldwide. The primary focus of this ongoing project is to create a website specifically tailored to engage potential donors and supporters. The site is not deployed as of yet, but soon check again soon!",
    title: "Freelance Website Developer",
    company: "WHAT Cares"
    
  },
  gdim: {
    date: "FEB 2023 - JUN 2023",
    skills: ["HTML", "CSS", "Figma"],
    desc: "In my current role as a Website Design Intern for UCI's Game Development & Interactive Media program, I collaborate closely with esteemed faculty members -- tasked with crafting user-friendly informational user interfaces and developing websites tailored to convey class-related information and a website to showcase student-made games.",
    title: "Website Design Intern | UCI GDIM",
    company: "UCI Game Design & Interactive Media",
    details: [
      {
        image:  require("../assets/thumbnails/GDC-Flyer.png"),
        title: "What I do",
        description: "In my work, I collaborate with faculty to discuss tasks and projects, incorporating design feedback and iterating on designs as needed. For instance, I created a flyer in Figma for the Game Developer's Conference 2023 to boost awareness of the GDIM (Game Development & Interactive Media) major. ",
      },
      {
        description: "I also create HTML and CSS syllabus websites on demand. Currently, I'm working with faculty to develop a website showcasing select student projects.",
      }
    ],
  }
};


export default projects;
