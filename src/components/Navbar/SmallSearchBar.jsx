
import React from "react";
import { IoSearch } from "react-icons/io5";

const SmallSearchBar = () => {
  return (
    <div className="flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">

      <button className="font-medium text-sm">
        Anywhere
      </button>

      <span className="mx-3 text-gray-300">|</span>

      <button className="font-medium text-sm">
        Anytime
      </button>

      <span className="mx-3 text-gray-300">|</span>

      <button className="text-sm text-gray-500">
        Add guests
      </button>

      <button className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white">
        <IoSearch size={16} />
      </button>

    </div>
  );
};

export default SmallSearchBar;