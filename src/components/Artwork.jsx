import React, {useState} from "react";
import art1 from "../assets/art/art1.jpeg";

const Artwork = (props) => {
  const art = props.art;
  return (
    <div>
      <img src={art?.url} className=""></img>
    </div>
  );
};

export default Artwork;
