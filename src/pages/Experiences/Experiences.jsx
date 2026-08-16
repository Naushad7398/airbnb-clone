import React from "react";
import SectionSlider from "../../components/SectionSlider/SectionSlider";
import { northGoa } from "../../data/northGoa";
import { southGoa } from "../../data/southGoa";
import { mumbai } from "../../data/mumbai";

const Experiences = () => {
  const experiencePlaces = [...northGoa.slice(0, 5), ...southGoa.slice(0, 3), ...mumbai.slice(0, 4)];

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-12">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Experiences
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
          Memorable stays and local experiences
        </h1>
      </div>

      <div className="space-y-8">
        <SectionSlider title="Popular experiences in Goa" data={experiencePlaces} />
        <SectionSlider title="Beachside escapes" data={northGoa.slice(0, 6)} />
        <SectionSlider title="City adventures" data={mumbai.slice(0, 6)} />
      </div>
    </div>
  );
};

export default Experiences;
