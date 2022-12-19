const details = {
    portfolio:[
        {
            title: "Why?",
            description: "I am programming this from scratch. No templates -- just the ReactJS framework, the TailwindCSS framework, and my two hands. I had some extra time this winter break so I decided to redo my portfolio again. My first portfolio was on Adobe Portfolio. My second was plain HTML, and CSS. Though the customizability of plain HTML and CSS was nice, adding new stuff was just repetitive, ugly, and became increasingly harder to read. I wanted to create components that I could customize, and reuse. Currently, I am writing this sentence in a file, fully separate from any HTML, and it feels nice."
        },
        {
            title: "What I am learning",
            description: "This is currently a work in progress, but I'm learning a lot of things as I work through this. This is my first project using the React framework and Tailwind. I am experimenting a lot with how I want my website to be laid out, and how to implement responsiveness that looks nice on several different devices. So far, I really like react, and love how fast I can iterate with Tailwind(though, I do plan to clean the CSS up in the future)..."
        }
    ],
    jokeBrowser:[
        {
            image: require("../assets/thumbnails/jokeBrowser_ui.jpeg"),
            title: "A little bit more",
            description: "This was one my last projects in my User Interaction course! It was a very open-ended project, so I built a little web app to browse through jokes! I created a service in angular to look up these jokes from JokeAPI, and use it in conjunction with HandTrackJS to make a web application where someone can just sit back, turn on their camera, and browser through ~programming~ jokes. My focus for this project was to create a reasonably aesthetic, intuitive interface, with hand controls that were also intuitive. The web app was definitely made for non-mobile browsers, but feel free to try it out as the app is usable in the \"Demo\" button above!"
        }
    ]
}
export default details