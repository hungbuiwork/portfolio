import React from "react";

export const Skill = (props) => {
  let name = props.name;
  let src = props.src;
  let mark = props?.mark;
  let className = props?.className;
  return (
    <div
      className={`indicator ${
        className ? className : "bg-[#040506]"
      } rounded-xl h-20 lg:h-24 w-20 lg:w-24 hover:scale-110 p-2 m-2 tooltip tooltip-top relative bottom-0 tooltip-primaryhover:bottom-2 duration-500`}
      data-tip={name}
    >
      {mark && <span className="indicator-item  badge badge-success"></span>}
      {src && <img alt={name} src={src} />}
      {!src && <h1 className="">{name}</h1>}
    </div>
  );
};
