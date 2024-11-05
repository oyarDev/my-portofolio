import React from "react";
import Particle from "./Particle"; // Ensure this is the correct import for your Particle component
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
    return (
        <div className="relative h-[88vh] bg-[url('/image/banner.jpg')] bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Particle />
            </div>
            <div className="w-[90%] md:w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center relative z-10">
                <div>
                    <h1 className="text-[8vw] md:text-[50px] text-white font-bold leading-tight">
                        Allo !, I'M <span className="text-yellow-400">Oyar</span>
                    </h1>
                    <TextEffect />
                    <p className="mt-[2rem] text-[16px] md:text-[20px] text-[#ffffff92]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde, 
                        saepe odio a ex atque! Perspiciatis minus reprehenderit, cumque labore 
                        dignissimos dolore suscipit quod eos fugit ipsum est fuga assumenda.
                    </p>
                    <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                        <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                            <p>Download Cv</p>
                            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                        </button>
                        <button className="flex items-center space-x-2">
                            <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
                            <p className="text-[20px] font-semibold text-white">
                                Watch The Video
                            </p>
                        </button>
                    </div>
                </div>
                <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[300px] md:h-[500px]">
                    <Image 
                        src="/image/u1.jpg" 
                        alt="user" 
                        fill 
                        className="object-cover rounded-full" 
                    />
                </div>   
            </div>
        </div>
    );
}

export default Hero;
