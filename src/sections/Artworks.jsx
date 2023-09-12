import React from 'react'
import Carousel from '../components/Carousel'
import { digitalArt, threeDArt } from "../data/artdata_digital";

export const Artworks = () => {
  return (
    <div>
        <div id="art" className="relative bottom-32"></div>
      <hr className="border-gray-800"></hr>
      <div className="pb-16">
        <h1 className="text-white text-center font-bold text-5xl underline decoration-blue-500 pt-16">
          Artwork
        </h1>
        <h2 className="text-gray-400 text-center pt-2 pb-16 mx-[20%] text-xl">
          Though my{" "}
          <span className="text-white font-bold">
            primary passion is programming
          </span>
          , I've familiarized myself with 3D modeling software commonly used in
          game development. Here is some art I've created for past projects,
          displayed with an image carousel I created from scratch!
        </h2>

        <div className="px-[0%] md:px-[15%] lg:px=[[20%]">
          <div className="text-white font-bold text-center">
            <Carousel artwork={threeDArt}></Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
