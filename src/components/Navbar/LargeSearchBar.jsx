import React from "react";
import { IoSearch } from "react-icons/io5";

const LargeSearchBar = () => {
  return (
    <div className="flex w-[900px] items-center rounded-full border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl">

      {/* Where */}
      <div className="flex-1 cursor-pointer rounded-l-full px-8 py-4 hover:bg-gray-100">
        <p className="text-xs font-semibold">Where</p>
        <p className="text-sm text-gray-500">
          Search destinations
        </p>
      </div>

      {/* Divider */}
      <div className="h-10 w-px bg-gray-300"></div>

      {/* When */}
      <div className="flex-1 cursor-pointer px-8 py-4 hover:bg-gray-100">
        <p className="text-xs font-semibold">When</p>
        <p className="text-sm text-gray-500">
          Add dates
        </p>
      </div>

      {/* Divider */}
      <div className="h-10 w-px bg-gray-300"></div>

      {/* Who */}
      <div className="flex-1 cursor-pointer rounded-r-full px-8 py-4 hover:bg-gray-100">
        <p className="text-xs font-semibold">Who</p>
        <p className="text-sm text-gray-500">
          Add guests
        </p>
      </div>

      {/* Search Button */}
      <div className="pr-2">
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-500 text-white transition-all duration-300 hover:scale-105 hover:bg-rose-600">
          <IoSearch size={22} />
        </button>
      </div>

    </div>
  );
};

export default LargeSearchBar;