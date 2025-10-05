import React from "react";
import { Link } from "react-scroll";
import { Slide } from "../animations/Slide.tsx";

const About = (props) => {
  return (
    <div id="about" className=" w-[min(90vw,1200px)] mx-auto">
      <hr className="border-gray-800"></hr>
      <div className=" mr-2  mt-16">
        <div className="flex flex-col md:flex-row gap-4">
          <Slide x={0} y={200}>
            <div className=" text-white bg-pink-600/10 border-pink-900 text-left border-2 p-4 rounded-l-lg">
              <div className="mx-auto w-full rounded-lg  h-80 me  bg-cover mb-6 hover:scale-110 duration-300"></div>
              <p>
                <span className="text-2xl md:text-3xl font-extrabold text-rose-500">
                  University of California, Irvine
                </span>
                <br></br>
                Computer Science (B.S.) & Computer Game Science (B.S.)<br></br>
                <br></br>
                <span className=" font-bold  text-rose-500">GPA: 3.94</span>
                <br></br>
                Sep 2020 - <span>Jun 2024</span>
                <br></br>
                <br></br>
                <span className=" underline decoration-rose-600 decoration-4">
                  Merits & Awards
                </span>
                <br></br>
                <p className=" text-sm mt-3">
                  UCI Summer Academy Logo Design Competition 2023(2nd of 40+
                  entries)<br></br>
                  <br></br>
                  Phi Beta Kappa Honor’s Society Book Award 2021<br></br>
                  <br></br>
                </p>
              </p>
            </div>
          </Slide>
          <div className="text-gray-400 mr-[5%] text-xl place-self-center mb-16 drop-shadow-2xl w-[80%] md:w-[90%]">
            <Slide>
              <h1 className="text-white decoration-rose-500 underline font-extrabold text-6xl  mb-8 underline-offset-2">
                About Me
              </h1>
              <h1 className=" text-2xl text-white">Who am I?</h1>
              <p className=" indent-8">
                At my core, I love to create. Whether its through code, art,
                music, I love to bring ideas to life. I am extremely passionate
                about creating software that makes an impact in people's lives,
                whether its through improving productivity, or creating
                memorable experiences. I thrive in collaborative environments,
                where I can work with others to achieve common goals and create
                something truly special.
              </p>
              <h1 className=" text-2xl text-white mt-8">What's the goal?</h1>
              <p>
                My goals as of right now are to learn as much as I can about new
                technology, and refine my skills as a software engineer. As a
                software engineer, I am someone who is really process-driven,
                and loves to learn a large scope of what I am working on --
                feeling connected to the project, the user, impact, as well as
                gaining perspective working with different disciplines is what I
                love about this industry.
              </p>
              <h1 className=" text-2xl text-white mt-8">
                Working with me, you'll notice{" "}
              </h1>
              <p> • My passion for exploring & learning new things</p>
              <p>
                {" "}
                • Strong interdisciplinary skills when it comes to engineering
                as well as design
              </p>
              <p> • Strong attention to detail, focusing on code quality </p>
              <p> • A love to hear new perspectives by collaborating!</p>
              <h1 className=" text-2xl text-white mt-8">
                Do I have interests outside of programming?
              </h1>
              <p className=" indent-8">
                Heck yeah I do! I love to create digital art and paint. I also
                sing R&B, and was competitively singing throughout college.
                Also, ask me any questios about plant care, and I got you!
                Buying and selling plants is my side hustle.
              </p>
            </Slide>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            ></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
