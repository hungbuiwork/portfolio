import React from 'react'
import Carousel from '../components/Carousel'
import { digitalArt, threeDArt } from "../data/artdata_digital";

export const Artworks = () => {
  return (
    <div>
      <div className="pb-16">
        <h2 className="text-gray-400 text-center pt-2 pb-16 mx-[20%] text-xl">
          Don't get me wrong, my {" "}
          <span className="text-white font-bold">
            primary passion is programming
          </span>
          ! But, here is some art I've created,
          displayed with an image carousel I created from scratch!
        </h2>

        <div className="px-[0%] md:px-[15%] lg:px=[[20%]">
          <div className="text-white font-bold text-center">
            <Carousel artwork={threeDArt}></Carousel>
            <Carousel artwork={digitalArt}></Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
