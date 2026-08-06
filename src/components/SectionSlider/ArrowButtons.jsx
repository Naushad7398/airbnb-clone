import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ArrowButtons = ({
  onPrev,
  onNext,
  showLeft,
  showRight,
}) => {
  return (
    <div className="flex items-center gap-2">

      {/* Left Arrow */}

      <button
        onClick={onPrev}
        className={`flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md
          ${
            showLeft
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
      >
        <FiChevronLeft size={18} />
      </button>

      {/* Right Arrow */}

      <button
        onClick={onNext}
        className={`flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md
          ${
            showRight
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
      >
        <FiChevronRight size={18} />
      </button>

    </div>
  );
};

export default ArrowButtons;