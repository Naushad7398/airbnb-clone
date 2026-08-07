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

                    {/* Host */}

                    <div className="border-b pb-8">

                        <h2 className="text-2xl font-semibold">
                            Hosted by Naushad
                        </h2>

                        <p className="mt-2 text-gray-600">
                            Entire Villa · {guests} guests · 4 bedrooms · 5 beds · 3 baths
                        </p>

                    </div>

                    {/* Highlights */}

                    <div className="space-y-8 py-8 border-b">

                        <div className="flex gap-4">

                            <span className="text-3xl">🏡</span>

                            <div>

                                <h3 className="font-semibold">
                                    Entire home
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    You'll have the entire villa to yourself.
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <span className="text-3xl">📶</span>

                            <div>

                                <h3 className="font-semibold">
                                    Fast Wifi
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    High-speed internet for work and entertainment.
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-4">

                            <span className="text-3xl">🏊</span>

                            <div>

                                <h3 className="font-semibold">
                                    Private Pool
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    Relax in your private swimming pool.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Description */}

                    <div className="py-8">

                        <h2 className="text-xl font-semibold mb-4">
                            About this place
                        </h2>

                        <p className="leading-8 text-gray-600">
                            Enjoy a luxurious stay with modern amenities, beautiful interiors,
                            peaceful surroundings, and easy access to nearby attractions.
                            Perfect for families, couples, and friends looking for a memorable getaway.
                        </p>

                    </div>
                    {/* Amenities */}

                    <div className="border-t py-8">

                        <h2 className="mb-6 text-2xl font-semibold">
                            What this place offers
                        </h2>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">📶</span>
                                <span>Fast Wifi</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🏊</span>
                                <span>Private Pool</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🚗</span>
                                <span>Free Parking</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🍳</span>
                                <span>Kitchen</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🧺</span>
                                <span>Washing Machine</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">📺</span>
                                <span>Smart TV</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">❄️</span>
                                <span>Air Conditioning</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🔥</span>
                                <span>BBQ Grill</span>
                            </div>

                        </div>

                        <button
                            className="mt-8 rounded-xl border border-black px-6 py-3 font-semibold transition hover:bg-black hover:text-white"
                        >
                            Show all 25 amenities
                        </button>

                    </div>

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