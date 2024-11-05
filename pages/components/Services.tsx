import React from "react";
import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const Services = () => {
    return <div className="bg-[#121121] pb-[5rem] pt-[4rem] md:pt-[8rem]">
        <p className="heading">
            My <span className="text-yellow-400">Services</span>
        </p>
        <div className="grid grid-cols-1 md:gridgrid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-
        [4rem] text-white">
            <div data-aos='fade-right'>
            <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
            uppercase font-semibold text-center p-[2rem]">
                <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                    Frontend
                </h1>
                <p className="text-[15px] text-[#d3d2d2]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veritatis vitae quam veniam animi officia reprehenderit illum deleniti ratione, 
                    explicabo minima necessitatibus dolorem consequuntur inventore laudantium. 
                    Ex suscipit eveniet iusto totam.
                </p>
            </div>
            </div>
            <div data-aos='zoom-in' data-aos-delay='300'>
            <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300
            uppercase font-semibold text-center p-[2rem]">
                <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                    Backend
                </h1>
                <p className="text-[15px] text-[#d3d2d2]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veritatis vitae quam veniam animi officia reprehenderit illum deleniti ratione, 
                    explicabo minima necessitatibus dolorem consequuntur inventore laudantium. 
                    Ex suscipit eveniet iusto totam.
                </p>
            </div>
            </div>
            <div  data-aos='fade-left' data-aos-delay='500'>
            <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6
            uppercase font-semibold text-center p-[2rem]">
                <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                    Fullstack
                </h1>
                <p className="text-[15px] text-[#d3d2d2]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veritatis vitae quam veniam animi officia reprehenderit illum deleniti ratione, 
                    explicabo minima necessitatibus dolorem consequuntur inventore laudantium. 
                    Ex suscipit eveniet iusto totam.
                </p>
            </div>
            </div>
        </div>
    </div>
};

export default Services;