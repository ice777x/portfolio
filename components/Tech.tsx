import React from "react";
import {FaReact, FaRobot} from "react-icons/fa";
import {DiFirebase} from "react-icons/di";
const tech_list = [
    {
        name: "Front-End",
        icon: <FaReact className="text-xl ml-1" />,
        description:
            "Experience with React.js and Next.js. I have also experience with Tailwind CSS.",
    },
    {
        name: "Back-End",
        icon: <DiFirebase className="text-xl ml-1" />,
        description: "Experience with Node.js and Express.js.",
    },
    {
        name: "Bots",
        icon: <FaRobot className="text-xl ml-1" />,
        description:
            "Experience with Pyrogram and Python. I have also experience with pyrogram.",
    },
];

function Tech() {
    return (
        <div id="tech" className="px-8 lg:px-12 mt-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-rose-600/[.88]">
                Technologies
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-8">
                {tech_list.map((tech) => (
                    <div className="p-4">
                        {/* <FaReact className="text-xl" /> */}
                        {tech.icon}
                        <h2 className="text-2xl font-bold">{tech.name}</h2>
                        <p className="text-gray-400 mt-4 leading-6 tracking-tight">
                            {tech.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tech;
