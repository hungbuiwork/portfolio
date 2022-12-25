import React, { useState } from "react";
import Artwork from "./Artwork";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

function Dots(activeIdx, listOfIdx) {
  return (
    <div className="text-xl md:text-2xl">
      {listOfIdx.map((idx) => (activeIdx == idx ? "● " : "○ "))}
    </div>
  );
}

const Carousel = (prop) => {
  const art = prop.artwork.art;
  const title = prop.artwork.title;
  const listOfIdx = [...Array(art.length).keys()];
  const [index, setIndex] = useState(0);
  function trueIndex(i) {
    if (i > art.length - 1) {
      return i % art.length;
    } else if (i < 0) {
      return i + art.length;
    } else {
      return i;
    }
  }
  function changeIndex(i) {
    setIndex(trueIndex(index + i));
  }

  return (
    <div className="w-full pb-8">
      <h1 className="text-2xl md:text-3xl">{title}</h1>
      {Dots(index, listOfIdx)}
      <div className="flex justify-center place-items-center">
      <button className = "h-48 duration-200 filter brightness-50 hover:brightness-100" onClick={() => changeIndex(-1)}>
          <FaCaretLeft size={30}></FaCaretLeft>
        </button>
      <div className="flex justify-center place-items-center rounded-xl p-6 border-4 border-gray-900 h-[60vw] md:h-[45vw]">
        <div  onClick={() => changeIndex(-1)} className="w-[30%] hover:w-[45%] hover:cursor-pointer duration-300 relative left-6 rounded-xl overflow-hidden carousel-side">
          <Artwork art={art[trueIndex(index - 1)]}></Artwork>
        </div>
        <div className="w-[65%]  z-10 hover:w-[120%] duration-300 carousel-active">
          <div className="shadow-xl rounded-xl overflow-hidden">
            <Artwork art={art[index]} className=""></Artwork>
          </div>
        </div>
        <div  onClick={() => changeIndex(1)} className="w-[30%] hover:w-[45%] hover:cursor-pointer duration-300 relative right-6 rounded-xl overflow-hidden carousel-side">
          <Artwork art={art[trueIndex(index + 1)]}></Artwork>
        </div>
      </div>
      <button className = " h-48 duration-200 filter brightness-50 hover:brightness-100" onClick={() => changeIndex(1)}>
          <FaCaretRight size={30}></FaCaretRight>
        </button>
      </div>

      <h2 className="text-lg text-blue-600/[.3] z-20 ">
            ― <span className="text-white"> {art[index].title} </span> ―
          </h2>
    </div>
  );
};

export default Carousel;
