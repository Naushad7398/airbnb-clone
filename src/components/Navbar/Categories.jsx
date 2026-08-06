import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { TbBeach } from "react-icons/tb";
import { RiServiceLine } from "react-icons/ri";

const Categories = () => {
  return (
    <div className="flex items-center justify-center gap-12">

      {/* All */}
      <button className="group flex flex-col items-center">
        <MdOutlineTravelExplore
          size={24}
          className="text-black"
        />
        <span className="mt-2 text-sm font-medium text-black">
          All
        </span>

        <div className="mt-2 h-[2px] w-full rounded-full bg-black"></div>
      </button>

      {/* Homes */}
      <button className="group flex flex-col items-center">
        <FaHouse
          size={24}
          className="text-gray-500 group-hover:text-black transition-colors"
        />
        <span className="mt-2 text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
          Homes
        </span>
      </button>

      {/* Experiences */}
      <button className="group flex flex-col items-center">
        <TbBeach
          size={24}
          className="text-gray-500 group-hover:text-black transition-colors"
        />
        <span className="mt-2 text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
          Experiences
        </span>
      </button>

      {/* Services */}
      <button className="group flex flex-col items-center">
        <RiServiceLine
          size={24}
          className="text-gray-500 group-hover:text-black transition-colors"
        />
        <span className="mt-2 text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
          Services
        </span>
      </button>

    </div>
  );
};

export default Categories;