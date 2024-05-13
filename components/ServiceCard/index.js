import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState();

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div
            className={`w-full mob:p-4 rounded-lg transition-all ease-out duration-300 ${
                mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
        } hover:scale-105 link`}
        >
        <h1 className="opacity-90 text-3xl">{name ? name : "Heading"}</h1>
                {description && description.length > 0 &&
                (
                    <ul className="list-style-none">
                        {description.map((bullet, index) => (
                            <li key={index} className="opacity-70 text-xl">
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    );
};

export default ServiceCard;