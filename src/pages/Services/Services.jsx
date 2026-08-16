import React from "react";

const services = [
  {
    title: "Private chef",
    description: "Enjoy curated meals prepared in your home by a local chef.",
    icon: "🍳",
  },
  {
    title: "Airport transfers",
    description: "Pre-book a safe and comfortable ride to and from the airport.",
    icon: "🚗",
  },
  {
    title: "House cleaning",
    description: "Freshen up your stay with trusted cleaning professionals.",
    icon: "🧼",
  },
  {
    title: "Guided tours",
    description: "Explore the best local spots with handpicked experiences.",
    icon: "🧭",
  },
];

const Services = () => {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-12">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Services
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
          Helpful services for a smooth stay
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-3xl">
              {service.icon}
            </div>

            <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
