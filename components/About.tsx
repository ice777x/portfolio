import React from "react";

function About() {
    return (
        <div id="about" className="px-8 lg:px-12 py-8">
            <h1 className="text-4xl lg:text-5xl from-slate-200  to-slate-500 font-bold text-transparent bg-gradient-to-r bg-clip-text inline">
                About Me
            </h1>
            <div>
                <p className="text-gray-400/50 mt-4 leading-6 text-lg">
                    I am a self-taught developer. I have been learning web
                    development for the past 3 months. I have experience with
                    React.js, Next.js, Node.js, Express.js, Tailwind CSS, and
                    Python. I am currently learning TypeScript.
                </p>
            </div>
        </div>
    );
}

export default About;
