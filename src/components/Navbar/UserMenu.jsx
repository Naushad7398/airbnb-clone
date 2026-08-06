import React from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { HiOutlineBars3 } from "react-icons/hi2";

const UserMenu = () => {
  return (
    <div className="flex items-center gap-2">

      {/* Become a host */}
      <button className="rounded-full px-4 py-3 text-sm font-medium transition hover:bg-gray-100">
        Become a host
      </button>

      {/* Globe */}
      <button className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-gray-100">
        <HiOutlineGlobeAlt size={20} />
      </button>

      {/* Menu */}
      <button className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-gray-100">
        <HiOutlineBars3 size={22} />
      </button>

    </div>
  );
};

export default UserMenu;