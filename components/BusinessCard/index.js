import React from "react";
import Image from "next/image";

const BusinessCard = ({ title, subtitle, imageSrc, description, tagline, onClick }) => {
    return (
        <div
            className="overflow-hidden rounded-lg p-2 laptop:p-4 pr-8 first:ml-0 link"
            onClick={onClick}
        >
            <div
                className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto bg-white shadow-lg p-4"
                style={{ height: "800px", width: "100%" }}
            >
                <div className="flex relative w-full">
                    <div className="flex-row">
                        <h1 className="mt-5 text-3xl font-medium">
                            {title ? title : "Title Name"}
                        </h1>
                        <h2 className="text-xl opacity-50 align-right">
                            {subtitle ? subtitle : "Subtitle"}
                        </h2>
                    </div>
                    <div className="flex-row">
                        <Image
                            alt={title ? title : "Title Name"}
                            className="h-full w-half rounded hover:scale-110 transition-all ease-out duration-300 bg-inherit"
                            src={imageSrc ? imageSrc : "/public/images/blur.png"}
                            layout="fill"
                            loading="lazy"
                        />
                    </div>
                </div>
                <h2 className="text-lg text-justify">
                    {description ? description : "Description"}
                </h2>
                <h3 className="text-l text-bold">{tagline ? tagline : "Tagline"}</h3>
            </div>
        </div>
    );
};


export default BusinessCard;
