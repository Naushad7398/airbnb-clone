import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SeeAllCard = ({
    images = [],
    title,
}) => {
    return (

        <Link
            to="/properties"
            className="group flex h-[320px] w-[250px] flex-shrink-0 items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

            <div className="flex flex-col items-center">

                {/* Images */}

                <div className="relative mb-8 h-24 w-28">

                    <img
                        src={images[0]}
                        alt=""
                        className="absolute left-0 top-4 h-20 w-20 rounded-2xl border-4 border-white object-cover shadow-lg transition-all duration-300 group-hover:-rotate-6"
                    />

                    <img
                        src={images[1]}
                        alt=""
                        className="absolute left-10 top-0 h-20 w-20 rounded-2xl border-4 border-white object-cover shadow-lg transition-all duration-300 group-hover:rotate-6"
                    />

                </div>

                <h2 className="text-2xl font-semibold">

                    See all

                </h2>

                <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">

                    {title}

                    <FiArrowRight />

                </p>

            </div>

        </Link>

    );
}

    export default SeeAllCard;