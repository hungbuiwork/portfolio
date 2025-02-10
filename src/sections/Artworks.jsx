import React from "react";
import Carousel from "../components/Carousel";
import { digitalArt, threeDArt } from "../data/artdata_digital";
import { Slide } from "../animations/Slide.tsx";

const Artworks = () => {
  return (
    <div>
      <div className="pb-16 ">
        <h2 className="text-gray-400 text-center  pt-2 pb-16 mx-[20%] text-xl">
          My{" "}
          <span className="text-white font-bold">
            primary passion is definitely programming
          </span>
          , but here is some of the artwork i've made, displayed in a carousel I
          created from scratch.
        </h2>
        <div className="px-[0%] md:px-[15%] lg:px=[[20%]">
          <div className="text-white font-bold text-center">
            <div class="collapse collapse-arrow bg-black/70 my-4">
              <input type="checkbox" />
              <div class="collapse-title text-xl font-medium">
                Click to see 3D Art.
              </div>
              <div class="collapse-content">
                <Carousel artwork={threeDArt}></Carousel>
              </div>
            </div>
            <div class="collapse collapse-arrow bg-black/70">
              <input type="checkbox" />
              <div class="collapse-title text-xl font-medium">
                Click to see Digital Art.
              </div>
              <div class="collapse-content">
                <Carousel artwork={digitalArt}></Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Artworks;
