import React from "react";
import SectionSlider from "../../components/SectionSlider/SectionSlider";
import { northGoa } from "../../data/northGoa";
import { southGoa } from "../../data/southGoa";
import { lonavala } from "../../data/lonavala";

const Homes = () => {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-12">
      <div className="space-y-8">
        <SectionSlider title="Popular homes in Lonavala" data={lonavala.slice(0, 7)} />
        <SectionSlider title="Available in North Goa next weekend" data={northGoa.slice(0, 7)} />
        <SectionSlider title="Stay in South Goa" data={southGoa.slice(0, 7)} />
      </div>
    </div>
  );
};

export default Homes;
