const details = {
  musicalMadness: [
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
  toonShader: [
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
  patientZero:[{
    title: "Background",
    description: "It was the fall quarter of 2021, my second year at UCI. I saw that Hughes Media & Design Lab was working on a VR research-based project which simulated a lab in which the player must find out what the disease is. After an interview, I was lucky enough to be able to join the team!"
  },   
    {
    image: require('../assets/thumbnails/patientZero_tooltip.gif'),
    title: "What I implemented",
    description: "- A tooltip/hints 3D UI that pops up when the user picks up a tool. I tried to match the design with the aesthetics of the game. A small optimization I did was to reuse the same object, and simply hide it somewhere off the map when not in use.",
  },{
    description: "- I also implemented the game's post-processing to make the world feel more atmospheric and moody. This was especially important as the game is in VR."
  },
  {
    description: "- A pause menu 3D UI that pops up when the pause button is pressed."
  },
  {
    title: "Challenges/Takeaways",
    description: "With my knowledge of C# at the time, I found working on this project quite challenging. It was a continuation of a project that had been in development for quite some time, and the existing codebase was sometimes hard to work with, as there seemed to be not much thought behind the architecture of the scripts. So, I focused mainly on implementing new UI features, and doing minor bug fixes. Though the codebase was difficult to work with, I took notes of how this could be improved, and in the spring of 2022 created Musical Madness, with an emphasis on good code documentation, task communication, and code architecture!"
  }
]
};

export default details;
