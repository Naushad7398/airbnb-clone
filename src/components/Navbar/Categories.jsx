import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { TbBeach } from "react-icons/tb";
import { RiServiceLine } from "react-icons/ri";

const Categories = () => {
    return (
        <div
            className="
                flex w-full max-w-full
                gap-6
                overflow-x-auto
                px-2
                pb-1
                scrollbar-hide
                sm:gap-8
                lg:w-auto
                lg:justify-center
                lg:overflow-visible
                lg:px-0
            "
        >

            {/* All */}

            <button className="group flex min-w-[55px] flex-shrink-0 flex-col items-center">
                <MdOutlineTravelExplore
                    size={24}
                    className="text-black"
                />

                <span className="mt-2 whitespace-nowrap text-sm font-medium text-black">
                    All
                </span>

                <div className="mt-2 h-[2px] w-full rounded-full bg-black"></div>
            </button>


            {/* Homes */}

            <button className="group flex min-w-[55px] flex-shrink-0 flex-col items-center">
                <FaHouse
                    size={24}
                    className="text-gray-500 transition-colors group-hover:text-black"
                />

                <span className="mt-2 whitespace-nowrap text-sm font-medium text-gray-500 transition-colors group-hover:text-black">
                    Homes
                </span>
            </button>


            {/* Experiences */}

            <button className="group flex min-w-[85px] flex-shrink-0 flex-col items-center">
                <TbBeach
                    size={24}
                    className="text-gray-500 transition-colors group-hover:text-black"
                />

                <span className="mt-2 whitespace-nowrap text-sm font-medium text-gray-500 transition-colors group-hover:text-black">
                    Experiences
                </span>
            </button>


            {/* Services */}

            <button className="group flex min-w-[70px] flex-shrink-0 flex-col items-center">
                <RiServiceLine
                    size={24}
                    className="text-gray-500 transition-colors group-hover:text-black"
                />

                <span className="mt-2 whitespace-nowrap text-sm font-medium text-gray-500 transition-colors group-hover:text-black">
                    Services
                </span>
            </button>

        </div>
    );
};

export default Categories;