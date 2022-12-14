import React from "react";
import art1 from "../assets/art/art1.jpeg";
const Artwork = (props) => {
  const art = props.artwork;
  return (
    <div className="group w-full h-auto drop-shadow-lg relative">
      <img src={art1} className=""></img>
      <div className="duration-300 opacity-0 group-hover:opacity-100 flex absolute top-0 left-0 w-full h-full text-center flex-col justify-between bg-gradient-to-t from-white to-white/[.1]">
        <div className="grow-0 h-[80%] overflow-hidden p-3 bg-r">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            doloribus facilis dolor totam. Nulla asperiores consequatur eius
            dolore officiis nostrum error praesentium autem illo, magni deserunt
            totam nesciunt. Ducimus, vero! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Exercitationem corrupti nostrum
            eligendi eum reprehenderit voluptas sapiente praesentium commodi,
            sed ut ad adipisci ratione delectus non earum consequuntur neque.
            Tenetur, minima! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aperiam blanditiis eaque ea magnam dolorum perspiciatis quasi
            totam ipsum debitis? Molestias maxime aut voluptas suscipit, vel hic
            quasi perferendis sapiente libero.
          </p>
        </div>
        <div className="bg-white rounded-b-lg">
          <h1 className="text-gray-900 text-3xl font-bold pb-6">The Bird</h1>
        </div>
      </div>
    </div>
  );
};

export default Artwork;
