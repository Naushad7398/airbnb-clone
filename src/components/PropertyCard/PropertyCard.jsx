import React from 'react'
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from "react-icons/fa";


const PropertyCard = ({
    id,
    title,
    location,
    distance,
    dates,
    guestFavourite,
    price,
    rating,
    images,
    liked,
    onLike
}) => {


    return (
        <Link
            to={`/product/${id}`}
            className="group block w-[210px] flex-shrink-0 snap-start sm:w-[230px] lg:w-[240px] xl:w-[250px]"
        >
            <div className="relative overflow-hidden rounded-2xl">
                {guestFavourite && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-sm">
                        Guest favourite
                    </span>
                )}
                <img
                    src={images[0]}
                    alt={title}
                    className="h-[200px] w-full rounded-2xl object-cover transition duration-300 group-hover:brightness-95 sm:h-[210px] lg:h-[220px]"
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        onLike(id);
                    }}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/10 backdrop-blur-sm transition hover:scale-110"
                >
                    {
                        liked
                            ?
                            <FaHeart className="text-red-500 text-lg" />
                            :
                            <FaRegHeart className="text-white text-lg" />
                    }

                </button>
            </div>

            <div className="mt-3">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                        <h2 className="truncate font-semibold text-[15px] text-gray-900">
                            {title}
                        </h2>
                    </div>

                    <div className="flex items-center gap-1 whitespace-nowrap text-sm text-gray-600">
                        <span>★</span>
                        <span>{rating}</span>
                    </div>
                </div>

                <p className="mt-1 truncate text-sm text-gray-500">
                    {location}
                </p>

                <p className="mt-1 text-[14px] text-gray-500">
                    {dates}
                </p>

                <p className="mt-2 text-[15px]">
                    <span className="font-semibold">
                        ₹{price.toLocaleString()}
                    </span>
                    <span className='text-gray-600'>
                        / night
                    </span>
                </p>

            </div>


        </Link >
    )
}

export default PropertyCard