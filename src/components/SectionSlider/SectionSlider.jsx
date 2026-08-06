import React, { useRef, useEffect, useState } from "react";

import ArrowButtons from "./ArrowButtons";
import SeeAllCard from './SeeAllCard';
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

        setShowLeft(slider.scrollLeft > 0);

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

        return () => {
            slider.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <section className="mx-auto max-w-[1750px] px-6 py-8">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-3xl font-semibold">
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
                className="flex gap-4 overflow-x-auto scroll-smooth py-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
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
                        data[0].image,
                        data[1].image,
                    ]}
                />

            </div>

        </section>
    );
}
export default SectionSlider;