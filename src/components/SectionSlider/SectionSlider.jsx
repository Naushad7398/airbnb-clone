import React, { useRef, useEffect, useState } from "react";

import ArrowButtons from "./ArrowButtons";
import SeeAllCard from "./SeeAllCard";
import PropertyCard from "../PropertyCard/PropertyCard";

const SectionSlider = ({ title, data }) => {
    const scrollRef = useRef(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const scrollLeft = () => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: -scrollRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: scrollRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    const checkScroll = () => {
        const slider = scrollRef.current;

        if (!slider) return;

        setShowLeft(slider.scrollLeft > 5);

        setShowRight(
            slider.scrollLeft + slider.clientWidth <
                slider.scrollWidth - 10
        );
    };

    useEffect(() => {
        checkScroll();

        const slider = scrollRef.current;

        if (!slider) return;

        slider.addEventListener("scroll", checkScroll);

        window.addEventListener("resize", checkScroll);

        return () => {
            slider.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, [data]);

    return (
        <section className="mx-auto w-full max-w-[1750px] px-0 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-6">

            {/* Header */}

            <div className="mb-3 flex items-center justify-between sm:mb-4 lg:mb-5">

                <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
                    {title}
                </h2>

                <ArrowButtons
                    showLeft={showLeft}
                    showRight={showRight}
                    onPrev={scrollLeft}
                    onNext={scrollRight}
                />

            </div>


            {/* Scroll Container */}

            <div
                ref={scrollRef}
                className="
                    flex
                    gap-3
                    overflow-x-auto
                    scroll-smooth
                    snap-x
                    snap-mandatory
                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                    sm:gap-4
                    lg:gap-5
                "
            >

                {data.map((property) => (
                    <PropertyCard
                        key={property.id}
                        id={property.id}
                        title={property.title}
                        location={property.location}
                        distance={property.distance}
                        dates={property.dates}
                        guestFavourite={property.guestFavourite}
                        price={property.price}
                        rating={property.rating}
                        images={property.images}
                        liked={property.liked}
                        onLike={property.onLike}
                    />
                ))}


                <SeeAllCard
                    title={title}
                    images={[
                        data[0]?.images?.[0],
                        data[1]?.images?.[0],
                    ]}
                />

            </div>

        </section>
    );
};

export default SectionSlider;