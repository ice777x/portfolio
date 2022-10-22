import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import {BsGithub, BsTwitter, BsTelegram} from "react-icons/bs";
function Header() {
    return (
        <div className="sticky z-50">
            <div className="py-8 px-8">
                <div className="flex flex-row justify-between font-space  items-center">
                    <div>
                        <Link href="/">
                            <a className="[font-size:24px] scroll-smooth tracking-wider leading-3 text-slate-400">
                                ice777
                            </a>
                        </Link>
                    </div>
                    <div className="hidden sm:flex space-x-8 text-slate-300 ">
                        <Link href="#projects">
                            <a className="text-xl hover:text-teal-400 hover:underline underline-offset-[20px]">
                                Projects
                            </a>
                        </Link>
                        <Link href="#tech">
                            <a className="text-xl hover:text-teal-400 hover:underline underline-offset-[20px]">
                                Technologies
                            </a>
                        </Link>
                        <Link href="#about">
                            <a className="text-xl hover:text-teal-400 hover:underline underline-offset-[20px]">
                                About
                            </a>
                        </Link>
                    </div>
                    <div className="hidden sm:flex space-x-8 items-center">
                        <Link href="https://github.com/ice777x">
                            <a
                                target="_blank"
                                className="text-2xl text-slate-400 hover:text-sky-500 hover:scale-125 transition duration-200 ease-in-out"
                            >
                                <BsGithub />
                            </a>
                        </Link>
                        <Link href="https://twitter.com/ice777x">
                            <a
                                target="_blank"
                                className="text-2xl text-sky-500 hover:scale-125 transition duration-200 ease-in-out"
                            >
                                <BsTwitter />
                            </a>
                        </Link>
                        <Link href="https://t.me/ice777x">
                            <a
                                target="_blank"
                                className="text-2xl text-[#0088CC] hover:scale-125 transition duration-200 ease-in-out"
                            >
                                <BsTelegram />
                            </a>
                        </Link>
                        <Link href="https://bionluk.com/ice777x">
                            <a
                                target="_blank"
                                className="text-xl text-slate-400 hover:scale-125 transition duration-200 ease-in-out"
                            >
                                <Image
                                    src="/bionluk.png"
                                    width={24}
                                    quality={100}
                                    height={24}
                                    alt="bionluk"
                                    className="rounded-full"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
