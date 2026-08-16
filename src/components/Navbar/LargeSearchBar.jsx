import React from "react";
import { IoSearch } from "react-icons/io5";

const LargeSearchBar = () => {
  return (
    <div className="flex w-[900px] items-center rounded-full border border-[#dddddd] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
      <div className="flex flex-1 cursor-pointer items-center rounded-l-full px-6 py-4 hover:bg-gray-50">
        <div className="w-full">
          <p className="text-[12px] font-semibold text-gray-900">Where</p>
          <p className="mt-1 text-[14px] text-gray-500">Search destinations</p>
        </div>
      </div>

      <div className="h-10 w-px bg-gray-200"></div>

      <div className="flex flex-1 cursor-pointer items-center px-6 py-4 hover:bg-gray-50">
        <div className="w-full">
          <p className="text-[12px] font-semibold text-gray-900">When</p>
          <p className="mt-1 text-[14px] text-gray-500">Add dates</p>
        </div>
      </div>

      <div className="h-10 w-px bg-gray-200"></div>

      <div className="flex flex-1 cursor-pointer items-center rounded-r-full px-6 py-4 hover:bg-gray-50">
        <div className="w-full">
          <p className="text-[12px] font-semibold text-gray-900">Who</p>
          <p className="mt-1 text-[14px] text-gray-500">Add guests</p>
        </div>
      </div>

      <div className="pr-2">
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff385c] text-white shadow-[0_2px_8px_rgba(255,56,92,0.45)] transition-all duration-300 hover:scale-105 hover:bg-[#e61f4d]">
          <IoSearch size={22} />
        </button>
      </div>
    </div>
  );
};

export default LargeSearchBar;