import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import Project from "./Project";

interface ProjectType {
    title: string;
    description: string;
    image: string;
    link: string;
    source: string;
    tags: string[];
}

const ProjectsList: ProjectType[] = [
    {
        title: "Movie App",
        description: "A movie app built with Next.js and Tailwindcss",
        image: "/movieapp.png",
        link: "https://github.com/ice777x",
        source: "https://github.com/ice777x/movieapp",
        tags: ["React", "Next.js", "Tailwindcss"],
    },
    {
        title: "Open-API",
        description: "RestAPI for Open-API built with FastAPI.",
        image: "/restapi.png",
        link: "https://iceweasel.herokuapp.com",
        source: "https://github.com/ice777x/API",
        tags: ["Python", "FastAPI"],
    },
    {
        title: "Tau",
        description: "Tau is a simple and fast Userbot for Telegram.",
        image: "/Tau_film.png",
        link: "https://github.com/ice777x",
        source: "https://github.com/ice777x/tau",
        tags: ["Python", "Pyrogram"],
    },
];

function Projects() {
    return (
        <div id="projects" className="px-8 lg:px-12 mt-4">
            <h1 className="tracking-wide text-5xl text-cyan-500/[.88] font-bold">
                Projects
            </h1>
            <div className="p-8 xl:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ProjectsList.map((project: ProjectType) => (
                        <Project
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                            source={project.source}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
