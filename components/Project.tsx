import Image from "next/future/image";
import Link from "next/link";
import React from "react";

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    source: string;
    tags: string[];
}

function Project({title, description, image, link, source, tags}: Project) {
    return (
        <div className="bg-[#292E49]/15 rounded-lg shadow-xl drop-shadow-lg ">
            <div className="p-6">
                <Link href={image}>
                    <a target="_blank" rel="noopener noreferrer">
                        <Image
                            src={image}
                            width={1920}
                            height={1080}
                            quality={100}
                            alt="movie"
                            className="rounded-lg hover:scale-105 items-center transition duration-300 ease-in-out"
                        />
                    </a>
                </Link>
                <h3 className="text-2xl mt-4 font-bold text-slate-200">
                    {title}
                </h3>
                <p className="text-slate-400/[.56] mt-4">{description}</p>
                <div className="flex flex-row flex-wrap mt-4 mx-auto">
                    {tags.map((tag) => (
                        <div className="text-lime-600 mr-4">{tag}</div>
                    ))}
                </div>
                <div className="flex flex-row mt-4 space-x-4">
                    <Link href={link}>
                        <a className="text-slate-400 hover:text-sky-400">
                            View
                        </a>
                    </Link>
                    <Link href={source}>
                        <a className="text-slate-400 hover:text-sky-400">
                            Source
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Project;
