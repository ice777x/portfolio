import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import Project from "./Project";

function Projects() {
    return (
        <div id="projects" className="px-8 lg:px-12 mt-4">
            <h1 className="tracking-wide text-5xl from-slate-200  to-slate-500 font-bold text-transparent bg-gradient-to-r bg-clip-text inline">
                Projects
            </h1>
            <div className="p-8 xl:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4">
                    <Project
                        title="Movie App"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis."
                        image="/movieapp.png"
                        link="https://github.com/ice777x"
                        source="https://github.com/ice777x/movieapp"
                        tags={["React", "Next.js", "Tailwindcss"]}
                    />
                    <Project
                        title="Movie App"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis."
                        image="/movieapp.png"
                        link="https://github.com/ice777x"
                        source="https://github.com/ice777x/movieapp"
                        tags={["React", "Next.js", "Tailwind"]}
                    />
                    <Project
                        title="Movie App"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis."
                        image="/movieapp.png"
                        link="https://github.com/ice777x"
                        source="https://github.com/ice777x/movieapp"
                        tags={["React", "Next.js", "Tailwind", "Typescript"]}
                    />
                    <Project
                        title="Movie App"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis."
                        image="/movieapp.png"
                        link="https://github.com/ice777x"
                        source="https://github.com/ice777x/movieapp"
                        tags={["React", "Next.js", "Tailwind"]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
