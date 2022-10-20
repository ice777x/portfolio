import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("../components/Projects"), {ssr: false});
const Tech = dynamic(() => import("../components/Tech"), {ssr: false});
const About = dynamic(() => import("../components/About"), {ssr: false});
const Home: NextPage = () => {
    return (
        <div className="wrapper">
            <div className="px-8 lg:px-12 py-12">
                <div className="md:w-[50vw] lg:w-[40vw] h-full">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Welcome To <br /> My Personal Portfolio
                    </h2>
                    <p className="text-gray-400 mt-4 leading-6 tracking-tight">
                        The purpose of me is to help aspiring and established
                        developers to tale their development skills to the next
                        level and build awesome apps.
                    </p>
                </div>
            </div>
            <div className="border-b-8  bg-gradient-to-r from-sky-500 via-teal-500 to-red-500 bg-clip-border border-transparent my-4 mx-16 rounded-full" />
            <Projects />
            <Tech />
            <About />
        </div>
    );
};

export default Home;
