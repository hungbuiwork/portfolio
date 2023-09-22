import React from "react";

export const Skill = (props) => {
    let name = props.name;
    let src = props.src;
    let mark = props?.mark;
    let className = props?.className;
  return (
    <div
      className= {`indicator bg-[#040506] ${className} rounded-xl h-16 w-16 m-2 tooltip tooltip-bottom relative bottom-0 tooltip-primaryhover:bottom-2 duration-500`}
      data-tip= {name}
    >
      {mark && <span className="indicator-item  badge badge-success"></span>}
      {src && <img alt = {name} src= {src} />}
      {!src && <h1 className ="">{name}</h1>}
    </div>
  );
};
