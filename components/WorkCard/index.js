import React from "react";
import Image from "next/image";

const WorkCard = ({ img, name, description, tagline, stack, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 pr-8 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto bg-white shadow-lg p-4"
        style={{ height: "600px" }}
      >
        <Image
          alt={name}
          className="h-full w-full hover:scale-110 transition-all ease-out duration-300"
          src={img}
          layout="fill"
          loading="lazy"
        ></Image>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <h3 className="text-l text-bold">
        { tagline ? tagline : "Tagline"}
      </h3>
      <h3 className="text-l text-bold">
        { stack ? stack : "Stack"}
      </h3>
    </div>
  );
};

export default WorkCard;
