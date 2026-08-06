import React from 'react'
import { Link } from 'react-router-dom';


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
            className="block w-[240px] flex-shrink-0 snap-start ..."
        >
            <div className="relative">
                {guestFavourite && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow">
                        Guest favourite
                    </span>
                )}
                <img
                    src={images[0]}
                    alt={title}
                    className="h-[230px] w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        onLike(id);
                    }}
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-md transition hover:scale-110"
                >
                    {liked ? "❤️" : "🤍"}

                </button>
            </div>

            <div className="mt-3">

                <div className="flex items-start justify-between">

                    <h2 className="truncate font-semibold">
                        {location}
                    </h2>

                    <span className="text-sm">
                        ⭐ {rating}
                    </span>

                </div>

                <p className="mt-1 text-sm text-gray-500">
                    {distance}
                </p>

                <p className="text-sm text-gray-500">
                    {dates}
                </p>

                <p className="mt-2 text-sm">
                    <span className="font-bold">
                        ₹{price.toLocaleString()}
                    </span>{" "}
                    night
                </p>

            </div>


        </Link>
    )
}

export default PropertyCard