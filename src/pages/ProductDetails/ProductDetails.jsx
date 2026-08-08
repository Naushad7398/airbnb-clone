import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { northGoa } from "../../data/northGoa";
import { FaStar } from "react-icons/fa";

import {
    LuImages,
    LuHouse,
    LuWifi,
    LuWaves,
    LuCar,
    LuChefHat,
    LuWashingMachine,
    LuTv,
    LuSnowflake,
    LuFlame,
} from "react-icons/lu";

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

        const calculatedNights =
            difference / (1000 * 60 * 60 * 24);

        return calculatedNights > 0 ? calculatedNights : 0;
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
                    <span><FaStar className="text-yellow-300" /></span>

                    <span> {product.rating}</span>

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

                    <div className="space-y-8">

                        {/* Entire Home */}

                        <div className="flex items-start gap-5">

                            <LuHouse className="mt-1 h-7 w-7 shrink-0 text-gray-700" />

                            <div>

                                <h3 className="text-lg font-semibold">
                                    Entire home
                                </h3>

                                <p className="mt-1 text-gray-500">
                                    You'll have the entire villa to yourself.
                                </p>

                            </div>

                        </div>


                        {/* Fast Wifi */}

                        <div className="flex items-start gap-5">

                            <LuWifi className="mt-1 h-7 w-7 shrink-0 text-gray-700" />

                            <div>

                                <h3 className="text-lg font-semibold">
                                    Fast Wifi
                                </h3>

                                <p className="mt-1 text-gray-500">
                                    High-speed internet for work and entertainment.
                                </p>

                            </div>

                        </div>


                        {/* Private Pool */}

                        <div className="flex items-start gap-5">

                            <LuWaves className="mt-1 h-7 w-7 shrink-0 text-gray-700" />

                            <div>

                                <h3 className="text-lg font-semibold">
                                    Private Pool
                                </h3>

                                <p className="mt-1 text-gray-500">
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-12">

                                <div className="flex items-center gap-4">
                                    <LuWifi className="text-2xl text-gray-700" />
                                    <span>Fast Wifi</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <LuWaves className="text-2xl text-gray-700" />
                                    <span>Private Pool</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <LuCar className="text-2xl text-gray-700" />
                                    <span>Free Parking</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <LuChefHat className="text-2xl text-gray-700" />
                                    <span>Kitchen</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <LuWashingMachine className="text-2xl text-gray-700" />
                                    <span>Washing Machine</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <LuTv className="text-2xl text-gray-700" />
                                    <span>Smart TV</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <LuSnowflake className="text-2xl text-gray-700" />
                                    <span>Air Conditioning</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <LuFlame className="text-2xl text-gray-700" />
                                    <span>BBQ Grill</span>
                                </div>

                            </div>

                        </div>

                        <button
                            className="mt-8 rounded-xl border border-black px-6 py-3 font-semibold transition hover:bg-black hover:text-white"
                        >
                            Show all 25 amenities
                        </button>

                    </div>

                    {/* Reviews */}

                    <div className="border-t border-gray-200 py-10">

                        {/* Reviews Header */}

                        <div className="flex items-center gap-2 mb-8">

                            <span className="text-2xl">
                                <FaStar className="text-sm text-black" />
                            </span>

                            <h2 className="text-2xl font-semibold">
                                {product.rating} · 125 reviews
                            </h2>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            {/* Review 1 */}

                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                                        AS
                                    </div>

                                    <div>

                                        <h3 className="font-semibold">
                                            Aman Sharma
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            July 2026
                                        </p>

                                    </div>

                                </div>

                                <p className="mb-2 flex">
                                    <FaStar className="text-yellow-300" />
                                    <FaStar className="text-yellow-300" />
                                    <FaStar className="text-yellow-300" />
                                    <FaStar className="text-yellow-300" />
                                </p>

                                <p className="leading-7 text-gray-600">
                                    Amazing stay! The villa was clean, spacious,
                                    and exactly as shown in the pictures.
                                    The pool was the highlight of our trip.
                                </p>

                            </div>


                            {/* Review 2 */}

                            <div>

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                                        PV
                                    </div>

                                    <div>

                                        <h3 className="font-semibold">
                                            Priya Verma
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            June 2026
                                        </p>

                                    </div>

                                </div>

                                <p className="mb-2 flex">
                                    <FaStar className="text-yellow-300" />
                                    <FaStar className="text-yellow-300" />
                                    <FaStar className="text-yellow-300" />
                                    <FaStar className="text-yellow-300" />
                                    <FaStar className="text-yellow-300" />
                                </p>

                                <p className="leading-7 text-gray-600">
                                    Beautiful property with a peaceful location.
                                    The rooms were comfortable and the host was
                                    very helpful. Highly recommended.
                                </p>

                            </div>

                        </div>


                        {/* Show All Reviews */}

                        <button
                            className="mt-8 rounded-xl border border-black px-6 py-3 font-semibold transition hover:bg-black hover:text-white"
                        >
                            Show all 125 reviews
                        </button>




                    </div>

                </div>




                {/* Right Section */}
                <div className="sticky top-24 h-fit">

                    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">

                        {/* Price */}

                        <div className="mb-6">

                            <span className="text-2xl font-semibold underline">
                                ₹{nights > 0
                                    ? totalPrice.toLocaleString()
                                    : product.price.toLocaleString()
                                }
                            </span>

                            <span className="ml-1 text-lg">
                                {nights > 0
                                    ? `for ${nights} nights`
                                    : " / night"
                                }
                            </span>

                        </div>


                        {/* Date + Guests Box */}

                        <div className="overflow-hidden rounded-2xl border border-gray-400">

                            {/* Dates */}

                            <div className="grid grid-cols-2">

                                {/* Check In */}

                                <div className="border-r border-gray-400 p-3">

                                    <label className="block text-xs font-bold uppercase">
                                        Check-in
                                    </label>

                                    <input
                                        type="date"
                                        value={checkIn}
                                        onChange={(e) =>
                                            setCheckIn(e.target.value)
                                        }
                                        className="mt-1 w-full border-none bg-transparent text-sm outline-none"
                                    />

                                </div>


                                {/* Check Out */}

                                <div className="p-3">

                                    <label className="block text-xs font-bold uppercase">
                                        Check-out
                                    </label>

                                    <input
                                        type="date"
                                        value={checkOut}
                                        onChange={(e) =>
                                            setCheckOut(e.target.value)
                                        }
                                        className="mt-1 w-full border-none bg-transparent text-sm outline-none"
                                    />

                                </div>

                            </div>


                            {/* Guests */}

                            <div className="flex items-center justify-between border-t border-gray-400 p-3">

                                <div>

                                    <p className="text-xs font-bold uppercase">
                                        Guests
                                    </p>

                                    <p className="mt-1 text-sm">
                                        {guests} {guests === 1 ? "Guest" : "Guests"}
                                    </p>

                                </div>


                                <div className="flex items-center gap-2">

                                    <button
                                        onClick={() => {
                                            if (guests > 1) {
                                                setGuests(guests - 1);
                                            }
                                        }}
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                                    >
                                        −
                                    </button>

                                    <span className="min-w-5 text-center font-medium">
                                        {guests}
                                    </span>

                                    <button
                                        onClick={() => {
                                            if (guests < 10) {
                                                setGuests(guests + 1);
                                            }
                                        }}
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                                    >
                                        +
                                    </button>

                                </div>

                            </div>

                        </div>


                        {/* Cancellation */}

                        <div className="mt-5 rounded-xl bg-gray-100 px-4 py-3 text-center text-sm">

                            Free cancellation before 20 August

                        </div>


                        {/* Reserve */}

                        <button
                            disabled={nights <= 0}
                            className="mt-5 w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-600 py-4 text-lg font-semibold text-white transition hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:from-gray-400 disabled:to-gray-400"
                        >
                            Reserve
                        </button>


                        {/* Payment Message */}

                        <p className="mt-5 text-center text-lg">
                            You won't be charged yet
                        </p>

                    </div>

                </div>

            </div>

        </div >
    );
};

export default ProductDetails;