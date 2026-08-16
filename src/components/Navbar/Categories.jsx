import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { TbBeach } from "react-icons/tb";
import { RiServiceLine } from "react-icons/ri";

const Categories = () => {
    const categories = [
        { label: "All", icon: MdOutlineTravelExplore, path: "/", active: true },
        { label: "Homes", icon: FaHouse, path: "/homes" },
        { label: "Experiences", icon: TbBeach, path: "/experiences" },
        { label: "Services", icon: RiServiceLine, path: "/services" },
    ];

    return (
        <div
            className="
                flex w-full max-w-full
                items-end
                gap-6
                overflow-x-auto
                px-2
                pb-0
                scrollbar-hide
                sm:gap-8
                lg:w-auto
                lg:justify-center
                lg:overflow-visible
                lg:px-0
            "
        >
            {categories.map(({ label, icon: Icon, path, active }) => (
                <Link
                    key={label}
                    to={path}
                    className="group flex min-w-[55px] flex-shrink-0 flex-col items-center justify-center pb-1"
                >
                    <Icon
                        size={24}
                        className={active ? "text-black" : "text-gray-500 transition-colors group-hover:text-black"}
                    />

                    <span
                        className={
                            active
                                ? "mt-2 whitespace-nowrap text-sm font-medium text-black"
                                : "mt-2 whitespace-nowrap text-sm font-medium text-gray-500 transition-colors group-hover:text-black"
                        }
                    >
                        {label}
                    </span>

                    {active && <div className="mt-2 h-[2px] w-full rounded-full bg-black"></div>}
                </Link>
            ))}
        </div>
    );
};

export default Categories;