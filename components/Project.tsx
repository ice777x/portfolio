import Image from "next/image";
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
      <div className="p-6 h-full flex flex-col">
        <Link href={image}>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              width={600}
              height={340}
              quality={80}
              loading="lazy"
              sizes="(max-width: 768px) 24vw,
                     (max-width: 1280)  50vw,
                     100vw"
              alt="movie"
              className="rounded-lg hover:scale-110 max-h-[340px] object-center object-cover transition  items-center transform duration-200 ease-in-out"
            />
          </a>
        </Link>
        <div className="flex flex-col flex-1">
          <div className="mb-4">
            <h3 className="text-2xl mt-4 font-bold text-slate-200">{title}</h3>
            <p className="text-slate-400/[.56] mt-4">{description}</p>
          </div>
          <div className="flex flex-row flex-wrap mt-auto">
            {tags.map((tag, i) => {
              if (i % 2 === 0) {
                return <div className="text-emerald-500 mr-4">{tag}</div>;
              } else {
                return <div className="text-amber-500 mr-4">{tag}</div>;
              }
            })}
          </div>
          <div className="flex flex-row mt-4 space-x-4">
            <Link href={link}>
              <a
                target={"_blank"}
                className="text-slate-400 hover:text-sky-400"
              >
                View
              </a>
            </Link>
            <Link href={source}>
              <a
                target={"_blank"}
                className="text-slate-400 hover:text-sky-400"
              >
                Source
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
