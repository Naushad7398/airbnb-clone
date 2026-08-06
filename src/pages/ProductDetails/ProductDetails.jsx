import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { northGoa } from "../../data/northGoa";

const ProductDetails = () => {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(1);

    const { id } = useParams();


    const product = northGoa.find(
        (item) => item.id === Number(id)
    );


    if (!product) return <h1 className="text-center mt-10 text-2xl font-bold">Property not found</h1>;


    const calculateNights = () => {
        if (!checkIn || !checkOut) return 0;

        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        const difference = checkOutDate - checkInDate;

        return difference / (1000 * 60 * 60 * 24);
    };

    const nights = calculateNights();
    const totalPrice = nights * (product?.price || 0);

    return (
        <div className="max-w-6xl mx-auto px-8 py-10">

            {/* Airbnb Gallery */}

            <div className="mb-12">

                {/* Title */}

                <h1 className="mb-3 text-4xl font-bold">
                    {product.title}
                </h1>

                {/* Info */}

                <div className="mb-6 flex items-center gap-3 text-sm">

                    <span>⭐ {product.rating}</span>

                    <span>•</span>

                    {product.guestFavourite && (
                        <span className="font-semibold underline">
                            Guest favourite
                        </span>
                    )}

                    <span>•</span>

                    <span className="underline">
                        {product.location}
                    </span>

                </div>

                {/* Images */}

                <div className="relative grid h-[520px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-3xl">

                    {/* Main */}

                    <img
                        src={product.images[0]}
                        alt=""
                        className="col-span-2 row-span-2 h-full w-full cursor-pointer object-cover transition duration-300 hover:brightness-90"
                    />

                    {/* Right */}

                    {product.images.slice(1, 5).map((image, index) => (

                        <img
                            key={index}
                            src={image}
                            alt=""
                            className="h-full w-full cursor-pointer object-cover transition duration-300 hover:brightness-90"
                        />

                    ))}

                    {/* Button */}

                    <button
                        className="absolute bottom-5 right-5 rounded-xl border bg-white px-4 py-2 text-sm font-medium shadow-lg transition hover:shadow-xl"
                    >
                        🖼 Show all photos
                    </button>

                </div>

            </div>

            {/* Product Details + Booking Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Section */}
                <div>
                    <h1 className="text-4xl font-bold">
                        {product?.title}
                    </h1>

                    <p className="text-2xl font-semibold text-blue-600 mt-3">
                        ${product?.price?.toFixed(2)}
                    </p>

                    <p className="flex items-center gap-2 mt-4">
                        ⭐ {product.rating}
                    </p>

                    <p className="mt-6 text-gray-600 leading-8">
                        {product?.description}
                    </p>

                    <p className="mt-6 font-semibold uppercase tracking-wide text-gray-500">
                        Category : {product.location}
                    </p>
                </div>

                {/* Right Section */}
                <div className="sticky top-24 h-fit">

                    <div className="border rounded-2xl p-6 shadow-xl bg-white w-full max-w-sm">

                        <h2 className="text-2xl font-bold mb-6">
                            ₹{product.price.toLocaleString()} / night
                        </h2>

                        {/* Check In */}
                        <div className="mb-4">
                            <label className="block mb-1">
                                Check In
                            </label>

                            <input
                                type="date"
                                value={checkIn}
                                onChange={(e) =>
                                    setCheckIn(e.target.value)
                                }
                                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Check Out */}
                        <div className="mb-4">
                            <label className="block mb-1">
                                Check Out
                            </label>

                            <input
                                type="date"
                                value={checkOut}
                                onChange={(e) =>
                                    setCheckOut(e.target.value)
                                }
                                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Guests */}
                        <div className="flex justify-between items-center mb-6">

                            <span>Guests</span>

                            <div className="flex items-center gap-3">

                                <button
                                    onClick={() => {
                                        if (guests > 1) {
                                            setGuests(guests - 1);
                                        }
                                    }}
                                    className="w-10 h-10 border rounded-lg hover:bg-gray-100 transition"
                                >
                                    -
                                </button>

                                <span className="font-semibold">
                                    {guests}
                                </span>

                                <button
                                    onClick={() => {
                                        if (guests < 10) {
                                            setGuests(guests + 1);
                                        }
                                    }}
                                    className="w-10 h-10 border rounded-lg hover:bg-gray-100 transition"
                                >
                                    +
                                </button>

                            </div>
                        </div>

                        {/* Summary */}

                        <div className="mb-6">
                            <p>Nights : {nights}</p>

                            <p className="text-2xl font-bold text-blue-600 mt-2">
                                Total : ₹{totalPrice.toLocaleString()}
                            </p>
                        </div>

                        {nights <= 0 && (
                            <p className="text-red-500 text-sm mb-4">
                                Please select valid check-in and check-out dates.
                            </p>
                        )}

                        <button
                            disabled={nights <= 0}
                            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            Reserve
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductDetails;