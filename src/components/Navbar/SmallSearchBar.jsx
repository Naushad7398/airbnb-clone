
import React from "react";
import { IoSearch } from "react-icons/io5";

const SmallSearchBar = () => {
  return (
    <div className="flex w-fit items-center rounded-full border border-gray-300 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer">
      <button className="text-sm font-medium text-gray-900">Anywhere</button>

      <span className="mx-3 h-4 w-px bg-gray-300" />

      <button className="text-sm font-medium text-gray-900">Anytime</button>

      <span className="mx-3 h-4 w-px bg-gray-300" />

      <button className="text-sm text-gray-500">Add guests</button>

      <button className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white shadow-sm">
        <IoSearch size={16} />
      </button>
    </div>
  );
};

export default SmallSearchBar;