// components/Content.tsx

import { Link } from "react-router";

export default function FeaturesSection() {
  const ourFeatures = [
    {
      title: "Attention to Detail",
      description:
        "We carefully plan and execute every step of our service, ensuring nothing is overlooked.",
    },
    {
      title: "Pricing",
      description:
        "We offer transparent and competitive pricing tailored to your needs, and every estimate is carefully prepared.",
    },
    {
      title: "Support",
      description:
        "Our expert technical team is always available to support you throughout your equipment's lifecycle.",
    },
    {
      title: "Best Services",
      description:
        "We are committed to consistently exceeding client expectations by delivering reliable and high-quality services.",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-200">
            Why Choose Us?
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Elevating</span>
          </span>{" "}
          Your Technical Experience
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We deliver superior technical support while maintaining
          industry-leading customer satisfaction, ensuring your operations run
          smoothly.
        </p>
      </div>

      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center space-y-6">
          {ourFeatures.map((feature, index) => (
            <div key={index} className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50">
                  <svg
                    className="w-6 h-6 text-indigo-500"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  {feature.title}
                </h6>
                <p className="text-sm text-gray-900">{feature.description}</p>
                {index !== ourFeatures.length - 1 && (
                  <hr className="w-full my-1 border-gray-300" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-5">
          <Link
            to={"https://www.metrixvibration.com/"}
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg cursor-pointer"
          >
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg cursor-pointer"
              src="/metrix.png"
              alt="Instrument monitoring"
            />
          </Link>
          <div>
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="/factory.jpg"
              alt="Technician at work"
            />
          </div>
          <div>
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="/warehouse.jpg"
              alt="Control panel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
